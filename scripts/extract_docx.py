"""Generate the Angular document data module from the source DOCX.

The script keeps the Word document as the source of truth and preserves
paragraph order, list type, inline italics, and hyperlinks.
"""

from __future__ import annotations

import argparse
import json
import re
import unicodedata
from pathlib import Path

from docx import Document
from docx.oxml.ns import qn


def slugify(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", value)
    ascii_value = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-z0-9]+", "-", ascii_value.lower()).strip("-")
    return slug or "seccion"


def merge_run(output: list[dict], text: str, *, italic: bool, href: str | None) -> None:
    if not text:
        return

    run: dict[str, object] = {"text": text}
    if italic:
        run["italic"] = True
    if href:
        run["href"] = href

    if output and {key: value for key, value in output[-1].items() if key != "text"} == {
        key: value for key, value in run.items() if key != "text"
    }:
        output[-1]["text"] += text
    else:
        output.append(run)


def rich_text(paragraph) -> list[dict]:
    content: list[dict] = []
    for item in paragraph.iter_inner_content():
        if hasattr(item, "address"):
            for run in item.runs:
                merge_run(
                    content,
                    run.text,
                    italic=run.italic is True,
                    href=item.address or None,
                )
        else:
            merge_run(
                content,
                item.text,
                italic=item.italic is True,
                href=None,
            )
    return content


def numbering_formats(document) -> dict[str, str]:
    root = document.part.numbering_part.element
    abstract_by_id = {
        node.get(qn("w:abstractNumId")): node
        for node in root.findall(qn("w:abstractNum"))
    }
    formats: dict[str, str] = {}

    for number in root.findall(qn("w:num")):
        number_id = number.get(qn("w:numId"))
        abstract_id = number.find(qn("w:abstractNumId")).get(qn("w:val"))
        abstract = abstract_by_id.get(abstract_id)
        if abstract is None:
            continue
        level = abstract.find(qn("w:lvl"))
        if level is None:
            continue
        number_format = level.find(qn("w:numFmt"))
        if number_format is not None:
            formats[number_id] = number_format.get(qn("w:val"))

    return formats


def paragraph_number_id(paragraph) -> str | None:
    properties = paragraph._p.pPr
    if properties is None or properties.numPr is None or properties.numPr.numId is None:
        return None
    return str(properties.numPr.numId.val)


def strip_label(value: str, label: str) -> str:
    return value[len(label) :].strip() if value.startswith(label) else value.strip()


def extract(source: Path) -> tuple[dict, list[dict]]:
    document = Document(source)
    paragraphs = document.paragraphs
    nonempty = [(index, paragraph) for index, paragraph in enumerate(paragraphs) if paragraph.text.strip()]

    by_index = {index: paragraph.text.strip() for index, paragraph in nonempty}
    metadata = {
        "institution": by_index[0],
        "faculty": by_index[2],
        "title": by_index[10],
        "documentType": by_index[13],
        "program": by_index[16],
        "author": strip_label(by_index[19], "Presenta:"),
        "advisors": strip_label(by_index[22], "Responsables:").splitlines(),
        "date": strip_label(by_index[25], "Fecha:"),
    }

    number_formats = numbering_formats(document)
    sections: list[dict] = []
    counters = [0, 0]
    current_section: dict | None = None

    for paragraph in paragraphs:
        text = paragraph.text.strip()
        if not text:
            continue

        style = paragraph.style.name
        if style in {"Heading 1", "Heading 2"}:
            level = 1 if style == "Heading 1" else 2
            if level == 1:
                counters[0] += 1
                counters[1] = 0
                number = str(counters[0])
            else:
                counters[1] += 1
                number = f"{counters[0]}.{counters[1]}"

            current_section = {
                "id": f"seccion-{number.replace('.', '-')}-{slugify(text)}",
                "level": level,
                "number": number,
                "title": text,
                "blocks": [],
            }
            sections.append(current_section)
            continue

        if current_section is None:
            continue

        content = rich_text(paragraph)
        if style == "List Paragraph":
            number_id = paragraph_number_id(paragraph)
            ordered = number_formats.get(number_id or "") != "bullet"
            blocks = current_section["blocks"]
            if blocks and blocks[-1]["type"] == "list" and blocks[-1]["ordered"] == ordered:
                blocks[-1]["items"].append(content)
            else:
                blocks.append({"type": "list", "ordered": ordered, "items": [content]})
        else:
            current_section["blocks"].append({"type": "paragraph", "content": content})

    return metadata, sections


def write_typescript(output: Path, metadata: dict, sections: list[dict]) -> None:
    banner = """// Generated from the source Word document. Do not edit academic content by hand.\n\nexport interface RichTextRun {\n  readonly text: string;\n  readonly italic?: boolean;\n  readonly href?: string;\n}\n\nexport type DocumentBlock =\n  | { readonly type: 'paragraph'; readonly content: readonly RichTextRun[] }\n  | { readonly type: 'list'; readonly ordered: boolean; readonly items: readonly (readonly RichTextRun[])[] };\n\nexport interface DocumentSection {\n  readonly id: string;\n  readonly level: 1 | 2;\n  readonly number: string;\n  readonly title: string;\n  readonly blocks: readonly DocumentBlock[];\n}\n\n"""
    metadata_json = json.dumps(metadata, ensure_ascii=False, indent=2)
    sections_json = json.dumps(sections, ensure_ascii=False, indent=2)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        banner
        + f"export const documentMetadata = {metadata_json} as const;\n\n"
        + f"export const documentSections: readonly DocumentSection[] = {sections_json};\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()

    metadata, sections = extract(args.source)
    write_typescript(args.output, metadata, sections)
    print(f"Generated {args.output} with {len(sections)} sections.")


if __name__ == "__main__":
    main()
