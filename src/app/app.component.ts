import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  computed,
  signal,
} from '@angular/core';

import {
  DocumentSection,
  documentMetadata,
  documentSections,
} from './document-content';

interface OutlineGroup {
  readonly section: DocumentSection;
  readonly children: readonly DocumentSection[];
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly metadata = documentMetadata;
  readonly sections = documentSections;
  readonly outline = this.buildOutline(documentSections);
  readonly activeSectionId = signal(documentSections[0]?.id ?? '');
  readonly activeSection = computed(
    () => {
      const activeId = this.activeSectionId();
      return (
        this.outline.find(
          (group) =>
            group.section.id === activeId ||
            group.children.some((child) => child.id === activeId),
        )?.section ?? this.sections[0]
      );
    },
  );

  private observer?: IntersectionObserver;
  private scrollFrame?: number;
  private readonly updateOnResize = () => this.updateActiveSection();
  private readonly updateOnScroll = () => {
    if (this.scrollFrame !== undefined) {
      return;
    }

    this.scrollFrame = requestAnimationFrame(() => {
      this.scrollFrame = undefined;
      this.updateActiveSection();
    });
  };

  ngAfterViewInit(): void {
    const headings = this.sectionHeadings();
    if (!headings.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      () => this.updateActiveSection(),
      {
        rootMargin: '-22% 0px -68% 0px',
        threshold: [0, 1],
      },
    );

    headings.forEach((heading) => this.observer?.observe(heading));
    window.addEventListener('resize', this.updateOnResize, { passive: true });
    window.addEventListener('scroll', this.updateOnScroll, { passive: true });

    requestAnimationFrame(() => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const initialSection = this.sections.find((section) => section.id === hash);
      if (initialSection) {
        this.activeSectionId.set(initialSection.id);
        document.getElementById(initialSection.id)?.scrollIntoView({ block: 'start' });
      } else {
        this.updateActiveSection();
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    window.removeEventListener('resize', this.updateOnResize);
    window.removeEventListener('scroll', this.updateOnScroll);
    if (this.scrollFrame !== undefined) {
      cancelAnimationFrame(this.scrollFrame);
    }
  }

  navigateTo(sectionId: string, event: MouseEvent): void {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    this.activeSectionId.set(sectionId);
    window.history.replaceState(null, '', `#${sectionId}`);

    const mobileOutline = document.querySelector<HTMLDetailsElement>('.mobile-outline');
    if (mobileOutline) {
      mobileOutline.open = false;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private sectionHeadings(): HTMLElement[] {
    return Array.from(
      document.querySelectorAll<HTMLElement>('[data-document-section]'),
    );
  }

  private updateActiveSection(): void {
    const readingLine = window.innerHeight * 0.24;
    let current = this.sections[0]?.id ?? '';

    for (const section of this.sections) {
      const heading = document.getElementById(section.id);
      if (!heading || heading.getBoundingClientRect().top > readingLine) {
        break;
      }
      current = section.id;
    }

    if (current) {
      this.activeSectionId.set(current);
    }
  }

  private buildOutline(sections: readonly DocumentSection[]): readonly OutlineGroup[] {
    const groups: { section: DocumentSection; children: DocumentSection[] }[] = [];

    for (const section of sections) {
      if (section.level === 1) {
        groups.push({ section, children: [] });
      } else {
        groups.at(-1)?.children.push(section);
      }
    }

    return groups;
  }
}
