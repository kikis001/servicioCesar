// Generated from the source Word document. Do not edit academic content by hand.

export interface RichTextRun {
  readonly text: string;
  readonly italic?: boolean;
  readonly href?: string;
}

export type DocumentBlock =
  | { readonly type: 'paragraph'; readonly content: readonly RichTextRun[] }
  | { readonly type: 'list'; readonly ordered: boolean; readonly items: readonly (readonly RichTextRun[])[] };

export interface DocumentSection {
  readonly id: string;
  readonly level: 1 | 2;
  readonly number: string;
  readonly title: string;
  readonly blocks: readonly DocumentBlock[];
}

export const documentMetadata = {
  "institution": "Universidad Nacional Autónoma de México",
  "faculty": "Facultad de Estudios Superiores Cuautitlán",
  "title": "Revisión bibliográfica sobre Proteína Vegetal Texturizada",
  "documentType": "Servicio Social",
  "program": "Ingeniería en Alimentos",
  "author": "César Alejandro Mera Colín",
  "advisors": [
    "Dra. María Andrea Trejo Márquez y",
    "Dra. Selene Pascual Bustamante"
  ],
  "date": "30/05/2026"
} as const;

export const documentSections: readonly DocumentSection[] = [
  {
    "id": "seccion-1-introduccion",
    "level": 1,
    "number": "1",
    "title": "INTRODUCCIÓN.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Este trabajo tiene como objetivo proporcionar información sobre la elaboración de proteínas vegetales texturizadas. La información tiene diferentes enfoques que abarcan desde el origen de la materia prima, las tecnologías de procesamiento que se aplican, el potencial de comercialización, la aceptación del consumidor, por mencionar algunos. Se sugiere que la información se maneje como una pequeña muestra de información, ya que los artículos especializados consultados tienen mucha más profundidad en temas específicos. Algunos autores e investigadores pueden llegar a referenciarse entre ellos, por lo que es normal poder encontrar información repetida. Aun así, este compendio de información segmenta aportes de cada fuente de consulta, de manera que el lector pueda tener un panorama muy general pero actualizado sobre el origen y procesos de los análogos de carne."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En el mercado actual, los consumidores se han vuelto cada vez más demandantes al solicitar mejores productos en apariencia, sabor, aporte nutritivo y menor impacto ambiental. En cuanto a los productos cárnicos, la población es cada vez más consciente sobre la ética en el trato animal, como consecuencia, se ha visto influenciada en cambiar su estilo de vida y su consumo de productos de origen animal. "
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Un sector de la población ha reducido o anulan su consumo de alimentos y productos directamente de fuentes animales, denominados vegetarianos y veganos, influenciados en parte por ritmos de vida normalizados en otras partes del mundo. "
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En respuesta a estas demandas tanto de impacto ambiental, ética animal, y el sector de la población en tendencia de dieta vegana, la industria alimenticia ha desarrollado alternativas innovadoras para cubrir las exigencias nutrimentales, así como reducir la dependencia de materias primas de origen animal. "
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A continuación, se presenta información sobre las nuevas tendencias y principales industrias que actúan para generar valor en este mercando tan cambiante."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-1-1-impacto-del-consumo-de-carne",
    "level": 2,
    "number": "1.1",
    "title": "Impacto del consumo de carne.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se ha estimado que se necesitará producir 70% más alimento en las próximas décadas y que se tendrán que producir el doble o triple para el año 2100, con relación a 2005, para cubrir la creciente demanda global de alimento. El incremento en la demanda de alimento, en sí no solo se deberá al aumento de la población mundial, si no también al hecho de que las personas se vuelven más solventes económicamente, y la población tiene preferencia por los productos de origen animal por encima de los productos elaborados tradicionalmente que son de proteína de origen vegetal. (Kyriakopoulou, K., 2021)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El incremento del tamaño y afluencia de la población mundial ha conducido a una creciente demanda de comida alta en proteína, como los productos lácteos y cárnicos. Debido a que será imposible solventar suficiente proteína para todos únicamente con lácteos y carne, nos vemos en la necesidad de migrar al menos una parte de nuestras dietas hacia la ingesta de comida con proteína que sean más sustentables de producir. (Kyriakopoulou, K., 2021)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La mejor forma de convencer al consumidor de aceptar esta transición es ofreciendo productos que son fáciles de introducir en sus hábitos recurrentes y de dieta por medio de una imitación de sus comidas originales."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los productos cárnicos y en especial, la carne, han tenido un impacto fuerte sobre el ambiente en el mundo, en términos de uso de agua, de los suelos, así como la emisión de gases de efecto invernadero y el consumo de energía. En su artículo “Structuring processes for meat analogues” de Dekkers en 2018, menciona que se necesita una cantidad muy alta de proteína vegetal para la producción de carne. En concreto menciona que se necesitan en promedio 6 Kg de proteína de origen vegetal para obtener 1 Kg de proteína de la carne."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La cantidad de alimento requerido es variable entre 3.3, 6.4 y 25 Kg para aves de corral, puerco y reses respectivamente. Aparte de los temas de sustentabilidad, existen aspectos éticos junto con los cuidados de bienestar animal, los cuales son factores de discusión sobre la posibilidad de disminución de consumo de carne."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Aunque la población se ha hecho más consiente sobre los aspectos ambientales, el cuidado y bienestar animal, así como los aspectos de salud que están asociados con la carne, solo una pequeña fracción de la población mundial se ha decidido por una dieta vegetariana. La mayoría de la gente come carne regularmente, debido a que es percibida como deliciosa, saludable y nutritiva, además de estar profundamente arraigada en muchas culturas."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El término “alternativas a la carne” es bastante general, por lo que debe comprenderse como análogos que simulan fielmente la carne animal de músculo entero en textura, sabor y apariencia, y productos reestructurados que imitan carnes procesadas, como hamburguesa, empanadas, salchichas y nuggets. (Sha L., 2020)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-1-2-estrategias-para-la-disminucion-de-consumo-de-carne",
    "level": 2,
    "number": "1.2",
    "title": "Estrategias para la disminución de consumo de carne.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para ayudar a la reducción de consumo de carne, se han diseñado estrategias novedosas, algunas de las cuales son:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          [
            {
              "text": "Reducir la cantidad en la porción de carne de forma anónima en los platos durante la hora de la comida. Esto es debido a que se toma en cuenta que algunas personas consumen una cantidad mayor de proteína de origen cárnico. Esta estrategia también tiene un impacto benéfico sobre la salud de la población, siempre y cuando sea aplicado para el grupo correcto de consumidores de carne, teniendo como objetivo reducir el consumo de carne hacia un grado más modesto."
            }
          ],
          [
            {
              "text": "Una segunda estrategia es reemplazar la carne durante la comida con el consumo de vegetales, frijoles, semillas o nueces. En los productos de carne procesados, éstos pueden ser reemplazados por extensores de origen vegetal, también conocido como plant-based meat extenders, en el cual un extensor cárnico contiene una carga alta de proteína, en este caso de origen vegetal, los cuales actúan como relleno durante el procesamiento de carne. De esta manera, el contenido en sí de carne en el producto es menor, y con ello se reduce el consumo de esta. "
            }
          ],
          [
            {
              "text": "La tercera estrategia se basa en el desarrollo de productos estructurados. Ejemplos tradicionales de estos productos son el tofu, tempeh y seitán, los cuales se producen y consumen en el este de Asia desde hace siglos. Sin embargo, el consumo y aceptación de estos productos es menor en los países del oeste de ese continente. Por lo tanto, una nueva categoría de productos estructurados ha emergido, a los cuales se les denomina análogos de carne. Los análogos de carne son productos que pueden reemplazar a la carne en su funcionalidad, siendo similares en sus propiedades y atributos sensoriales, así también pueden ser preparados por los consumidores como si en realidad fueran carne. La semejanza de estos productos con la carne, en términos de textura, sabor, apariencia, y aroma son de especial importancia para los consumidores que con mayor frecuencia recurren a la carne. (Dekkers B, 2018)."
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "seccion-1-3-analogos-de-carne",
    "level": 2,
    "number": "1.3",
    "title": "Análogos de carne.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Existen una variedad de estrategias para imitar la textura de la carne, las cuales dependen del tipo de producto cárnico que se quieren imitar. La carne y sus productos se pueden categorizar como molida, picado o músculo entero. Así mismo, los análogos de carne apuntan a imitar los productos con carne, ya sean molida, picada o el músculo entero."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los análogos de carne para el músculo entero se caracterizan por tener una pronunciada estructura fibrosa. El incremento de variedad de ingrediente que se usan para este propósito, la variedad de productos que se producen con estos ingredientes y su valor nutricional han sido recopilados por diversas investigaciones. Además, otras investigaciones han estudiado la aceptación del consumidor, la adecuación de los ingredientes para el producto y también las preferencias sensoriales a los productos análogos de carne. (Dekkers B, 2018)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En la elaboración de los productos texturizados vegetales, se han estudiado los alimentos proteicos fibrilares, que es como se conoce al proceso que dan como producto final un análogo de carne, dependiendo de su aplicación. "
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Diversas técnicas se han propuesto para el desarrollo de estructuras similares a la carne y estas pueden verse desde dos diferentes ángulos. Éstas técnicas se centran en imitar la estructura a una escala larga y grande (top-down) o en crear elementos estructurales individuales que serán ensamblados subsecuentemente en una variedad de productos (bottom-up). (Dekkers B, 2018)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La primera técnica (top-down) se categoriza por utilizar tecnologías como la extrusión, el cizallamiento a alta temperatura y la texturización por congelamiento, sin embargo, éste proceso no ensambla la arquitectura micrométrica primaria en términos de carne. Durante el proceso, una o más fases dispersadas dentro de la estructura se deforman en una asimilación interna. Tratamientos adicionales como procesos de calentamiento, enfriamiento o de coagulación se aplican para solidificar el sistema. (Kyriakopoulou, 2021)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La segunda categoría consiste en utilizar tecnología como el spinning (tejido/hilado), en el cual las fibras se producen y se van uniendo hasta formar el producto final que se va mezclando con agentes aglutinantes. En este proceso direccional se deben alinear los elementos estructurales individuales y de esta forma asemejarse a la carne. Así también pueden llegar a utilizarse hongos filamentosos, ya que estos elementos se ensamblan de la misma manera, en este caso las fibras son hifas fúngicas en lugar de fibras extruidas. (Kyriakopoulou, 2021)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La proteína del micelio filamentoso confiere una característica masticable similar a la de la carne y se considera beneficiosa para la salud. Sin embargo, debido al alto costo de producción, los impactos climáticos proyectados y otros factores, este proceso aún se encuentra en desarrollo o en proceso de mejora. (Sha L., 2020)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-2-variedades-de-pvt-en-el-mercado",
    "level": 1,
    "number": "2",
    "title": "Variedades de PVT en el mercado.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las principales fuentes de proteína de origen vegetal son las leguminosas (soya, chícharo, habas), los cereales (trigo, avena y arroz), pseudocereales (quinoa, amaranto, chía), nueces (almendras, cacahuates y nuez de la india) y semillas (cáñamo y semillas de girasol). Ofrecen beneficios para la salud, como la mejora del sistema inmunológico y gastrointestinal, y además tienen propiedades antioxidantes, antiinflamatorias y la disminución de padecer enfermedades degenerativas. (Ilse Monroy, 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La proteína de origen vegetal es fundamental en el desarrollo de alimentos análogos de la carne, imitando las propiedades de la textura y estructura de las proteínas de origen animal (actina, miosina, mioglubina, colágeno, albúmina, caseína, lactoglobulina y lactoalbúmina). (Ilse Monroy, 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las proteínas vegetales que se encuentran en mayor proporción son las de tipo globulares que se encuentran en leguminosas, cereales y semillas. Una vez extraídas de sus fuentes, a menudo es necesario modificarlas para mejorar sus propiedades de funcionalidad, como la capacidad de formas estructuras como fibras, geles, emulsiones y espumas. (Ilse Monroy, 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Como se ha mencionado anteriormente, las alternativas a la carne se pueden clasificar también como de origen vegetal (soja, guisante, gluten, etc.), de origen celular (in vitro) y de fermentaciones (micoproteínas). Sin embargo, los avances recientes en el campo también incluyen otras fuentes de proteínas, por ejemplo, proteínas de microalgas extraídas de Spirulina y proteínas aisladas de insectos. (Ilse Monroy, 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para tener éxito, las alternativas cárnicas de origen vegetal deben tener sabor a carne. El atributo del sabor, así como la sensación en boca, es fundamental para motivar a los consumidores habituales de carne a modificar su comportamiento alimentario reduciendo su consumo. Ciertamente, otros factores también pueden influir, por ejemplo, la presencia de guarniciones. Esto se ha destacado en un informe de investigación de consumidores dentro del programa Protein Foods, Environment, Technology and Society (PROFETAS), en el cual descubrieron que el contexto con el que se presenta la comida, influyó en la percepción sensorial del consumidor y la aceptabilidad de los sustitutos de carne. (Sha L., 2020)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los productos proteicos alternativos, como las hamburguesas, los filetes y las albóndigas fritas a base de legumbres, que existen desde hace décadas y que alguna vez se consideraron un nicho de mercado en la industria alimentaria, están experimentando una rápida expansión. Las alianzas y la cooperación entre emprendedores y empresas de capital de riesgo han desempeñado un papel fundamental en el auge del mercado. Beyond Meat, Impossible Foods y Gardien son ejemplos de empresas exitosas, y muchas empresas tradicionales de carne y aves de corral, también se han sumado al mercado de la carne alternativa, desarrollando sus propias marcas de producto de origen vegetal. (Sha L., 2020)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En mayo de 2019, la empresa Impossible Foods, en asociación con Burger King, lanzó Impossible Whoppers sin carne de origen vegetal; en enero de 2020, se agregaron Impossible Pork e Impossible Sausage sin carne al menú del restaurante. En agosto de 2019, KFC comenzó a servir “alitas de pollo” y Nuggets deshuesados de origen vegetal desarrollados por Beyond Meat y LightLife. "
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Por otro lado, Kroger, la mayor cadena de supermercados de EE. UU., también ha introducido carne picada, hamburguesas y otros productos sin carne a base de proteína de chícharo bajo su línea Simple Truth Emerge. Estas pruebas iniciales han impulsado a numerosas cadenas de comida rápida a experimentar con productos sin carne, y este auge del mercado parece que continuará en los próximos años. (Sha L., 2020)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Sin embargo, a diferencia del cultivo celular, que tiene el potencial tecnológico para producir carne de músculo entero, es difícil, si no imposible, reconstruir carne de músculo entero a partir de proteínas vegetales con respecto a la textura fina que se asemeja microscópicamente a los miofilamentos tanto en ternura como en jugosidad, por lo tanto debemos considerar que el general de los productos alternativos de origen vegetal que encontraremos en supermercados son productos reestructurados o reconstruidos. (Sha L., 2020)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-2-1-soya",
    "level": 2,
    "number": "2.1",
    "title": "Soya.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Prácticamente todas las proteínas vegetales podrían ser candidatas para la preparación de análogos de carne y otros productos alternativos. Sin embargo, considerando su amplia disponibilidad, costo y funcionalidad de procesamiento, las proteínas de soya, chícharo y el gluten de trigo, son las más utilizadas como base para productos alternativos. La estructura globular nativa de las proteínas de leguminosas no es propicia para construir una textura fibrosa similar a la de la carne. Por lo tanto, los procesos disruptivos, como la extrusión térmica y el hilado de fibras, que transforman los glóbulos nativos en agregados filamentosos o fibras interactivas, se vuelven necesarios. (Sha L., 2020)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Entre las propiedades funcionales de la soya texturizada, Rivera Pérez en 2026 en su estudio del desarrollo de una nugget a base de soya y chícharo texturizado, pudieron encontrar los siguientes datos."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para la retención de agua, la muestra tiene una capacidad de 2.31 g/g, lo cual permite retener la humedad necesaria para mejorar la jugosidad y el rendimiento durante la cocción. Este dato es similar al encontrado en una revista de difusión de la Industria Alimenticia, donde menciona que una taza de proteína de soya texturizada (TSP) seca que se reconstituye en 1 taza de líquido, da un rendimiento de alrededor de dos tazas."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para la retención de aceite, la muestra retuvo 1.25 g/g de aceite, lo que ayuda a determinar la jugosidad, la suavidad y la integridad estructural de la matriz durante la preparación térmica."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En la capacidad y estabilidad emulsionante, presenta un 14.27% de capacidad emulsionante y un 10.47% de estabilidad. Estas propiedades facilitan la interacción entre el agua y las grasas para integrar adecuadamente los ingredientes en el análogo de carne."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "También se incluye la capacidad de gelificación, la cual debe tener una concentración mínima de 22% p/v, lo que se traduce como capacidad para formar estructuras tridimensionales capaces de retener agua y dar consistencia al producto."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Presenta una solubilidad baja en medio ácidos debido a la proximidad a su región isoeléctrica. Muestra valores de solubilidad más altos en condiciones alcalinas y neutras, este rango se encuentra entre el pH 7 a 12."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En la composición química proximal, la muestra refiere los siguientes valores. Humedad 6.24±0.13%, Grasa 1.26±0.24%, Proteína 47.19±0.13%, Cenizas 7.38±0.03%, Carbohidratos 37.92%. (Rivera Pérez, 2026)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-2-2-chicharo",
    "level": 2,
    "number": "2.2",
    "title": "Chícharo.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se utiliza en forma de proteína texturizada, sola o combinada con soya, para elaborar análogos de nuggets de pollo con propiedades de firmeza y masticabilidad similares a los productos comerciales. (Rivera Pérez, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Su uso como fuente de proteína vegetal requiere menos recursos naturales y genera una menor huella de carbono en comparación con la producción de carne animal."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A diferencia de la soya que presenta retrogusto más acentuado no tan agradable, el chícharo es reconocido por su sabor suave y mejores características para el procesamiento, además de tener un menor potencial alergénico, considerado como hipoalergénico. (Rivera Pérez, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Entre sus propiedades funcionales, tiene una elevada retención de agua, lo cual permite que permanezca una gran parte durante la cocción, mejorando la textura final del producto, confiriendo propiedades como mayor jugosidad y rendimiento."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En su forma texturizada comercial obtenida de aislado proteicos, tiene una concentración mayor de proteína en comparación al de la soya. Las combinaciones de ambas proteínas mejoran los atributos sensoriales, como el sabor y el color, del cual explican que, al aumentar la proporción de chícharo en la mezcla de nuggets, incrementa el parámetro a* llegando a tonos rojizos oscuros, disminuyen L* atribuido a la luminosidad y b* mostrando tonalidades amarillas. (Rivera Pérez, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Como propiedades funcionales de la proteína de chícharo texturizada se mostraron valores de 2.71±0.04 g/g de retención de agua, siendo este parámetro mayor que la soya, también reportan una capacidad emulsionante de 34.62±0.01% gracias a una distribución equilibrada de aminoácidos polares y no polares, también mostrando ser significativamente mejor emulsionante que la soya, continuando con los datos, se reporta que existe una estabilidad de la emulsión de 16.52±4.69% ofreciendo mayor resistencia al colapso de la estructura durante los procesos térmicos, se reporta de igual forma que hay una retención de aceite de 1.34±0.06 g/g y una concentración mínima de gelificación de 22% p/v."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En solubilidad de la proteína presenta un máximo de solubilidad en un rango ligeramente ácido y neutro siendo éstos pH de 6 a 8. (Rivera Pérez, 2026)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-2-3-gluten-de-trigo",
    "level": 2,
    "number": "2.3",
    "title": "Gluten de trigo.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El trigo se ha utilizado en diversas aplicaciones alimenticias, por ejemplo, la panificación y repostería donde se usa como refuerzo para harinas flojas mejorando el volumen del pan, la miga y la textura. Además, se ha utilizado para pastas y fideos, los cuales mejoran la firmeza tras la cocción y reduce la pérdida de almidón en el agua."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Tecnológicamente el gluten del trigo se utiliza como emulsionante y aglutinante en embutidos. El gluten es una red compleja de proteínas insolubles en agua formada principalmente por dos fracciones, las gliadinas y las gluteninas."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las gliadinas aportan viscosidad y extensibilidad, permitiendo que la masa fluya y se estire, ahora las gluteninas están formadas por enlaces disulfuro intermoleculares, que aportan elasticidad y firmeza estructural. En la industria moderna, el gluten de trigo ha pasado de ser la base del pan tradicional a ser el ingrediente estrella para el desarrollo de análogos y sustitutos de carne."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En la producción de sustitutos de carne como el seitan o versiones industrializadas, el gluten de trigo es el componente estructural indispensable para emular la fibra muscular animal. En productos cárnicos tradicionales se utiliza como extensor y aglutinante económico en salchichas o embutidos para aumentar la retención de agua."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El gluten de trigo se obtiene tras separar el almidón de la harina, el análisis proximal del gluten arroja los siguientes datos. Para proteína cruda con un factor de conversión de (N x 5.7 o 6.25) el porcentaje obtenido es de 75-82%. También presenta una humedad de 6-10%, en relación a los lípidos es bajo con un 1-2.5%, para la fibra cruda reportan un porcentaje de 0.5 a 1.5%, en minerales alcanza 0.8 a 2%."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para los valores de funcionalidad el gluten retiene 1.5 y 2 gramos de agua por gramo de gluten seco, esta absorción es fundamental para mantener la masticabilidad por medio de la estructura hidráulica en un análogo de carne. También tiene valores importantes para la retención de aceite, de 1 a 1.5 gramos de aceite por gramo de gluten, lo cual ayuda a fijar los lípidos añadidos a la matriz para que no se separen durante la cocción. Aunque el gluten es nativamente insoluble en agua, sus fracciones, en especial la gliadinas, actúan como agentes de interfaz en emulsiones tipo aceite en agua (O/W). Presenta una estabilidad de emulsión típicamente superior al 85-95% pero tras someterse a ciclos térmicos, permitiendo atrapar grasas de manera eficiente junto con proteínas de chícharo y de soya."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para los ciclos térmicos, la temperatura de gelificación ocurre principalmente entre los 75 y 85°C intervalo en el que los enlaces disulfuro de las gluteninas se reorganizan de forma irreversible creando una red firme, y la concentración mínima para la gelificación requiere un porcentaje mínimo de 12 a 14% de concentración en agua para que se forme un gel tridimensional continuo al aplicar calor."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A diferencia de las proteínas de soya o leguminosas que gelifican en frío o caliente por plegamiento de globularidad, el gluten posee la capacidad de hidratarse instantáneamente para formar una matriz viscoelástica continua, lo que evita la desintegración del producto durante el cizallamiento industrial."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El alto contenido de aminoácidos no polares (glutamina y prolina) permite una elevada reactividad hidrofóbica aplicando calor, facilitando la interacción con grasas vegetales para imitar la textura de grasa intramuscular como el marmoleado."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Como se mencionó antes, el gluten es insoluble a pH neutro pero su capacidad de retención de agua y la manera que se dispersa aumentan en extremos de pH ácido o alcalino, este factor se aprovecha para modificar la textura de los sustitutos de carne. (Shewry & Tatham, 2000)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-2-4-habas-y-leguminosas",
    "level": 2,
    "number": "2.4",
    "title": "Habas y leguminosas.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para la elaboración de proteína texturizada de haba, se requiere el apoyo de dos fracciones obtenidas de la misma. Uno es el concentrado de proteína de haba, en algunos estudios, este producto se obtiene comercializado, un nombre comercial es Fava Bean Flour P60, el cual se produce mediante el fraccionamiento de molienda fina y seca de la semilla seguida por una clasificación por aire. Al ser una separación puramente mecánica basada en la densidad y tamaño de las partículas, no utiliza solventes, por lo que conserva más fibra, almidón y en gran medida la funcionalidad original, contando con un contenido de proteína alrededor del 62%. (Singh R, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La siguiente fracción es el aislado de proteína de haba, también se comercializa y puede encontrarse bajo el nombre comercial de Faba Bean Protein 90-C-EU. Este tipo de aislado se obtiene mediante fraccionamiento por vía húmeda, empleando extracciones alcalinas y ácidas, para luego ser precipitada mediante el punto isoeléctrico. En este proceso se eliminan carbohidratos, grasas y fibra, alcanzando una concentración alta en proteína de entre 83 y 90%. (Singh R. 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En un estudio donde se prepara una mezcla de ambas fracciones para ser extruidas a alta humedad, el aislado de proteína se analizó y obtuvieron 83.1% de proteína en base seca, un contenido de grasa del 2% y un contenido de fibra del 1.4%. En el concentrado de proteína de haba, presenta 62.3% de contenido de proteína, seguido de 1.6% del contenido de grasa y un mayor aporte de fibra del 13.9% del cual su mayoría es fibra insoluble. (Singh R. 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En su estado natural sin procesar, la proteína de haba presenta una solubilidad cercana al 33% en tampón fosfato, pero tras procesarla en extrusión por alta humedad se reduce hasta llegar de 5-7%. (Singh R, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El concentrado de proteína tiene mayor solubilidad, lo que favorece sus propiedades funcionales. En los productos finales existe una retención de agua de entre 3.3 y 4.7 g/g, para la retención de aceite los valores se encuentran entre 3.2 y 4.4%. Las proteínas de haba se componen en un 80% por globulinas, las cuales tienen propiedades de gelificación, espumado y capacidad emulsionante comparable a las de la soya, en concreto el concentrado de proteína, destaca por su mejor capacidad de gelificación y formación de espuma en comparación al aislado. (Singh R, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La disminución de la solubilidad y la formación de la estructura fibrosa son gracias a la formación de enlaces disulfuro y al aumento de láminas intermoleculares inducidas por el calentamiento y el cizallamiento en la extrusora, la humedad de la mezcla influye directamente en la textura, una humedad del 58% genera un producto final más blando y menos masticable. (Singh R, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se ha extruido la mezcla en proporciones diferentes e iguales por medio del extrusor de doble tornillo, en el barril se manejaron temperaturas que variaban de 125-145°C y variando niveles de humedad 50-58%. Ajustar el contenido de humedad durante la extrusión balancea la formación de fibras, la textura se vuelve suave y la retención de aminoácidos puede aumentar. (Singh R, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los procesos de cocción por extrusión a alta temperatura, vuelve al producto un poco más oscuro en relación a la materia prima, ocurre principalmente por el pardeamiento inducido por la alta temperatura en el barril. En color también adquiere tonos rojizos y cafés, seguido de tonos amarillos que varían cuando la temperatura aumenta y también en la adición de agua en la alimentación. (Singh R, 2026)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-2-5-mezclas-proteicas",
    "level": 2,
    "number": "2.5",
    "title": "Mezclas proteicas.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En su mayoría los procesos empleados para la elaboración de análogos de carne utilizan la extrusión a alta humedad, el desarrollo de análogos con este proceso, depende directamente de la interacción entre las distintas proteínas derivadas de diferentes fuentes y sus fracciones, ya que permiten modular la textura, elasticidad y retención de agua, logrando tener un parecido más cercano a un corte de carne. (Kantanen K, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El gluten de trigo aporta mayor elasticidad y resistencia debido a su capacidad de formar enlaces disulfuro y redes viscoelásticas. La proteína de chícharo genera una red de gel altamente elástica mediante el desplegamiento térmico de sus moléculas. La proteína de haba destaca por su estabilidad en la retención de agua, sin embargo, aporta menor elasticidad y una baja formación de fibras visibles. También las mezclas se han combinado con proteína de salvado de arroz, el cual aporta un contenido alto de aminoácidos azufrados generando la formación de enlaces disulfuro, aunque los geles que se obtienen son menos elásticos en comparación al gluten o al chícharo. Una proteína que también ha sido añadida a mezclas proteicas es la que se obtiene de la espirulina, la cual funciona como ingrediente funcional para enriquecer el perfil nutricional, pero tienen la menor elasticidad y menor gelificación dentro de los sistemas extruidos. (Kantanen K, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se ha encontrado que la soya es la que tiene mejor desempeño en la extrusión a alta humedad, sin embargo, se tiene mejor control añadiendo un porcentaje en su formulación de las demás proteínas. (Zhao Y, 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En las interacciones fisicoquímicas y funcionales por mezcla, se encontraron los siguientes mecanismos. El aislado de proteína de soya junto al gluten de trigo; el gluten aporta aminoácidos azufrados que generan interacciones por puentes disulfuro y forman una red viscoelástica fuerte, genera estructuras de fibra gruesas siendo así el grado más elevado de fibrosidad. (Zhao Y, 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La mezcla de proteína de soya y proteína chícharo, durante el tratamiento térmico, despliega completamente las globulinas de la proteína de chícharo, lo cual propicia la interacción hidrofóbica de las mismas con las de la soya. La proteína del chícharo genera una red de gel altamente elástica mediante el desplegamiento térmico de sus moléculas, formó la estructura más fibrosa, con fibras finas, densas y compactas, alineadas verticalmente. (Zhao Y, 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las proteínas de soya junto con las proteínas de haba, presentan una menor reactividad para formar enlaces covalentes cruzados, dando lugar a una estructura predominantemente laminar en lugar de ser fibrosa y siendo menos elástico. Sobresale por su densidad y dureza, así como por su capacidad en la retención de agua. (Zhao Y, 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La proteína de salvado de arroz aporta un alto contenido de aminoácidos azufrados generando así la formación de enlaces disulfuro, su baja solubilidad y menor absorción de agua reduce el tiempo de permanencia en el extrusor. También forma geles menos elásticos en comparación con el gluten o la proteína de chícharo. (Zhao Y, 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La interacción que existe entre la proteína de soya y la proteína aislada de espirulina interrumpe la continuidad de la red proteica de la soya debido a la diferencia en su estructura y su solubilidad. Durante el proceso de extrusión registró una baja viscosidad en su estado fundido a alta temperatura, lo que puede traducirse como menor capacidad de formación de geles viscoelásticos fuertes. La formación de fibras es la más baja de todas las mezclas anteriormente mencionadas, formando una matriz continua con orientación laminar débil, pero a pesar de su baja formación de fibras visibles, se demostró que esta mezcla es la que tiene una mayor resistencia al corte de cizalla. (Zhao Y, 2024)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-3-metodos-de-elaboracion-de-pvt",
    "level": 1,
    "number": "3",
    "title": "Métodos de elaboración de PVT.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La extrusión es el proceso más utilizado para crear Proteínas Vegetales Texturizadas, necesita ser continuo en mezcla, amasado y formado, esto se logra a través del estrés termomecánico de los materiales. Los extruidos cocidos de baja humedad, con alto contenido de almidón, proteína humedecida y que se pueden expandir, se plastifican y se empujan a través de una matriz mediante una combinación de presión, calor y cizallamiento mecánico. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El contenido de proteína de las materias primas debe estar entre 50 y 70% para obtener una estructura fibrosa. La cocción por extrusión a baja humedad ya se utilizaba en la industria alimentaria antes de 1940, mientras que la de alta humedad se desarrolló entre 1940 y 1980. Los dispositivos comunes son las extrusoras de doble husillo, que, a diferencia de las extrusoras de un solo husillo, muestran mejores propiedades de transporte dentro de la cámara y pueden utilizarse tanto para baja como para alta humedad de materiales ricos en proteínas. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La configuración del tornillo, la temperatura del cilindro, el contenido de humedad, la velocidad de alimentación y la velocidad del tornillo, así como las materias primas en sí, tienen un impacto en la calidad final de PVT, lo que hace que el proceso de extrusión sea difícil de entender. (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-3-1-alta-humedad",
    "level": 2,
    "number": "3.1",
    "title": "Alta humedad.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En el proceso de extrusión de alta humedad (HME-High Moisture Extrusion) para la producción de análogos de carne, el barril de un extrusor de doble tornillo se divide en varias zonas térmicas que son subsecuentes a manera de controlar la hidratación, desnaturalización y la alineación estructural. (Kantanen K, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En la primera zona se alimenta y se hidrata una mezcla inicial de proteínas y gluten con un flujo de agua, se llega a alcanzar una humedad de entre 50 y 70%. Se mantiene a baja temperatura, entre 20 y 50°C a manera de evitar una hidratación prematura o la formación de aglomerados duros antes de que pase a la siguiente etapa. (Kantanen K, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La siguiente etapa es la de mezclado y amasado, en el cual hay un incremento progresivo de temperatura de entre 60 a 90°C, también hay un cizallamiento, lo cual promueve que las proteínas y el gluten absorban suficiente agua y comienzan a perder su estructura principal sin llegar a desnaturalizarse por completo. (Kantanen K, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La etapa siguiente se describe como zona de fusión y termo-plastificación, esta zona es la de máxima temperatura y presión, manejando temperaturas de entre 120 y 160°C. Aquí ocurre la desnaturalización térmica masiva de gliadinas y gluteninas, rompiendo los enlaces disulfuro y transformando la mezcla en una masa fundida y fluida (viscous melt). (Kantanen K, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La masa fundida finalmente pasa por una boquilla enfriadora larga, este proceso también se conoce como enfriamiento en dado, ocurre a una temperatura de entre 40 y 80°C. Al bajar drásticamente la temperatura bajo presión, las proteínas desnaturalizadas forman nuevos enlaces disulfuro intermoleculares, orientándose en paralelo para formar fibras longitudinales idénticas a las fibras musculares de la carne animal. (Kantanen K, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-3-2-extrusion-a-baja-humedad",
    "level": 2,
    "number": "3.2",
    "title": "Extrusión a baja humedad.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El equipo principal para llevar a cabo la extrusión de baja humedad (LME-Low Moisture Extrusion) es una línea de procesamiento automatizada centrada en el extrusor industrial, complementada por equipos de acondicionamiento, corte y secado, las variables de temperatura y humedad se controla para lograr la expansión porosa deseada. (Kantanen K, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En LME, la temperatura escala drásticamente desde la entrada hasta la boquilla de salida para acumular presión antes de la descompresión. En la primera etapa hay un pre-acondicionamiento donde se alimenta la mezcla con el agua a una temperatura de entre 30 y 60°C, hasta alcanzar un porcentaje de humedad que pasa de 6-10% hasta 12-25%, la temperatura debe mantenerse baja para asegurar la humectación homogénea de la mezcla. (Kantanen K, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En la segunda zona el incremento de la temperatura alcanza entre los 70-100°C aquí a causa de la temperatura y también de la fricción mecánica, el gluten comienza a fundirse y las cadenas proteicas pierden su estructura original. Subsecuentemente comienza la tercera zona, la cual se llama cocción a alta presión con temperaturas de entre 120 y 150°C, aquí el agua dentro de la masa fundida supera su punto de ebullición, pero permanece líquida debido a la alta presión en el barril. (Kantanen K, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Comenzando con la cuarta etapa, en el punto de máxima temperatura y presión, a una temperatura de entre 150 y 180°C, en la boquilla o dado de salida, al salir al exterior, el agua sobrecalentada se evapora de forma instantánea (efecto flash), creando la red macro-porosa esponjosa que caracteriza a la proteína texturizada seca. El dado es una placa fija perforada al final del barril con orificios de geometrías específicas, circulares, rectangulares o tridimensionales. Su función es restringir el flujo para generar la altísima presión interna necesaria. Debido a esto la diferencia de presión provoca la vaporización instantánea del agua y la expansión porosa. (Kantanen K, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Junto al dado, existe un cortador frontal o cabezal, donde cuchillas giratorias montadas directamente a la salida son reguladas en velocidad para formar el producto final con la longitud deseada, formando así picadillo, trozos pequeños o tiras. Ya que el producto sale del extrusor con una humedad residual de entre 15 a 20%, pasa inmediatamente a un secador continuo por aire caliente con temperatura entre 100 y 130°C, hasta reducir la humedad a un 4-8%, haciéndolo crujiente, estable microbiológicamente y apto para empacar en seco. (Kantanen K, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-3-3-texturizacion-termica",
    "level": 2,
    "number": "3.3",
    "title": "Texturización térmica.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Como se han mencionado en los apartados anteriores, la texturización térmica de las proteínas vegetales, en su mayoría son a través de la cocción por extrusión, la cual es la tecnología líder y más viable en esta industria, lo que logra transformar proteínas vegetales en estructuras fibrosas y análogas a la carne."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La extrusión aplica simultáneamente alto cizallamiento, presión alta y también temperatura alta, los procesos pueden dividirse en dos clasificaciones, extrusión de alta y baja humedad. Una diferencia importante entre ambas es que la baja humedad genera un producto seco expandido y requiere de una rehidratación previa a su consumo, en cambio, la extrusión a alta humedad, produce una estructura húmeda no expandida con una disposición fibrosa y en capas, esto se logra enfriando la masa fundida en el extrusor justo antes de salir, logrando así imitar la textura similar a la carne fresca. (Schmid E, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Durante el mezclado, el empleo de calor y fuerza de cizalla en la zona de mezclado y en la zona de fundido, se logra romper la estructura nativa de las proteínas globulares vegetales, exponiendo los grupos funcionales internos, este rompimiento también se entiende como desplegamiento o desnaturalización de las proteínas. (Schmid E, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Posteriormente en la extrusión, interactúan enlaces covalentes, así como los no covalentes, entendiéndose como la interacción de puentes de hidrógeno e interacciones hidrofóbicas, así como puentes disulfuro. En condiciones de alta humedad, los puentes de hidrógeno y los enlaces disulfuro son los que resultan en el desarrollo de la textura fibrosa. (Schmid E, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La mezcla pasa de ser una suspensión de partículas proteicas a ser un fluido viscoso e hídrico homogéneo. Existe un fenómeno de incompatibilidad termodinámica entre proteínas y polisacáridos lo cual resulta en que se separen y se alineen en fases. Esta separación de fases, junto con el cizallamiento y enfriamiento da origen a capas fibrosas. (Schmid E, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La incompatibilidad genera una micro-separación en dos fases continuas o discontinuas, una fase es rica en proteína y otra es rica en polisacáridos con agua, esta formación también se conoce como dominio bifásico. A medida que la masa fluye a través del troquel bajo cizallamiento, los dominios separados se estiran y alargan en la dirección del flujo. Durante el enfriamiento controlado, las fases estiradas se solidifican, dando lugar a la textura estratificada y en capas, esta textura se conoce como anisotrópica. (Schmid E, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-3-4-procesos-emergentes",
    "level": 2,
    "number": "3.4",
    "title": "Procesos emergentes.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los procesos emergentes surgen para mejorar textura en los productos, tener mayor control en el ordenamiento de las proteínas en la formación de fibras, también para reducir el consumo energético de los procesos. Algunos procesos mejoran con innovaciones tecnológicas, por ejemplo, las que se centran en la etapa final de los extrusores y en lo troqueles de enfriamiento. (Schmid E, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Existe una mejora que actúa directamente dentro de la masa, esto se logra inyectando nitrógeno molecular a presión. Esta inyección crea un mecanismo de microespuma controlada por las burbujas generadas. Cuando la presión del gas es la adecuada y también la temperatura, se reduce la densidad del análogo de la carne. En textura se reduce la dureza y aumenta la capacidad de rehidratación y retención de agua gracias a la estructura porosa creada. (De Angelis D, 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Otra mejora en el proceso es la que se logra modificando la geometría del troquel en el enfriamiento, existen boquillas multiorificio conocidos también como multihole nozzle, los cuales se colocan en la unión entre el extrusor y la zona de enfriamiento, lo que genera la división del flujo en canales alineados, logrando así fibras largas y rectas que se solidifican a 40°C. (De Angelis D., 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En el troquel se ha rediseñado uno con enfriamiento rotatorio, combina el cizallamiento definido, con el proceso continuo de la extrusión. Consta de un cilindro con piezas internas giratorias que aplican el cizallamiento mientras enfrían el producto lo que permite ajustar la tasa de cizallamiento de manera independiente a la velocidad de los tornillos del extrusor fabricando así piezas estructuradas de gran volumen. (De Angelis D., 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En alternativas avanzadas y emergentes existen las conocidas como Shear Cell, las cuales aplican cizallamiento y temperatura definidos para simular estructuras fibrosas a menor velocidad. Otra alternativa es la impresión 3D, lo cual permite personalizar formas y texturas complejas, la reología y la capacidad impresión o imprimibilidad dependen en mayor medida de los hidrocoloides, almidones gelatinizados y enzimas empleadas. (De Angelis D., 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El mecanismo de la tecnología de Celda de Cizallamiento (Shear Cell) desarrolla principalmente geometrías tipo Couette (cone-in-cone o cono sobre cono), aplica una tasa de cizallamiento, presión y tratamiento térmico homogéneos y perfectamente definidos sobre una formulación con un 55% de agua y un 44% de biopolímeros. A diferencia de los extrusores, los parámetros cambian progresivamente a lo largo de las etapas del barril. La celda de cizallamiento mantiene condiciones hidrotérmicas constantes permitiendo controlar con precisión la temperatura, el tiempo de residencia, así como la velocidad de deformación. Esta tecnología se encuentra en escalas piloto y opera principalmente como un proceso por lotes. La escalada para producción comercial masiva y continua requiere un rediseño complejo del equipo. (Schmid E, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "También existen procesos no termomecánicos y de combinaciones de tecnologías, por ejemplo, la fermentación fúngica y bacteriana con micoproteínas, uso de transglutaminasa o hidrocoloides, así como integración de subproductos agroindustriales como cáscara de tomate o salvado, utilizados para mejorar textura y valor nutricional. (De Angelis D., 2024)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La estructuración por congelación o freeze structuring, es un proceso donde las soluciones o geles de aislado proteico se someten a congelación unidireccional controlada. A medida que el agua se congela, se forman cristales alargados o agujas de hielo que crecen de forma paralela, los cristales actúan como una plantilla o guía física que fuerza a las proteínas a alinearse en los espacios cristalinos, posteriormente el material se liofiliza. El resultado produce una estructura porosa y anisotrópica con una textura espumosa y fibrosa. Aunque el proceso permite un control elevado de la microestructura a escala de laboratorio, el alto consumo energético frena su viabilidad económica para la fabricación industrial a gran escala de análogos de carne. (Schmid E, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En el método de fermentación de biomasa fúngica denominada también como micoproteína, emplea la fermentación continua del hongo "
          },
          {
            "text": "fusarium venenatum",
            "italic": true
          },
          {
            "text": " en un biorreactor. Las hifas del moho crecen naturalmente con una morfología alargada y ramificada similar a las fibras del tejido muscular. La masa micelial se centrifuga, luego se calienta para reducir el ARN citoplasmático y se texturiza. Este es un proceso tecnológico que ha tenido éxito con la marca Quorn, sin embargo, consume bastante tiempo y energía en la etapa de cultivo y para lograr una cohesión entre fibras en el producto final, suele requerirse albúmina de huevo como aglutinante, lo que complica su uso en productos estrictamente veganos. (Schmid E, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El electrohilado o electrospinning utiliza campos eléctricos de alto voltaje para extraer filamentos o chorros de una solución polimérica que se solidifican durante el trayecto, formando nanofibras ultrafinas con diámetros cercanos a los 500 nm. Esta tecnología requiere que las proteínas tengan conformaciones lineales o desplegadas en solución para permitir el enredo de las cadenas. Las proteínas globulares vegetales como las de la soya o el chícharo no tienen un buen funcionamiento en el electrohilado debido a que su forma esférica limita las interacciones necesarias para formar la fibra fluida sin desnaturalizantes químicos agresivos. (Schmid E, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El mayor desafío es que los polímeros deben estar altamente concentrados con alta solubilidad y las proteínas deben comportarse como una bobina aleatoria en lugar de globulinas, requisitos que generalmente no cumplen las proteínas vegetales, que suelen ser globulares en su estado nativo y forman agregados insolubles cuando se desnaturalizan. De esta forma, numerosas proteínas animales ya se han procesado con éxito en fibras mediante electrohilado, por ejemplo, suero, colágeno, huevo, gelatina, mientras que el uso de proteínas vegetales puras se limitó a la zeína que se extrajo del maíz en etanol al 80%. Sin embargo, las mezclas de proteínas vegetales con gelatina como portador u otros polímeros hilables como la maltodextrina podrían electrohilarse con éxito en fibras debido a la glicación de los grupos carbonilo de la maltodextrina a los grupos amino libres. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La extracción de células madre o células miogénicas satélite son las involucradas en el proceso emergente de carne cultivada o in vitro, en este proceso, las células se multiplican en un biorreactor alimentado con medio de cultivo y luego se diferencian sobre un andamio (scaffold) tridimensional para generar fibras musculares reales imitando así el tejido muscular animal. Aunque el proceso imita la estructura biológica de la carne con la máxima precisión, este proceso enfrenta grandes retos de escalabilidad, costos elevados de producción y el dilema ético/comercial asociado al uso de suero de origen animal en los medios de cultivo. (Schmid E, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-4-produccion-y-comercio",
    "level": 1,
    "number": "4",
    "title": "Producción y comercio.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Aunque México cuenta con una capacidad transformadora importante mediante tecnología de extrusión, la producción primaria de insumos es limitada, por lo que gran parte de la materia prima nacional procesada se combina con insumos importados."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "México tiene espacios territoriales y ecosistemas variados para llegar a obtener proteínas alternativas y alimentos basados en plantas, sin embargo, también presenta una actividad significativa de importación tanto de concentrados proteicos como de insumos para lograr proteínas texturizadas. En 2024 se registraron apenas $3.14 millones de dólares en exportaciones en comparación a los $136 millones de dólares en importación, lo cual es una marcada evidencia de la dependencia del comercio exterior para esta categoría de ingredientes. A nivel nacional existe desarrollo y fabricación de productos, en su mayoría basados en plantas, mientras que las tendencias internacionales apuntan hacia la diversificación de fuentes de proteínas, productos con mayor contenido proteico, nuevos formatos texturizados y adaptación de los productos finales a sabores y platillos de las regiones. (Secretaría de Economía, 2024)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-4-1-produccion-nacional",
    "level": 2,
    "number": "4.1",
    "title": "Producción Nacional.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Datos obtenidos en 2024 por la Secretaría de Economía, mostraron que la producción de grano de soya y chícharo es muy limitada, por lo que gran parte de la materia prima procesada se combina con los insumos importados."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Según Sara (2026), el mercado de las proteínas vegetales en México ha experimentado un crecimiento notable; los fabricantes y proveedores de proteínas vegetales en el país se benefician del rico patrimonio agrícola del país, que incluyen vastos campos de soya y regiones emergentes de cultivo chícharo. Según informes de la industria, se prevé que el sector crezca a una tasa de crecimiento anual compuesta (CAGR) superior al 10% hasta 2030, superando a muchos análogos mundiales."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los fabricantes y proveedores de proteína vegetales aquí no son sólo productores, son innovadores y combinan ingredientes tradicionales mexicanos con técnicas de procesamiento de vanguardia para crear proteínas de alto rendimiento para alimentos, bebidas y aplicaciones de atención médica. (Sara, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "México cuenta con una amplia gama de fabricantes y proveedores de proteínas vegetales, cada uno de los cuales aporta fortalezas únicas."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Entre las entidades federativas que lideran el procesamiento, la comercialización de productos y además exportan se encuentran:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          [
            {
              "text": "El estado de Nuevo León con $1.31 millones de dólares en exportaciones."
            }
          ],
          [
            {
              "text": "Jalisco con una fuerte presencia en el sector agroindustrial exporta $1.02 millones de dólares."
            }
          ],
          [
            {
              "text": "La Ciudad de México exporta $354 mil dólares."
            }
          ],
          [
            {
              "text": "El Estado de México exporta $260 mil dólares."
            }
          ]
        ]
      }
    ]
  },
  {
    "id": "seccion-4-2-principales-productores",
    "level": 2,
    "number": "4.2",
    "title": "Principales productores.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Algunos de los principales procesadores industriales en el sector para México y de los que tiene registro el Directorio Industrial de México son:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          [
            {
              "text": "Industrial de Alimentos, S.A. (IDEA): Las marcas son PROTOVEG y PRONUTRI."
            }
          ],
          [
            {
              "text": "Industrial de Oleaginosas (INDOLEA)/Sabrosoya: Es un fabricante masivo de soya texturizada para consumo directo e industrial."
            }
          ],
          [
            {
              "text": "Alimentos COLPAC: Especializados en soya texturizada para sustitución cárnica y formulación industrial."
            }
          ],
          [
            {
              "text": "Ingredion México: Proveedor de aislados y concentrados proteicos de chícharo y leguminosas."
            }
          ],
          [
            {
              "text": "FABPSA: Formulación de aditivos, harinas y soyas texturizadas para la industria cárnica y de embutidos."
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para las marcas de consumo final y productos valor, se tienen registros de los siguientes actores:"
          }
        ]
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          [
            {
              "text": "Heartbest Foods: Desarrollo de sustitutos de carne y lácteos a base de plantas utilizando extrusión moderna. También tiene participación en la categoría de snacks libres de gluten con alta densidad de nutrientes. Su producto principal se compone de amaranto y se comercializa bajo el nombre de Amaranto Bar."
            }
          ],
          [
            {
              "text": "Birdman: Desarrollo de productos para panificación, formulaciones deportivas e ingredientes con altos grados de solubilidad. Su producto principal se describe como un sabor limpio, se compone de arroz y chícharo, su nombre comercial es Falcon Protein."
            }
          ],
          [
            {
              "text": "Mr. Tofu: La empresa incursiona en suplementos para deportistas, tiene productos enriquecidos con BCAA, los cuales son aminoácidos de cadena ramificada como leucina, isoleucina y valina, que ayudan a la recuperación muscular, disminuyen el cansancio y mejora el metabolismo. El producto principal se elabora con una mezcla de plantas y su nombre comercial es Habits Sachets."
            }
          ],
          [
            {
              "text": "Pronat-ProWinner: Comercializa y manufactura proteínas funcionales, algunos de sus productos entran en la categoría de suplementos, tienen una rápida absorción y su producto a base de soya se encuentra con el nombre ProWinner Isolate."
            }
          ],
          [
            {
              "text": "Alpura: Ha incursionado en el impulso a las alternativas lácteas en su categoría de bebidas, adicionan una mezcla híbrida de chícharo y soya bajo el nombre comercial de Pro Extra."
            }
          ]
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Estos productos muestran cómo los fabricantes y proveedores de proteínas vegetales priorizan la biodisponibilidad, el enmascaramiento del sabor y la fortificación con vitaminas y minerales. (Sara, 2026)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-4-3-importaciones",
    "level": 2,
    "number": "4.3",
    "title": "Importaciones.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Durante el periodo del año 2024, la Secretaría de Economía menciona que el comercio en importaciones para concentrados de proteínas y de sustancias proteicas para la texturización tienen un valor de $140 millones de dólares. En comparación a los $3.14 millones de dólares de exportación, es notable que existe una alta dependencia de la materia prima y de los insumos extranjeros. Aunque México cuenta con una capacidad industrial para el procesamiento y formulaciones bien desarrolladas en los estados del norte y centro del país, así como la producción de leguminosas como soya, chícharo y garbanzo, la capacidad de extracción de aislados proteicos de alta pureza resultan complejas e insuficientes para satisfacer la demanda industrial nacional."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Estados Unidos tiene una participación importante en las importaciones con $104 millones de dólares, se debe principalmente a las ventajas que otorga el marco del Tratado de Libre Comercio (T-MEC), así como al acceso de las infraestructuras agroindustriales de soya y maíz."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "China se posiciona como el segundo proveedor de insumos de bajo costo, comercializando $15.9 millones de dólares, con actividad fuerte en productos de aislado de soya y proteínas funcionales para el procesamiento industrial."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Brasil aporta un volumen importante de concentrados derivados de soya, el cual procesa el grano proveniente de Sudamérica; su actividad registra una entrada de $3.85 millones de dólares."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las importaciones provenientes de Europa muestran a Países Bajos con $2.83 millones de dólares y Alemania con $1.30 millones de dólares, los cuales proveen principalmente ingredientes de alta especialización técnica, como los concentrados de proteína de chícharo, hidrolizados y formulaciones de etiqueta limpia destinados para la industria plant-based y de nutrición especializada."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La industria cárnica constituye el mayor volumen de importación, los aislados de soya y harinas texturizadas son incorporados en la formulación de embutidos, carnes frías y productos congelados como aglutinantes, retenedores de agua y extensores de producto."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La industria de nutracéuticos y los sustitutos de carne plant-based, han requerido la importación de proteínas de chícharo, arroz, garbanzo y trigo para la elaboración de análogos de carne, suplementos deportivos y lácteos híbridos de última generación con alto valor agregado. (Secretaría de Economía, 2024)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-4-4-tendencias-comerciales",
    "level": 2,
    "number": "4.4",
    "title": "Tendencias comerciales.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las exportaciones representan más del 40% de la producción de los principales fabricantes y proveedores de proteínas vegetales, principalmente a Estados Unidos, Canadá y Europa. La creciente demanda de proteínas sostenibles y libres de alérgenos en leches vegetales, snacks y nutrición médica crea muchas oportunidades de mercado. Las empresas chinas especializadas en fibras y edulcorantes naturales pueden colaborar con estos fabricantes y proveedores de proteínas vegetales para desarrollar conjuntamente soluciones mixtas para productos bajos en azúcar y ricos en fibra. (Sara, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Algunas empresas se han asociado con agricultores en iniciativas de salud de suelos, otros han visto el reciclado de subproductos para convertirlos en alimentos para animales. El hecho de que los fabricantes internacionales puedan asociarse con proveedores de proteínas vegetales en México da apertura que exista flexibilidad en las cantidades mínimas de pedido (MOQ), también a una creación rápida de prototipos y ahorros de costos en comparación a las opciones estadounidenses. Se proyecta que los fabricantes y proveedores de proteínas vegetales en México comiencen a utilizar tecnologías emergentes como la fermentación de precisión, mezclas optimizadas por inteligencia artificial y el reciclado de proteínas, siendo la población joven la que impulsa las tendencias veganas con un 12% de tasa de crecimiento anual compuesto (CAGR). (Sara, 2026)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-5-composicion-quimica",
    "level": 1,
    "number": "5",
    "title": "Composición química.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Es necesario comprender que, en la industria de las proteínas texturizadas, las materias primas se cosechan en un estado óptimo de madurez, la duración de los cultivos y las etapas de maduración varían en cada especie."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las etapas de desarrollo de una planta se determinan clasificando el desarrollo de las hojas, las flores, las vainas y/o semillas. Para determinar la etapa, también es necesario identificar el nudo, es decir, la parte del tallo a la que se una o se unió una hoja. Se considera que una hoja está completamente desarrollada cuando la hoja del nudo que se encuentra directamente encima de ella (la siguiente hoja más joven) se ha expandido lo suficiente como para que los dos bordes laterales de cada foliolo se hayan desenrollado parcialmente y ya no se toquen. (Naeve, 2018)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Existe una clasificación que nos permite identificar las etapas reproductivas, cada nomenclatura está representada por la letra “R” seguida de un número del 1-8. Así la etapa R1 representa el inicio de la floración con una flor abierta en cualquier nudo del tallo principal. R2 describe un florecimiento pleno, con una flor abierta en uno de los dos nudos superiores del tallo principal, con la flor completamente desarrollada. La etapa R3 representa la presencia de tres dieciseisavos de pulgada a lo largo en uno de los cuatro nudos superiores del tallo principal con una hoja completamente desarrollada. En la etapa R4 la vaina crece hasta tres cuartos de pulgada. No es hasta la etapa R5 donde se presenta una semilla inicial de un octavo de pulgada en una vaina. La etapa R6 es cuando una vaina contiene una semilla verde que llena la cavidad de la vaina en uno de los cuatro nudos superiores del tallo principal con una hoja completamente desarrollada. La madurez inicial se describe en la etapa R7 como una vaina normal en el tallo que ha alcanzado su color de vaina madura. Finalmente, la etapa R8 es la etapa de madurez completa, donde el 95% de las vainas han alcanzado su color de vaina madura. Posteriormente a la etapa R8, se requieren de cinco a diez días de clima seco para reducir los niveles de humedad de la semilla a menos de 15%. (Naeve, 2018)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "A medida que las semillas maduran, la relación legumina/vicilina suelen aumentar, incrementando la cantidad total de aminoácidos azufrados, cisteína y metionina, y puentes disulfuro en la semilla madura; es importante considerar que las semillas completamente maduras ofrecen una mayor densidad de enlaces covalentes para lograr una mejor texturización y formación de fibras en los productos extruidos. (Webb D, 2023)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-5-1-proteinas",
    "level": 2,
    "number": "5.1",
    "title": "Proteínas.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En cuanto a las proteínas del garbanzo, el nitrógeno soluble disminuye su porcentaje hasta los 28 DAF (días después de la floración), ya que la semilla los utiliza rápidamente para la síntesis de sus proteínas. El porcentaje del nitrógeno proteico aumenta de forma continua conforme avanza el desarrollo y la disposición de la misma es mayor entre los 14 y 28 DAF. La lisina aumenta ligeramente hasta los 21 DAF y luego se mantiene constante. El porcentaje de proteínas solubles como alúminas y globulinas, disminuyen a medida que la semilla madura, lo que indica que en las etapas finales se acumulan en mayor proporción otras proteínas como glutelinas y prolaminas. La histidina, arginina y ácido glutámico incrementan progresivamente con la maduración de la semilla. La lisina aumenta ligeramente hasta los 21 DAF y luego se mantiene constante. (Singh U, 1981)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los garbanzos tienen naturalmente un contenido de proteínas de entre 18 y 25%. La proteína de garbanzo contiene metionina de 15 a 19 mg/g de proteína y la legumina constituye el 32% de la proteína de garbanzo, similar al contenido de legumina en las proteínas de soya y chícharo. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Tanto la vicilina como la legumina se clasifican como globulinas en el sistema de clasificación de Osborne, lo que significa que son solubles en soluciones de sal. La vicilina es una proteína compuesta por tres subunidades y tiene un coeficiente de sedimentación de 7S. La legumina es una proteína más grande que la vicilina y se compone de seis subunidades con un coeficiente de sedimentación 11S; los polipéptidos están unidos por puentes disulfuro. La proporción de éstas proteínas es importante en la funcionalidad de la texturización de la proteína vegetal, ya que la vicilina contiene una menor cantidad de residuos que contienen azufre. Aunque la legumina es una fracción menor del contenido proteico en la soya, este contiene alrededor de veinte grupos sulfuro, lo que permite la formación de enlaces disulfuro y una gran capacidad de texturización. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La soya generalmente contiene entre un 35 y 40% de proteína, la proteína se separa dispersando la harina en una solución alcalina para disolverla y luego precipitarla al llegar a su punto isoeléctrico. La fracción principal de la proteína de soya y en general de las leguminosas comunes en el uso de la texturización de proteínas vegetales son la β-conglicinina 7S, la cual compone aproximadamente el 40% de la proteína total, y la glicinina 11S componiendo aproximadamente el 30% del total de la proteína. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El gluten de trigo vital contiene entre 75 y 80% de proteína, mientras que el gluten de trigo aislado tiene un contenido de 90% de proteína. A diferencia de las globulinas en las legumbres, las proteínas del gluten de trigo son únicas en sus características que la vuelven única a otras proteínas vegetales, debido a la presencia de gliadina y glutenina, que representan el 85% de su proteína total. Las proteínas glutenina y gliadina al mezclarse con agua forman un complejo que crea una matriz viscoelástica característica de las masas de pan y también forma enlaces disufuro que dan lugar a la estructura fibrosa en las PVT. La fluidez de las mezclas de harina y masas se atribuyen a la gliadina, mientras que la resistencia y elasticidad se atribuyen a la glutenina, por lo tanto, las propiedades en el producto final se deben a la proporción de estos dos componentes. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El chícharo tiene un aproximado de 20 y 25% de proteína, aunque se reporta que en mejoramiento específicos puede alcanzar hasta un 30% de proteína. El chícharo tiene cuatro clases de proteínas de Osborne, componiéndose de globulina con 55-65%, albúmina con 18-25%, prolaminas de 4-5% y glutelina de 3-4%. Las fracciones de globulina en el chícharo se componen de 43% vicilina y 28% legumina. La proteína del guisante también contiene convicilina que está ausente en otras legumbres, esta proteína de almacenamiento contiene más azufre que la vicilina. Debido a la importancia de los enlaces disulfuro en la formación de fibras en la proteína vegetal texturizada y la presencia de metionina en la fracción de legumina de la proteína de chícharo es muy útil en las aplicaciones de texturización. La velocidad de calentamiento de la proteína no afecta la gelificación de la misma, en cambio la velocidad de enfriamiento sí lo hace, la legumina tiene una mayor resistencia en gel cuando se enfría a una velocidad lenta. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las habas enteras tienen un alto contenido de proteínas cercano al 30% en base seca, mientras que se ha informado que los ingredientes derivados como la harina rica en proteínas de haba y el aislado de proteína de haba tienen un contenido de proteínas del 64 y 90% respectivamente. La haba tiene una fracción 11S del 45%, que es un 10% más que la proteína de soya y un 17% más que la proteína de chícharo. El contenido de proteína 11S en la haba puede ser más importante que el contenido de proteína 7S, siendo que el 11S legumina contiene más azufre, lo cual es importante al reemplazar proteínas tradicionales en la texturización de proteínas vegetales. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las proteínas de diferentes fuentes botánicas son intrínsecamente diferentes, por lo que comprender las características de estas fuentes de proteína actuales y futuras es fundamental para el desarrollo de análogos de carne. Se utilizan varias pruebas para determinar las propiedades funcionales de la proteína cruda antes de su uso en el proceso de extrusión, dichas pruebas son la absorción de agua, absorción de aceite, sus propiedades térmicas usando calorimetría, análisis de transición de fase, concentración mínima de gelificación y el análisis rápido de viscosidad. Aún no se han establecido estándares para dichas pruebas, por lo que es importante tener en cuenta que la comparación entre fuentes de proteína es compleja y no siempre directa. Además, los métodos de aislamiento de las proteínas, el historial de procesamiento, el entorno de cultivo, los genotipos y otros factores pueden afectar las propiedades incluso dentro de una misma fuente de proteína. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En la composición química proximal del PVT de diferentes fuentes se obtuvieron los siguientes datos, provenientes de 28 muestras. La proteína de chícharo texturizada es el que tiene un contenido más alto de proteína, un promedio de 72.7 ± 4.7%. El gluten de trigo texturizado presentó un contenido de proteína promedio de 68.3 ± 3.6%. Las proteínas de soya texturizada presentan un contenido proteico en promedio de 51.4 ± 1.4%. El porcentaje más bajo de proteínas lo obtuvo el análisis de proteína de garbanzo texturizada, con un promedio de 50.4%. (Hong S, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-5-2-carbohidratos",
    "level": 2,
    "number": "5.2",
    "title": "Carbohidratos.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En el garbanzo se estudiaron los incrementos de carbohidratos, el estudio abarcó desde los 14 hasta los 42 días después de la floración. Se encontró que el porcentaje de azúcares solubles disminuye continuamente hasta los 28 DAF, después de esos días se estabiliza. (Singh, 1981)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El almidón aumenta su porcentaje rápidamente entre los 14 y 21 DAF, alcanzando un máximo en el día 28, la mayor parte del almidón acumulado se considera que alcanza el máximo en su periodo de máxima actividad bioquímica. (Singh, 1981)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En el guisante las cantidades de proteína y fibra pueden variar según el genotipo y los factores ambientales, sin embargo, la fracción total de carbohidratos es la mayor parte de la composición del guisante, cubriendo entre el 50 y 70%. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Hong S. en 2022 realizó el cálculo de carbohidratos totales de proteínas vegetales texturizadas, en su estudio no analizó directamente las fracciones individuales de carbohidratos mediante pruebas directas, en lugar de ello, cuantificó el porcentaje por diferencia. La soya texturizada presenta el contenido más alto de carbohidratos con un total de 32.6%, el gluten de trigo registró un promedio de 18.2%, finalmente el porcentaje más bajo lo obtuvo la proteína de chícharo con un promedio de 9.7%, analizó una muestra de proteína texturizada de garbanzo con un porcentaje de 34.9% y una mezcla de chícharo con garbanzo obteniendo un 14.8%."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-5-3-grasas",
    "level": 2,
    "number": "5.3",
    "title": "Grasas.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Hong S. en 2022 determinó el contenido de grasa de muestras de proteína texturizada mediante extracción continua por solvente utilizando éter etílico en agitados orbital a 250 rpm con una duración de 30 minutos, seguido de centrifugación y evaporación del solvente para pesar el residuo lipídico."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Analizó cerca de 28 muestras, posteriormente realizó un promedio de los datos obtenidos, lo que obtuvo fue lo siguiente."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para la soya el promedio del total de grasa es de 2.7 ± 1.5%. En la proteína de chícharo texturizada obtuvo un promedio de 6 ± 1.6%. Finalmente, el promedio para el gluten de trigo en relación a su contenido de grasa fue de 2.8 ± 0.3%."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-5-4-fibra",
    "level": 2,
    "number": "5.4",
    "title": "Fibra.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Es importante definir que, en muchos trabajos de investigación, medir la fibra requiere de métodos enzimáticos específicos que descompongan los carbohidratos totales en las fracciones solubles e insolubles. Al tratarse de muchas muestras para analizar, tener un enfoque sobre el comportamiento de rehidratación o de cambios en el proceso extrusión, restar la suma de los demás componentes principales del 100%, la fibra queda agrupada dentro del valor de los carbohidratos totales, ya que el residuo orgánico no proteico ni lipídico incluye tanto a los carbohidratos solubles o digeribles, como a los no digeribles, estando en esta sección la fibra dietética. "
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-5-5-minerales",
    "level": 2,
    "number": "5.5",
    "title": "Minerales.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Dinali M. et al. en 2026 evaluó harinas de legumbres comparándolas con harinas de soya y el aislado de la misma fuente, para la producción de PVT mediante extrusión de baja humedad. En un apartado cuantificaron mediante espectrofotometría de masas con plasma acoplado inductivamente las muestras previamente digeridas en ácido nítrico al 2%. Se encontraron macro elementos y micro elementos, entre los macro elementos se hallaron en todas las muestras Na, Mg, Ca y K; para los micro elementos se encontraron Al, Mn, Fe, Co, Ni, Cu, Zn, Mo, Ba y Pb. "
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Es importante recalcar que en algunos estudios estos elementos no se buscan en particular, y en ocasiones las resumen como el porcentaje total de cenizas. Por lo que dar una cantidad en g o mg independientemente de la PVT de estudio puede variar entre ellos."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-6-aplicaciones-tecnologicas",
    "level": 1,
    "number": "6",
    "title": "Aplicaciones tecnológicas.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las principales fuentes de PVT son las proteínas de soya, trigo y chícharo, utilizadas principalmente en los análogos de carne. Las PVT están disponibles como extruidos con bajo contenido de humedad y otra variedad con alto contenido de humedad, ambas son diferentes en su estructura, forma, almacenamiento y humedad. Si bien las PVT de baja humedad son las más utilizadas, el interés de las PVT de alta humedad está aumentando debido a su textura similar a la carne. Los avances en las tecnologías de texturización y el surgimiento de nuevas fuentes de proteínas están impulsando el desarrollo de proteínas vegetales transgénicas con funcionalidades mejoradas para satisfacer las expectativas del consumidor en términos de sabor, textura, nutrición y precio, ampliando así su uso más allá de la imitación de productos animales, hasta la optimización de nuevas opciones de valor propio. Se prevé que la próxima generación de alternativas cárnicas de origen vegetal trascienda la mera imitación y se centre en la diferenciación. (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-7-sustitutos-de-carne",
    "level": 1,
    "number": "7",
    "title": "Sustitutos de carne.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las hamburguesas originales y las albóndigas están elaboradas con carne picada, sin embargo, mientras que las hamburguesas están hechas de carne de res y no contienen ningún ingrediente más que sal y especias, las albóndigas están hechas de carne de cerdo o de res, o una mezcla de ambas y pueden contener especias, aglutinantes, agentes de aportan volumen como pan blanco y cebolla si se desea. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Al igual que los productos originales, las hamburguesas y albóndigas de origen vegetal pertenecen a la categoría de carne molida y se centran en la imitación de la mordida, la masticabilidad, jugosidad y firmeza, así como sabor y color. Las recetas y los procedimientos se basan en recetas originales de hamburguesas de carne. Los ingredientes en la elaboración de hamburguesas y albóndigas incluyen agua, grasa vegetal que puede ser líquida o sólida, libre o emulsionada, que afecta la sensación en boca y la jugosidad de los productos; proteínas de origen vegetal normalmente PVT de baja humedad de orígenes de soya, trigo o chícharo, rehidratada la cual carece de función aglutinante pero se asemeja a una textura masticable; también incluye grandes cantidades de condimentos, sal y aglutinantes como almidón, fibras, metilcelulosa o pan rallado, para endurecer los productos, permitir la retención de agua y grasa, mejorando la textura y apariencia; los colorantes y saborizantes mejoran la percepción en vista y boca. El análisis sensorial mostró que las hamburguesas hechas con PVT de soya de baja humedad y con 3% de metilcelulosa tenían las mejores características sensoriales. La nueva generación de hamburguesas elaboradas por Beyond Meat o Impossible Foods, son más similares a las hamburguesas de carne original desde la perspectiva nutricional. Impossible Foods también utiliza leghemoglobina de soya para sus hamburguesas de origen vegetal, que no solo les confiere un color rojo, sino que también contiene un hemo rico en hierro, que contribuye al distintivo sabor a carne cuando se cocina. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los consumidores de carne a menudo comparan el sabor y la textura de los productos análogos con los de los productos cárnicos originales y esperan que los análogos sean peores. Aunque algunos productos análogos procesados imitan muy bien la textura y el sabor de la carne, de modo que no se logran distinguir en una comparación directa. Se ha demostrado que los consumidores asocian las alternativas a la carne con términos más negativos que los productos cárnicos y que esperan que las alternativas tengan un sabor, textura y preparación similares a la carne, pero la comparación directa de productos cárnicos procesados y sus análogos dio como resultado una percepción similar. Se puede esperar que haya un mayor éxito de aquellos productos que imitan productos cárnicos altamente procesados con un sabor y textura similares, mientras que, para cortes de carne como el bistec o el escalope, no se espera que tengan una gran demanda. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las salchichas de carne son uno de los productos cárnicos procesados más antiguos e incluyen una variedad de productos. Cada variedad está estrechamente relacionada con la disponibilidad de materias primas, las condiciones climáticas, las condiciones culturales y religiosas, así como la ubicación geográfica. Estos productos se elaboran principalmente mediante la extrusión de una mezcla de carne molida, ya sea de cerdo, res o aves, añadiendo sal, especias y otros condimentos. Elaborar salchichas 100% libres de carne es un desafío, especialmente para productos con alto contenido de proteínas y bajo contenido de almidones. Se ha informado que la sustitución total de carne de cerdo magra por PVT de chícharo fue descartada debido a sus deficientes propiedades texturales. Esto puede deberse a las bajas cantidades de agentes aglutinantes, como almidón de papa e hidrocoloides como la xantana en un 0.7%. Sin embargo, se formuló con éxito salchichas libres de carne con agua y hielo (56%), aislados de proteína de soya (10%), PVT de soya a baja humedad (10%), almidón de maíz (7%) e hidrocoloides (0.6% de Ƙ-carragenano o manano de konjac). (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-7-1-productos-hibridos",
    "level": 2,
    "number": "7.1",
    "title": "Productos híbridos.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Una opción atractiva para los consumidores de carne que desean facilitar su transición de fuentes de proteínas de origen vegetal animal a fuentes vegetales más sostenibles son los productos híbridos. Por ejemplo, existen numerosas recetas tradicionales de albóndigas con aditivos vegetales, como pan rallado, champiñones, frutos secos y cereales integrales, que ya pueden considerarse productos híbridos. Sin embargo, su implementación no es tan sencillo, ya que las proteínas vegetales y las proteínas cárnicas interactúan, lo que a su vez altera sus propiedades tecnofuncionales y puede provocar cambios estructurales y texturales importantes en productos cárnicos conocidos, además de causar cambios en procesos de fabricación bien conocidos. El uso de PVT en lugar de polvos de proteína vegetal, mejora considerablemente los resultados sensoriales y la aceptación de dichos productos híbridos, pero también de los productos de base vegetal. En los años setenta, se estudió el efecto de la harina de soya, los concentrados de soya y la PVT de soya de baja humedad rehidratada como extensores de carne en hamburguesa de carne de res, mostrando que los polvos reducían la contracción y la PVT rehidratada aumentaba la dureza. Además, sustituir el 15 o el 30% de carne de res con la PVT de soya rehidratada disminuyó la pérdida de cocción y la rancidez oxidativa, pero también causó cambios sensoriales y disminuyó la aceptación general. Se evaluaron albóndigas de carne de cerdo híbridas que incluían un 30% de PVT con baja humedad y alta humedad de guisante, calabaza o girasol en comparación con un control. Se encontró una ligera reducción en la calidad de la proteína en comparación con los productos de carne pura, pero también un aumento en la cantidad de ácidos grasos mono y poliinsaturados, así como un aumento en el contenido de fibra dietética de los híbridos, mejorando su valor nutricional. Se encontraron que las albóndigas de carne fortificadas con 15% de PVT de baja humedad rehidratada y extracto de levadura tenían una puntuación de sabor más alta y una aceptabilidad general mayor que las albóndigas control. Se ha probado la incorporación de 2-5% de una mezcla de pulpa y semillas de calabaza en hamburguesas de carne, mostrando que causan una disminución en la retención de agua, pero también muestran que no se hayan cambios sensoriales, lo que las convierte en una oportunidad para consumir un producto más saludable y disminuir el consumo de carne. La sustitución del 15% de la carne bovina por PVT de soya a baja humedad rehidratado de color rojo en las hamburguesas de carne dio como resultado atributos sensoriales similares a los del control, mientas que la sustitución del 30% de la carne bovina por la PVT de soya a baja humedad rehidratado de color rojo redujo significativamente la contracción, pero dio como resultado hamburguesas más tiernas con menos sabor a carne. Además, se informó de una reducción significativa de la dureza, la cohesión y el grosor, pero también de un aumento en el contenido de fibra dietética para las hamburguesas de carne en las que se sustituyó entre el 10 y el 40% de la carne por la PVT de soya a baja humedad rehidratada, mientras que el contenido total de humedad y grasa fue menor y se redujo la liberación de agua y la pérdida de cocción. Los resultados mencionados anteriormente muestran que la evaluación sensorial depende en gran medida del grado de rehidratación de la PVT, el porcentaje utilizado para la sustitución y la receta en general, así como su procesamiento y cocción. Varios estudios muestran que los productos híbridos son preferidos por una población más amplia que las alternativas de carne puramente de origen vegetal. Esto puede explicarse por el hecho de que el 70% de la población se identifica como omnívora, caracterizada por un alto consumo de carne. Además, las hamburguesas y albóndigas híbridas no requieren aglutinantes, mientras que en las alternativas vegetales se deben agregar aglutinantes como metilcelulosa o enzimas para la reticulación y así lograr la textura del producto final. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las salchichas tipo Frankfurter tienen un gran mercado y son salchichas emulsionadas no fermentadas con un contenido de grasa del 20-30%. La sustitución de la carne de cerdo por PVT de chícharo a baja humedad en 25%, 50%, 75% y 100% en formulaciones de Frankfurter no afectó el contenido de agua del producto final hasta el nivel del 25%. Por encima del 25%, el contenido de agua aumentó debido a la alta capacidad de retención de agua de PVT independientemente de si era de chícharo o de soya. En el caso de las salchichas híbridas de carne curada en seco hechas reemplazando la carne de cerdo con proteínas de semillas de calabaza texturizadas, no se observaron diferencias significativas en la composición nutricional hasta un nivel de sustitución del 25%. Esto sugiere que el nivel de sustitución del 25% podría considerarse un umbral para no alterar el contenido de agua. Sin embargo, la adición de PVT alteró en gran medida el comportamiento de acidificación de los sistemas modelo de carne picada híbrida y requirió la adición de una mayor cantidad de glucona-delta-lactona para producir, por ejemplo, un salami híbrido en comparación con un salami de carne convencional. El contenido de proteínas no cambió hasta el 75% de sustitución ya que las PVT se hacen a partir de aislados de proteína, mientras que se espera que el perfil de aminoácidos varíe dependiendo del nivel de sustitución y la fuente y pureza de la proteína vegetal. Para los perfiles de aminoácidos, reemplazar el 20% de carne de cerdo en salchichas tipo emulsión por PVT de chícharo de baja y alta humedad, mantuvo cantidades suficientes de todos los aminoácidos esenciales. El contenido de grasa se redujo significativamente del control a las salchichas hechas sustituyendo el 40% de carne molida de res con PVT de soya a baja humedad, debido al contenido bajo de grasa de la PVT en comparación con la carne molida de res. Sin embargo, en otro estudio, el contenido de grasa de las salchichas hechas con PVT de soya a baja humedad no mostró una diferencia significativa hasta el nivel de sustitución del 75% porque la fuente de carne sustituida fue cerdo magro conocido por su bajo contenido de grasa. La sustitución de la carne de cerdo con PVT de chícharo con baja humedad mejoró el perfil de ácidos grasos al aumentar los ácidos grasos poliinsaturados, mientras que los ácidos grasos saturados y los ácidos grasos monoinsaturados se mantuvieron estables. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La pérdida de cocción en el hervido disminuyó ligeramente cuando la carne se sustituyó parcialmente con 20% de PVT de soya a baja humedad y 25% de PVT de chícharo a baja humedad. Esto puede atribuirse a la mejora del carácter hidrofílico del producto debido a la alta capacidad de retención de agua de las proteínas de soya y chícharo. Sin embargo, a medida que aumenta el porcentaje de sustitución, la pérdida de cocción también aumenta, y esto podría deberse a diferencias en el tipo de interacciones entre las cadenas polipeptídicas durante el calentamiento, lo que lleva a una mayor liberación de agua y grasa. La adición progresiva de PVT de baja humedad resultó en salchichas de color amarillo brillante. De manera similar, se observó que la adición de PVT de chícharo a baja humedad resultó en una disminución de la luminosidad, pierde su tonalidad rojiza y hay un aumento fuerte del tono amarillo. Esto puede explicarse por la reducción de la carne de res en el que hay conversión de mioglobina en desoximioglobina y el color amarillo intenso de las legumbres y de las semillas oleaginosas. La adición de proteínas de calabaza texturizadas aumentó la luminosidad y el amarillo, pero disminuyó el rojo debido al color verde claro de los extruidos de semillas de calabaza. La adición de hidrocoloides mejoró la textura de las salchichas sustituidas hasta el 50% de PVT de chícharo a baja humedad resultando en salchichas cocidas con textura fuerte. Sin embargo, más allá del 60% de incorporación de PVT, la dureza, la elasticidad, la cohesión, la gomosidad y la masticabilidad disminuyeron drásticamente. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se han formulado nuggets sin carne con una combinación de tallos de setas ostras grises y harina de garbanzo, mostrando la misma dureza, cohesión y pH que los nuggets comerciales de control, mientras que la ligereza, masticabilidad, elasticidad, actividad de agua y contenido de humedad fueron significativamente mayores y los macronutrientes menores. Además, los nuggets de ostra fueron significativamente menores en pérdida de cocción y mayores en rendimiento de cocción y retención de humedad. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Por otro lado, se han elaborado nuggets de origen vegetal basado en PVT colgada (en hebras o desmenuzado) y PVT molida, PVT solamente colgada, PVT molida y tempeh, obteniendo propiedades texturales comparables a nuggets de pollo convencionales. (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-7-2-innovacion-alimentaria",
    "level": 2,
    "number": "7.2",
    "title": "Innovación alimentaria.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El objetivo de diseñar alternativas a la carne con proteínas de origen vegetal, necesariamente significa recrear el sabor, la textura, la masticabilidad, la jugosidad, la firmeza y la apariencia de la carne y los productos cárnicos animales. Aunque diseñar un filete sigue siendo un desafío, las empresas alimentarias han dado un gran paso en la creación de alternativas a los productos cárnicos procesados como hamburguesas, salchichas, nuggets y tocino. La formulación de alternativas a la carne consiste principalmente en utilizar aislados, concentrados y PVT para contribuir una estructura, el color, la textura y el sabor; los lípidos ya sean grasas o aceites para intensificar el sabor, así como para mejorar la textura y la sensación en boca; y polisacáridos como almidones, metilcelulosa o fibras para unir los diferentes ingredientes y dar forma a los productos debido a sus propiedades espesante y emulsionantes. También se están incluyendo agentes aromáticos y colorantes que realzan el sabor, así como la inclusión de vitaminas y minerales que mejoran el valor nutricional de estas alternativas. Además, se están realizando investigaciones sobre sustitutos de origen vegetal para las grasas animales sólidas, que son necesarias principalmente para la apariencia y la textura en salchichas curadas crudas y tiras de grasa en el jamón. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "También se ha utilizado la crioestructuración de proteínas, lo cual implica la congelación de una emulsión de proteínas para generar una estructura fibrosa única, para formular análogos de carne de origen vegetal hechos de diferentes proporciones de proteínas de chícharo y trigo. (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-8-alternativas-de-obtencion-de-proteinas",
    "level": 1,
    "number": "8",
    "title": "Alternativas de obtención de proteínas.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se ha demostrado que se puede producir PVT esponjosas de baja humedad y fibrosas de alta humedad, además de los productos más comunes derivados de soja y chícharo, a base de varios cereales, diferentes fuentes de proteína vegetal, incluyendo harina de semillas de calabaza y girasol desgrasadas, proteínas de cacahuate, varias legumbres y gluten de trigo. (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-8-1-proteinas-vegetales",
    "level": 2,
    "number": "8.1",
    "title": "Proteínas vegetales.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El procesamiento de alternativas a la carne debe permitir imitar la textura de diferentes productos cárnicos. Debido a las propiedades tecnofuncionales altamente variables de las proteínas vegetales, la imitación difícilmente se puede lograr con proteínas vegetales en polvo. Por ende, la industria recurre cada vez más a los productos de proteína vegetal texturizada. Las PVT se distinguen entre dos tipos; proteínas vegetales texturizadas secas o de baja humedad y proteínas vegetales texturizadas húmedas o de alta humedad. Las PVT de baja humedad se producen mediante cocción por extrusión de baja humedad, mientras que la producción de PVT de alta humedad ha demostrado ser exitoso empleando tres métodos, estos son: cocción por extrusión de alta humedad, tecnología de celda de corte y el electrohilado. (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-8-2-proteinas-de-hongos",
    "level": 2,
    "number": "8.2",
    "title": "Proteínas de hongos.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se ha informado que el uso de hongos filamentosos es una alternativa adecuada para hacer salchichas sin ingredientes animales. El análogo de carne extruido a base de hongos con alto contenido de humedad, preparado a partir de Coprinus comatus, resultó con parámetros texturales comparables a la carne de res real. En consistencia, el micelio basidiomiceto mostró ventajas particularmente fuertes, en términos de fuerza y dureza al imitar la carne. El resultado mejoró el perfil de sabor en comparación con los productos de base vegetal y, por lo tanto, fue más apreciado por los paneles sensoriales. El extrudido de hongo se picó y se incorporó en la formulación de salchichas y mostró buena aceptación debido a su sabor, apariencia y textura comparables al producto cárnico. (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-8-3-fermentacion-de-precision",
    "level": 2,
    "number": "8.3",
    "title": "Fermentación de precisión.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La fermentación de precisión se ha consolidado como la herramienta más adecuada en respuesta a los cambios y modificaciones en la cadena de suministro de alimentos, así como su producción y los cambios en los consumidores. Esta técnica se centra en la producción de ingredientes alimentarios a partir de sustratos abundantes y de bajo costo mediante modificaciones genéticas específicas que reprograman las vías metabólicas de los microorganismos. Al utilizar microorganismos fermentadores tradicionales como huéspedes, la fermentación de precisión puede mejorar las propiedades de los alimentos fermentados. Este enfoque aprovecha herramientas avanzadas de ingeniería genética, desarrolladas originalmente para aplicaciones de biotecnología industrial como la producción de biocombustibles y productos bioquímicos, y las adapta para su uso en la producción de alimentos, principalmente proteínas como fuentes alternativas. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se proyecta que la producción de proteínas animales específicas para alimentos mediante fermentación de precisión será significativamente más eficiente que la ganadería tradicional, siendo hasta 100 veces más eficiente en el uso de la tierra, 10 a 25 veces más eficiente en el uso de materia prima, 20 veces más rápida y 10 veces más eficiente en el uso de agua. Se espera que esta tecnología revolucione la ganadería haciendo que la producción de alimentos sea más sostenible y fomentando la producción localizada de productos alimenticios modificados genéticamente. Los objetivos actuales de la fermentación de precisión incluyen: proteínas de la leche, proteínas del huevo y componentes específicos de análogos de carne. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se prevé un crecimiento en los productos que combinan múltiples fuentes de proteínas alternativas. Un ejemplo de ello es la Impossible Burger, que utiliza concentrado de proteína de soya, junto con hemoglobina de soya recombinante (LegH) que se produce mediante fermentación de precisión. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La fermentación ocurre en ausencia de oxígenos e implica la degradación de materia orgánica, microorganismos que convierten moléculas complejas en otras simples como alcohol o ácidos, y la liberación de energía. Este proceso es bien conocido desde hace años, ya que se usa para la producción de productos alcohólicos como vino y cerveza, así como los no alcohólicos como queso y el yogur. Este proceso inicialmente tuvo la finalidad de conservar alimentos mediante la producción de alcohol o ácido, originado por los cultivos iniciadores presentes en el sustrato alimenticio y los microorganismos necesarios para su propagación, con esto se logra inhibir el crecimiento de microbios indeseables. Sin embargo, ha surgido otro tipo de fermentación, denominada fermentación de precisión, en este proceso, los microorganismos se diseñan específicamente para producir ingredientes de alto valor como enzimas, lípidos, saborizantes y conservantes. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La fermentación de precisión ha permitido modificar cepas microbianas tradicionales para producir compuestos beneficiosos, por ejemplo, las cepas de lactobacillus utilizadas en la fermentación láctea se han modificado genéticamente para mejorar la síntesis de vitaminas del grupo B, mientras que las cepas de saccharomyces cerevisuae utilizados en la elaboración de cerveza se han optimizado para producir nuevos compuestos aromáticos, creando sabores de cerveza mejorados. La ingeniería de cepas, la fermentación, el procesamiento posterior y los ingredientes alimentarios se relacionan como parte integral del proceso de fermentación de precisión. La proteína es una de las biomoléculas complejas más importantes para la fermentación, debido a su relevancia en la nutrición de calidad, además de ser una alternativa a los ingredientes proteicos de origen animal, provenientes de microorganismos en lugar de animales que sufren daño durante el proceso de obtención de proteínas. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los microorganismos representan una alternativa prometedora a los productos cárnicos tradicionales debido a sus niveles comparables de proteínas y nutrientes y su capacidad de ser modificados y texturizados para imitar la carne. Un ejemplo notable es Quorn, una marca bien establecida que produce proteína unicelular (SCP) a partir de hongos filamentosos, sus productos van desde nuggets de pollo hasta carne picada de res, y logran su textura similar a la carne al mezclar hifas fúngicas con agentes aglutinantes y aplicar texturización por congelación. La fermentación de biomasa se ha utilizado ampliamente, especialmente en microorganismos comestibles como bacterias, levaduras, algas u hongos filamentosos, como maquinaria para la obtención de proteínas. SCP es el cultivo de biomasa microbiana para la recuperación de proteínas. Generalmente, las microalgas, como ejemplos las arthrospira platensis, chlorella vulgaris y dunaniella salina, se cultivan y se cosechan debido a su alto contenido proteico y perfil de aminoácidos favorable. Además, funcionan como una fuente de proteínas sin carne, lo que las hace atractivas bajo el concepto de SCP. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La ingeniería microbiana ofrece un enfoque prometedor para replicar productos de origen animal como los lácteos y los huevos mediante la fermentación de precisión, que implica la incorporación de las vías metabólicas de componentes específicos en microorganismos. La leche, compuesta de oligosacáridos, grasas, azúcares y proteínas, en particular caseína y suero, se está recreando mediante biología sintética, modificando genéticamente con éxito microorganismos como bacterias y levaduras. Otros componentes de la leche se han desarrollado empleando la fermentación de precisión. Los oligosacáridos de la leche humana, beneficioso para la nutrición infantil, se han producido en saccharimyces cerevisiae y bacillus subtilis, mientras que las grasas de la leche humana se están sintetizando en la levadura oleaginosa yarrowia lipolytica. Un éxito notable en la fermentación de precisión es el reemplazo del cuajo de origen animal, una mezcla de enzimas estomacales que contiene quimosina utilizada en la producción de queso. Actualmente, la quimosina comercial se produce principalmente utilizando aspergillus niger, lo que hace que el queso sea más asequible y apto para vegetarianos, lo que se traduce en un beneficio para los consumidores como a los fabricantes de queso. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Si bien muchos nutracéuticos todavía se producen mediante síntesis química o extracción de plantas, la biofabricación microbiana se está expandiendo rápidamente. Esto incluye la producción de vitaminas hidrosolubles, por ejemplos los complejos B y C, vitaminas liposolubles A, D, E y K; y otros compuestos que promueven la salud, como ácidos grasos omega-3, polifenoles como el resveratrol, carotenoides como el betacaroteno y aminoácidos como el GABA y la beta-alanina. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La ingeniería microbiana también ha impulsado la creación de ingredientes alimentarios destinados a mejorar las cualidades sensoriales. Sabores como el umami, derivado del GMS, el monofosfato de inosina y el monofosfato de guanosina. De manera similar, se modifican edulcorantes como los compuestos derivados de la stevia, el xilitol y el eritritol. Se han modificado cepas de levadura para producir sabores a lúpulo que mejora el sabor de la cerveza, mientras que los procesos microbianos generan compuestos aromáticos que replican aromas como rosa (2PE), cítricos (limoneno), menta (mentol) y melocotón (gamma-decalactona). Además, se utilizan microorganismos para producir pigmentos aptos para uso alimentario con diversas aplicaciones. Algunos ejemplos son el betacaroteno y la cantaxantina para obtener tonos naranjas, el licopeno y la astaxantina para el rojo, la riboflavina para el amarillo, la ficocianina para el azul, la violaceína para el púrpura y la melanina para el negro. Estos avances ponen en evidencia el potencial transformador de la fermentación de precisión para la creación de productos alimenticios sostenibles y diversos. (Pereira A, 2025)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-8-4-carne-cultivada",
    "level": 2,
    "number": "8.4",
    "title": "Carne cultivada.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Un concepto claro de producción de carne a partir de microorganismos es la carne cultivada (CM), que llegó como una opción de proteína que se produce fuera de los animales, siendo su producción posible mediante la combinación de ingeniería de tejidos y biomateriales. La producción de carne cultivada aumenta la disponibilidad de carne sin dañar a los animales ni al medio ambiente. La carne cultivada presenta algunos desafíos para su producción, como el medio de cultivo, la producción de andamios adecuados para el cultivo celular, la mejora de las características sensoriales y la nutrición. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Esta carne artificial se crea cultivando células de origen animal, como células madre o satélite, en un biorreactor con un medio de cultivo rico en nutriente. Estas células se inducen a proliferar y diferenciarse en tejido muscular y adiposo, formando estructuras que se asemejan mucho a la carne convencional. Se utilizan materiales de soporte, como colágeno o alginato, para favorecer el desarrollo tridimensional del tejido, imitando la matriz extracelular. El proceso se ve potenciado por suplementos, incluidos factores de crecimiento como el factor de crecimiento de fibroblastos, que impulsa la proliferación celular, y el factor de crecimiento transformante beta, que facilita la diferenciación. Además, el medio contiene vitaminas esenciales, minerales como hierro y vitaminas de complejo B, aminoácidos e hidrolizados derivados de plantas para mantener el crecimiento y la viabilidad celular. Estos componentes son fundamentales para lograr la textura, el sabor y el perfil nutricional deseados en los productos cárnicos cultivados. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los sistemas de carne cultivada producen células animales, por ejemplo, células musculares y adiposas de ganado, aves, peces y otros animales, in vitro para la alimentación, así se elimina la necesidad del sacrificio animal. Esta tecnología se ha promovido como alternativa más sostenible desde el punto de vista ambiental y más éticas en comparación con la producción de carne convencional. Sin embargo, entre estudios recientes que incluyen desde los productos elaborados desde cero in vitro hasta los híbridos, las comparaciones del impacto ambiental con la carne convencional han arrojado datos diferentes entre sí. Por ejemplo, se demostró un menor potencial de calentamiento global y un menor uso de agua, pero un mayor consumo de energía en comparación con la carne de origen vacuno. El contraste, es que un estudio sugirió que la carne cultivada podría tener un potencial de calentamiento global mucho mayor que la carne de res. Esto ha generado confusión en la opinión pública sobre el desempeño ambiental de la carne cultivada y también un debate entre investigadores. (Blackstone N, 2025)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-9-investigacion-cientifica",
    "level": 1,
    "number": "9",
    "title": "Investigación científica.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las proteínas animales se desnaturalizan y retienen agua de manera predecible al cocinarse, las diferencias estructurales y termomecánicas con la proteína texturizada, es que la carne logra texturas jugosas y tiernas, en cambio, las proteínas vegetales tienden a perder agua fácilmente, resultando en productos duros, secos o de textura granulosa. La falta de ciertos aminoácidos esenciales y micronutrientes en fuentes vegetales dificulta replicar con exactitud la complejidad nutricional de la carne convencional. (Anusuya E, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Mientras que los enfoque de texturización de la proteína utilizando métodos top-down son más escalables, los métodos bottom-up, como la impresión 3D o el electrohilado, enfrentan barreras de factibilidad industrial y costos elevados. El uso intensivo de gomas y aglutinantes refinados como la metilcelulosa o carrageninas, genera preocupaciones sobre el alto nivel de procesamiento y el concepto de clean label o etiqueta limpia, afectando de esta forma la aceptación del consumidor. (Anusuya E, 2026)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para acelerar el desarrollo y superar límites de técnicas tradicionales, se destaca el uso de herramientas computacionales avanzadas. Han utilizado modelos virtuales como los gemelos digitales o Digital Twinning, que simulan en tiempo real cómo interactúan los ingredientes vegetales bajo condiciones específicas de temperatura, presión y cizallamiento durante la producción. Este modelado computacional permite predecir y optimizar parámetros cinéticos, reológicos y termodinámicos antes de pasar a la escala piloto o industrial. La integración de algoritmos de optimización para diseñar mezclas híbridas ayuda a maximizar la viscoelasticidad, mejorando el enlazado por puentes disulfuro y emulando la retención de agua de la carne animal, por ejemplo, la mezcla híbrida de proteína de soya combinada con gluten de trigo. (Anusuya E, 2026)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-9-1-calidad-nutricional",
    "level": 2,
    "number": "9.1",
    "title": "Calidad nutricional.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los ingredientes de soya genéticamente modificados (GM) y sus derivados presentan un desafío relacionado a su seguridad, ya que se consideran peligrosos para la salud humana debido a la falta de una evaluación rigurosa de la seguridad de los organismos genéticamente modificados (OGM). En consecuencia, se implementaron regulaciones estrictas para los cultivos GM debido a los riesgos asociados con la salud humana y el medio ambiente, lo que restringió sus aplicaciones alimentarias en Europa; en el año 2020 la Comisión Europea autorizó una soya GM para alimentos en piensos, pero no su cultivo. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Aunque la proteína de soya tiene componentes antinutricionales como fitatos, fenoles e inhibidores de tripsina y quimotripsina, el calentamiento en los procesos térmicos desactiva estos factores. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los chícharos no se encuentran entre los alimentos alergénicos prioritarios, sin embargo, se ha sugerido que Pis s1 y Pis s2 son alérgenos potenciales derivados de vicilina y convicilina. Se encontró que la extrusión de baja humedad y alta humedad redujo significativamente los contenidos de factores antinutricionales y epítopos que desencadenan alergias al chícharo (Pis s2). (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Para fines nutricionales, es importante saber el efecto de la extrusión sobre la composición total de aminoácidos, más aún cuando el producto es de interés porque se considera saludable. Se ha encontrado que las proteínas de guisantes y otras leguminosas tienen un perfil de aminoácidos equilibrado con una alta cantidad de lisina, un aminoácido en el que los granos de cereales son bajos. El gluten de trigo, sin embargo, tiene más metionina y cisteína, en las que las proteínas de leguminosas son bajas. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Existe discrepancia sobre el efecto del procesamiento en relación al contenido total de aminoácidos en la PVT de chícharo. Por un lado, se encontró que el contenido total de aminoácidos fue constante después del proceso de extrusión, mientras otros investigadores mencionan que el contenido total de aminoácidos disminuye en el proceso de extrusión del aislado proteico de chícharo. Esta diferencia en la pérdida de aminoácidos podría explicarse por el porcentaje de humedad en cada proceso. Una alta humedad puede ser un factor importante al considerar la composición de aminoácidos en la PVT de chícharo. Así mismo, se encontró que hay una disminución de lisina con la disminución del contenido de humedad en el proceso. La pérdida de lisina en el proceso de extrusión se atribuye en parte a la reacción de Maillar, ya que la lisina es muy reactiva en ese conjunto de reacciones. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En la texturización de la soya y el trigo, algunos aminoácidos aumentan mientras otros disminuyen, entre los que aumentaron se encontraron que fueron la metionina y la cisteína. Las interacciones del azufre y la reticulación que ocurren durante el procesamiento afectan el contenido de aminoácidos, pero todos los aminoácidos esenciales se encontraron en menor cantidad que en las carnes. (Webb D, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En general, las leguminosas como el haba, garbanzo, lentejas, entre otras se han convertido en opciones nutricionales viables como fuentes adicionales de proteína para PVT, éstas proteínas son fáciles de digerir. Las proteínas de las leguminosas combinadas con gluten de trigo mejoran el perfil de aminoácidos y compensa la deficiencia de lisina, cisteína o metionina. (Webb, 2023)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Desde una perspectiva nutricional, si bien las redes sociales promueven la imagen saludable de las alternativas, esto induce a muchos consumidores a creer erróneamente que la sustitución de la carne en proporción 1:1 por análogos es más saludable, sin considerar los elementos esenciales que se encuentran en la carne. Por ejemplo, los micronutrientes como las vitaminas del grupo B deben incorporarse a una dieta vegana para evitar la desnutrición. Además, varios estudios han reportado un bajo contenido y calidad de proteínas en las alternativas cárnicas comerciales en comparación con los productos convencionales, lo que requiere mayor atención y respuesta, como la combinación de diferentes fuentes de proteínas para ofrecer un perfil completo de aminoácidos. (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-9-2-aceptacion-del-consumidor",
    "level": 2,
    "number": "9.2",
    "title": "Aceptación del consumidor.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Varios estudios informaron sobre la viabilidad de reemplazar la carne con PVT manteniendo una buena aceptación sensorial. Las salchichas hechas con un nivel de hasta 25% de PVT de chícharo a baja o alta humedad, no mostraron diferencias significativas en sabor, color, aspecto y aroma en comparación con el producto cárnico. De manera similar, las salchichas hechas con hasta 30% de PVT de soya a baja humedad mostraron una textura y sabor similares a los de las salchichas de res. Sin embargo, por encima del 75%, las calificaciones sensoriales disminuyeron debido a la textura blanda, el color amarillo y el sabor vegetal. En salchichas sin carne, el manano de konjac y el Ƙ-carragenano (hasta 0.6%) mejoraron la aceptabilidad general de las salchichas. La selección de un mimético de grasa adecuado es de gran relevancia para dar la sensación en boca y la apariencia de la carne. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se analizaron nuggets de pollo emulsionados sustituidos con 10, 20, 30 y 40% de diferentes proteínas de soya y trigo texturizadas a baja humedad, en los cuales no se encontraron diferencias en términos de rendimiento, color y textura objetiva entre los productos que contenían PVT. Sin embargo, los panelistas entrenados percibieron un sabor extraño a soya en niveles altos de PVT de soya (30 y 40%), mientras que la aceptación del consumidor no se vio afectada. Se mostró el efecto de sustituir el 40, 50 y 60% de carne de pollo con PVT de chícharo, calabaza o girasol a baja y alta humedad, en las masas de los nuggets de pollo. Los análisis sensoriales de los nuggets cocidos mostraron que, con niveles de sustitución del 40%, en los productos que contenían PVT de chícharo a baja humedad se percibieron como más duros y estables que con las otras proteínas vegetales. La PVT de chícharo a baja humedad también produjo la percepción de estructuras granulares que fueron rechazadas por el 75% de los panelistas. Los nuggets que contenían PVT de chícharo se percibieron con un sabor amargo, terroso, astringente y desagradable. En nuggets elaborados con PVT que contenían calabaza o girasol se vuelven más oscuros y verdes. Para los nuggets que contenían 40% de PVT de calabaza a baja y alta humedad elaborados de la misma materia prima, se percibieron con un fuerte sabor extraño, mientras que el sabor cuando se elaboraban con el 40% de PVT a baja humedad de otras materias primas de calabaza se percibieron como menos extraño. Los nuggets elaborados de esta manera obtuvieron la puntuación más alta en sabor y en similitud con los nuggets de pollo comunes. Los resultados muestran que diferentes materias primas pueden mejorar o empeorar los productos y que se requiere una selección balanceada, especialmente al querer alcanzar el sabor y las características de los productos de carne pura. Se ha mostrado también que no es sencillo introducir nuevas fuentes alternativas de proteínas, en especial cuando los consumidores no están familiarizados con el sabor o el color. Unos investigadores reemplazaron la piel de pollo en sus nuggets de pollo con 5, 10, 15 y 20% de coliflor blanca congelada como sustituto de la grasa en lugar de reemplazar la carne. Encontraron que no hubo diferencia significativa en la aceptabilidad general de los nuggets de pollo. Los nuggets de pollo de coliflor tenían un mayor contenido de cenizas, fibra y carbohidratos, pero también un color más claro, un menor contenido de grasa y calorías, así como una menor pérdida de peso por cocción que el control, lo que convierte a la coliflor en un sustituto de grasa prometedor. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Nuggets elaboradas con una combinación de tallos de setas ostra grises y harina de garbanzo, analizados sensorialmente revelaron una reducción significativa en los atributos aromáticos teniendo como referencia el aroma de pollo, una reducción de textura, jugosidad, sabor y la aceptación general, prefiriéndose los nuggets control elaborados con carne convencional. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La fermentación de precisión en la práctica es ampliamente aceptada por los consumidores, ya que los productos finales, extraídos y purificados están libres de células recombinantes o ADN y pueden etiquetarse como naturales. La inserción de productos lácteos sin origen animal como alternativa en el mercado sigue siendo una dificultad, ya sea por razones sensoriales o por el prejuicio hacia los productos derivados de la fermentación de precisión. Aun así, una encuesta analizó a 5054 personas de 5 países (Brasil, Alemania, India, Reino Unido y Estados Unidos) sobre la aceptación de productos lácteos, en particular queso, derivados de la fermentación de precisión. Los resultados muestran una aceptación sustancial por parte de los consumidores en todos los países hacia el queso sin origen animal. De hecho, la encuesta mostró que los consumidores tienen interés y disposición para probar y comprar este producto e incluirlo en su rutina. Así se concluye que existe un mercado abierto para las proteínas obtenidas mediante el proceso de fermentación de precisión. (Pereira A, 2025)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-9-3-impacto-ambiental",
    "level": 2,
    "number": "9.3",
    "title": "Impacto ambiental.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La fermentación de precisión utiliza microorganismo como fábricas celulares para crear componentes de alimentos funcionales valiosos con altos niveles de eficiencia y pureza, al tiempo que reduce el impacto ambiental. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La fermentación de precisión puede emplearse para replicar productos existentes en el mercado, como componentes alimentarios clave como proteínas, carbohidratos y lípidos. Además, puede utilizarse para la creación de nuevos productos y novedosos en respuesta a la tendencia impulsada por la necesidad global de una producción alimentaria más sostenible. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En una revisión de diferentes fuentes Shahid M. en 2024, concluyó que la micoproteína y los productos a base de micoproteína representan una opción ambientalmente beneficiosa como alternativa a las fuentes de carne de origen animal. Además de que los impactos ambientales de las alternativas cárnicas a basa de micoproteína son muy similares a los de análogos de carne de origen vegetal. Sin embargo, es probable que existan diferencias entre los impactos de las alternativas cárnicas a base de micoproteína y las de origen vegetal tanto en la etapa de ingredientes como en la de procesamiento. "
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-9-4-desarrollo-de-nuevos-productos",
    "level": 2,
    "number": "9.4",
    "title": "Desarrollo de nuevos productos.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Durante el paso del tiempo desde 1996 hasta 2021 se lanzaron al mercado global 3959 productos alimenticios que incluían PVT en sus formulaciones. Las alternativas a la carne tienen la mayor participación de mercado, seguidas de los aperitivos o canapés y los productos cárnicos. Algunas aplicaciones de proteínas vegetales texturizadas de fuentes de soya, trigo y chícharo en alimentos y bebidas actualmente comercializados son: sustitutos de la carne, productos cárnicos, productos avícolas, productos de pescado, comidas preparadas, fideos instantáneos, platos de repostería, sándwiches/wraps, pizzas, pasta instantánea, kits de comida, arroz instantáneo, ensaladas, aperitivos/canapés, aperitivos de carne, aperitivos a base de legumbres, barritas de cereales/energéticas, aperitivos de verduras, mezclas de aperitivos, relleno, polenta, pastas, arroz, productos de papa, fideos, salsa para pasta, condimentos, salsas para cocinar, salsas de mesa, sopa seca, sopa húmeda, cereales fríos, galletas dulces, ingredientes y mezclas para hornear, pan y productos de panadería, galletas/crackers, pastas/untables salados de verduras, rellenos/untables para sándwiches, patés de carne, bebidas nutricionales y sustitutivas de comidas, mezclas para bebidas, queso procesado, bebidas plant-based, paletas y sorbetes a base de agua, postres que no requieren refrigeración, comidas y platos para bebés, tabletas de chocolate/ piezas individuales, entre otras. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La fermentación de precisión se sitúa a la vanguardia de las innovaciones biotecnológicas ofreciendo un enfoque sostenible para la producción de alimentos y otras industrias. Su capacidad para utilizar diversos sustratos, en particular subproductos agrícolas y residuos alimentarios, presenta un gran potencial para la creación de productos de alto valor. Por ejemplo, investigadores han demostrado que la fermentación de okara y granos de cerveza usando bacillus subtilis para producir alimentos son de mayor valor nutricional. De manera similar, el Grupo CRUST en Singapur ha utilizado pan no vendido para sustituir la cebada malteada en la elaboración de cerveza, creando así una cerveza de pan. Otros ejemplos incluyen el procesamiento de semillas de rambután para desarrollar productos similares al cacao. (Pereira A, 2025)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-10-mercado-de-productos-veganos",
    "level": 1,
    "number": "10",
    "title": "Mercado de productos veganos.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Según The Good Food Institute (2026) tras una década de crecimiento, la categoría de análogos de carne de origen vegetal en el comercio minorista estadounidense experimentó descensos tanto en dinero como en unidades vendidas en los últimos tres años. El resultado puede verse influenciado tanto por factores macroeconómicos como por las oportunidades que aún existen para satisfacer las necesidades de los consumidores en la categoría de análogos de carne. Si bien los precios minoristas promedio de la carne de origen vegetal no aumentaron tanto como los de la carne convencional, los análogos de carne aún tenían un precio hasta dos veces mayor que sus contrapartes. En 2025 los productos cárnicos de origen vegetal continuaron viéndose afectados por la evolución de las expectativas de los consumidores en cuanto a sabor, precio y salud, entre otros factores. Es evidente que avanzar hacia la paridad en sabor y precio, y comunicar una propuesta de valor convincente, es fundamental para llegar a la mayoría de los consumidores abiertos a los alimentos de origen vegetal."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-10-1-crecimiento-del-sector",
    "level": 2,
    "number": "10.1",
    "title": "Crecimiento del sector.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El mercado global de PVT está ampliamente fragmentado debido a la presencia de numerosos actores regionales y globales activos. El mercado global de PVT se valoró en 1100 millones de dólares en 2020 y se prevé que alcance los 2100 millones de dólares en 2027, con una tasa anual compuesta (TCAC) de 9.2%. El principal factor que impulsa un mayor interés en las fuentes no animales es la transición de alimentos de origen animal a alimentos de origen vegetal. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Desde el primero de enero de 1996 hasta 23 de febrero de 2022, se realizó una búsqueda de productos utilizando la base de datos GNPD de Mintel; la búsqueda arrojó 3959 productos alimenticios que contienen proteína vegetal texturizada. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Según World Bio Market Insights, el número de empresas de fermentación de precisión ha aumentado en los últimos años y la inversión en este sector se ha intensificado en los últimos tres años. De acuerdo con un informe de McKinsey & Company, el mercado global de carne cultivada podría alcanzar los 25,000 millones de dólares para 2030. (Pereira A, 2025)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Grandes compañías como Novozymes, DSM y CP Kelco están implementando iniciativas comerciales en el ámbito de las proteínas alternativas obtenidas mediante fermentación de precisión. Ejemplos de éxito de empresas, a parte de las mencionadas, que han tenido éxito rápido son Melibio que produce miel sin abejas, cuyos productos ya se encuentran en restaurantes de la ciudad de Nueva York en menos de un año y están a punto de cerrar una negociación de inversión de 5 millones de dólares, el otro ejemplo es Qoa, una startup sumamente innovadora que crea chocolate sin cosechar cacao y que ha obtenido 6 millones de dólares en financiación inicial. (Pereira A, 2025)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-10-2-perfil-del-consumidor",
    "level": 2,
    "number": "10.2",
    "title": "Perfil del consumidor.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "En su estudio del consumidor The Good Food Institute en 2026, muestra que en el año 2025, pocos consumidores informaron hacer visto o escuchado mucho sobre la carne de origen vegetal, Entre los consumidores que no compran carne de origen vegetal, no haberla considerado nunca o no ver una razón para comprarla fueron lagunas de las principales barreras, pero las diferencias en sabor y precio fueron más importantes, siendo estos factores de respuesta en que la carne de origen vegetal no sea una prioridad para los consumidores. En el sabor, los consumidores recalcan que es el factor principal que los motivaría a comprar un nuevo producto cárnico de origen vegetal, lo que convierte al sabor en un factor clave para retener y atraer nuevos compradores. Varios productos cárnicos de origen vegetal han obtenido buenos resultados en pruebas sensoriales recientes, aunque el producto promedio aún está por debajo de los productos convencionales. Los productos análogos de carne con sabores añadidos como sazonadores y especias, fueron de los que más rápido se vendieron en 2025, lo que refleja el interés de los consumidores por sabores intensos. Estos productos pueden resultar atractivos para los consumidores al proporcionarles un sabor familiar y apetitoso. Muchos consumidores actuales de análogos de carne afirman que productos más asequibles los motivarían a elegirla con mayor frecuencia, así mismo, lo consumidores de carne no compran análogos de carne porque el precio es una barrera comparada con la carne animal. En cuanto al factor salud, los consumidores que perciben que la carne de origen vegetal ofrece mejores beneficios para la salud, invierten más en ella. Así mismo, mostrar productos con afirmaciones diferenciadas sobre contenido de grasa saturadas, certificaciones de salud cardiovascular o listas de ingredientes más cortas, mejorarían la percepción de estos productos. Los compradores de análogos de carne gastan más que el comprador promedio de supermercado; realizan 15 compras más al año por hogar y gastan un 19% más en comestibles anualmente. Los compradores de análogos de carne que compran alimentos en línea también gastan más anualmente que el comprador promedio en línea, siendo $206 dólares frente a $172 dólares."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-10-3-tendencias-globales",
    "level": 2,
    "number": "10.3",
    "title": "Tendencias globales.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La PVT está ganando un gran impulso en el mercado de Asia-Pacífico (China, India, Japón, Corea del Sur y el resto de Asia-Pacífico). De hecho, el 31% de los productos alimenticios que contienen PVT se venden en Asia-Pacífico. En cuanto a los países, Brasil es el mercado más grande de alimentos elaborados con PVT con un 15%, seguido de China en 13%, Estados Unidos con un 12%, Reino Unido con 9% y Canadá con un 8%. (Baune M, 2022)."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los principales actores, industriales y fabricantes son ADM, Cargill, CHS, DuPont, The Scoular Company, Puris Foods, MGP Ingredients, Axiom Foods, ubicados en Estados Unidos; Shandong Yuxin Bio-Tech, FoodChem International, Shandong Wonderful Industrial Group, Crown Soya Protein Group ubicados en China;  Roquette Freres en Francia; Wilmar International en Singapur; VestKorn en Noruega; BeneoGmbH en Alemania; AGT Food & Ingredients en Canadá; Sun NutraFoods en India; La Troja en España y Hung Yang Foods en Taiwán. (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-10-4-perspectivas-futuras",
    "level": 2,
    "number": "10.4",
    "title": "Perspectivas futuras.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La PVT a baja humedad se comercializa en diferentes formas, incluyendo rebanadas o cortes, hojuelas, gránulos, trozos y otros. Se proyecta que el segmento de rebanadas representará la mayor participación en el mercado global debido a su idoneidad como alternativa a la carne. Se anticipa que el segmento de hojuelas crecerá debido al aumento de su uso en diversas comidas preparadas como cremas y sopas vegetales. (Baune M, 2022)."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-11-conclusiones",
    "level": 1,
    "number": "11",
    "title": "Conclusiones.",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Los fabricantes de equipos originales OEM y fabricantes de diseños originales ODM, así como los proveedores de proteínas vegetales en México, ofrecen calidad, innovación y sostenibilidad vanguardista para empresas globales. "
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las mezclas personalizadas complementan la experiencia con ingredientes funcionales, así como soluciones naturales de edulcorantes, que colaboran para llegar a soluciones integrales saludables, satisfaciendo las necesidades de diferentes sectores de la población."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las proteínas vegetales texturizadas se han diversificado cada vez más al buscar nuevas fuentes vegetales, así se da apertura a que nuevas propuestas sean diseñadas en favor de crear productos de valor agregado y que sean diferenciadas en un mercado tan cambiante y exigente."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Se mostró que existe muchos factores que interactúan cuando se mezclan proteínas vegetales de diferentes fuentes, así como el efecto del proceso térmico o tecnologías que se emplean. Aun así, las aplicaciones por extrusión de alta y baja humedad son los principales procesos que se emplean en la industria, teniendo mucho margen de respuesta al momento de variar condiciones como humedad, temperatura, fuerza de cizallamiento y presión. Estudiar todos estos efectos en conjunto se vuelve complejo, pero es importante saber que de lograr parámetros estrictos de condiciones pueden mejorar notablemente el producto final."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "El mercado de proteínas vegetales texturizadas tiene muchos enfoques al tratar de cubrir demandas de los consumidores. Algunos productos híbridos ya han tenido presencia desde hace mucho tiempo atrás, y la aceptación del producto es bien recibida cuando abarca rasgos como apariencia, sabor, métodos de empleo en la cocina y el precio. Emplear las PVT como extensores en alimentos procesados ha sido una buena entrada al mercado, siendo estos productos enfocados incluso al público general y no únicamente para el mercado vegano."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La sustitución completamente de la carne de origen animal en análogos de carne, necesariamente debe cubrir todos los rasgos nutritivos para llevar un estado de vida saludable. Los aditivos empleados para evitar la desnutrición, vuelven al producto análogo más costoso e incluso puede llegar a verse afectado cuando se muestren en el etiquetado. Sin embargo, generar un buen producto y diseñar una presentación que remarque los beneficios que conlleva su consumo, puede aumentar el nivel de preferencia del mismo, sacrificando incluso aspectos como el precio."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Fuentes comunes como la soya, chícharo, haba y gluten de trigo, han sido bastante estudiados, sin embargo, características de las PVT pueden cambiar al utilizar una variedad de las mismas especies, por lo que emplear una proteína vegetal puede tener características diferentes, tanto en estructura como en su composición."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "La fermentación por precisión es un aliado en la generación de análogos de carne, contribuyendo con el desarrollo de ingredientes funcionales que permite procesar alimentos que son conocidos por su origen animal, pero que ahora con su empleo son aptos para la comunidad vegana. La elaboración de un análogo de carne, necesita incluir diferentes alternativas de proteínas, así como de procesos emergentes para obtener productos muy bien definidos en estructura, en nutrientes y buena percepción hedónica. Sin embargo, todas estas posibilidades de transformación empleadas conjuntamente aumentan considerablemente el costo de los productos."
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Las PVT aún tienen un campo amplio de investigación, y el mercado está abierto para se propongan nuevas fuentes de proteína vegetal que contribuyan en el desarrollo de nuevas propuestas, pudiendo aprovechar las fuentes vegetales endémicas de nuestra región. De ser así, nos convertiría en proveedores de ingredientes para esta industria competitivos frente a empresas internacionales."
          }
        ]
      }
    ]
  },
  {
    "id": "seccion-12-referencias",
    "level": 1,
    "number": "12",
    "title": "Referencias:",
    "blocks": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Anusuya Eswaran, Pandiarajan Thirupathi, Balakrishnan Murugesan, & Hemant Kumar. (2026). Texturization Technologies for Plant-Based Meat Analogues: Components, Mechanisms, Challenges, and Future Prospects. Journal of Food Process Engineering, 49(4), e70433. "
          },
          {
            "text": "https://doi.org/10.1111/jfpe.70433",
            "href": "https://doi.org/10.1111/jfpe.70433"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Baune, M. C., Terjung, N., Tülbek, M. Ç., & Boukid, F. (2022). Textured vegetable proteins (TVP): Future foods standing on their merits as meat alternatives. Future Foods, 6, Artículo 100181. "
          },
          {
            "text": "https://doi.org/10.1016/j.fufo.2022.100181",
            "href": "https://doi.org/10.1016/j.fufo.2022.100181"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Blackstone, N. T., Pavlova, A., Trinidad, K. R., Nikkhah, A., Sinke, P., Heller, M., Duncan-Duggal, J., Ridoutt, B., Smetana, S., Makov, T., Shabtai, S., Green, A., Barnes, W., Bhattarai, I., Goyal, S., Imholz, N., Meshulam, T., Nadar, C. G., Norris, G. A., Tuomisto, H. L. (2025). Guidelines for environmental life cycle assessment of cultivated meat. The International Journal of Life Cycle Assessment, 30(12), 2943–2963. "
          },
          {
            "text": "https://doi.org/10.1007/s11367-025-02562-4",
            "href": "https://doi.org/10.1007/s11367-025-02562-4"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Borisjuk, L., Weber, H., Panitz, R., Manteuffel, R. y Wobus, U. (1995). Embryogenesis of Vicia faba L.: Histodifferentiation in relation to starch and storage protein synthesis. Journal of Plant Physiology, 147(2), 203–218. "
          },
          {
            "text": "https://doi-org.pbidi.unam.mx:2443/10.1016/S0176-1617(11)81507-5",
            "href": "https://doi-org.pbidi.unam.mx:2443/10.1016/S0176-1617(11)81507-5"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "De Angelis, D., van der Goot, A. J., Pasqualone, A., & Summo, C. (2024). Advancements in texturization processes for the development of plant-based meat analogs: a review. Current Opinion in Food Science, 58, Artículo 101192. "
          },
          {
            "text": "https://doi.org/10.1016/j.cofs.2024.101192",
            "href": "https://doi.org/10.1016/j.cofs.2024.101192"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Dekkers, B. L., Boom, R. M., & van der Goot, A. J. (2018). Structuring processes for meat analogues. Trends in Food Science & Technology, Volumen 81, Páginas 25-36 (12p). "
          },
          {
            "text": "https://doi.org/10.1016/j.tifs.2018.08.011",
            "href": "https://doi.org/10.1016/j.tifs.2018.08.011"
          },
          {
            "text": " "
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Dinali, M., Wijesekara, I., Liyanage, R., Newman, L., Adhikari, B., Silva, M. y Chandrapala, J. (2026). Structural, and functional characterisation of texturized mung bean, cowpea, soy flours, and soy protein isolates for meat analogue applications. Food Structure, 39, Artículo 100528. "
          },
          {
            "text": "https://doi.org/10.1016/j.foostr.2026.100528",
            "href": "https://doi.org/10.1016/j.foostr.2026.100528"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Directorio Industrial de México. (s. f.). "
          },
          {
            "text": "Alimentos en general: Soya",
            "italic": true
          },
          {
            "text": ". Recuperado el 23 de septiembre de 2026, de "
          },
          {
            "text": "https://www.dirind.com/dag/soya1.html",
            "href": "https://www.dirind.com/dag/soya1.html?utm_source=gemini"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Elera Javier, A., Florencia, S., Fernando A., B., & Ana M. R., P. (2025). Impulsando la innovación en bebidas a base de proteínas vegetales. "
          },
          {
            "text": "Alimentación Latinoamericana",
            "italic": true
          },
          {
            "text": ", "
          },
          {
            "text": "59",
            "italic": true
          },
          {
            "text": "(374), 16–20. "
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Hong, S., Shen, Y., & Li, Y. (2022). Physicochemical and functional properties of texturized vegetable proteins and cooked patty textures: Comprehensive characterization and correlation analysis. Foods, 11(17), Artículo 2619. "
          },
          {
            "text": "https://doi.org/10.3390/foods11172619",
            "href": "https://doi.org/10.3390/foods11172619"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Ilse Monroy Rodríguez, Araceli Castañeda Ovando, Elizabeth Contreras López, & Judith Jaimez Ordaz. (2024). Proteínas Vegetales: la clave para la alimentación basada en plantas. Uno Sapiens Boletín de la Escuela Preparatoria No. 1, 6, 8-11. "
          },
          {
            "text": "https://doi-org.pbidi.unam.mx:2443/10.29057/prepa1.v6i12.11788",
            "href": "https://doi-org.pbidi.unam.mx:2443/10.29057/prepa1.v6i12.11788"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Kantanen, K., Oksanen, A., Edelmann, M., Suhonen, H., Sontag-Strohm, T., Piironen, V., Ramos Diaz, J. M., & Jouppila, K. (2022). Physical Properties of Extrudates with Fibrous Structures Made of Faba Bean Protein Ingredients Using High Moisture Extrusion. Foods, 11(9), 1280. "
          },
          {
            "text": "https://doi.org/10.3390/foods11091280",
            "href": "https://doi.org/10.3390/foods11091280"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Kyriakopoulou, K., Keppler, J. K., van der Goot, A. J., & Boom, R. M. (2021). Alternatives to Meat and Dairy. "
          },
          {
            "text": "Annual Review of Food Science and Technology",
            "italic": true
          },
          {
            "text": ", "
          },
          {
            "text": "12",
            "italic": true
          },
          {
            "text": ", 29–50. "
          },
          {
            "text": "https://doi-org.pbidi.unam.mx:2443/10.1146/annurev-food-062520-101850",
            "href": "https://doi-org.pbidi.unam.mx:2443/10.1146/annurev-food-062520-101850"
          },
          {
            "text": " "
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Naeve, S. L. (2018). Etapas de crecimiento de la soja. Extensión de la Universidad de Minnesota. "
          },
          {
            "text": "https://extension.umn.edu/agriculture/crop-production/soybean/soybean-growth-stages",
            "href": "https://extension.umn.edu/agriculture/crop-production/soybean/soybean-growth-stages"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Pereira, A. A., Yaverino Gutiérrez, M. A., Monteiro, M. C., Souza, B. A., Bachheti, R. K., & Chandel, A. K. (2025). Fermentación de precisión en el ámbito de la producción de proteínas microbianas: estado actual y perspectivas de futuro. Food Research International, 115527. "
          },
          {
            "text": "https://doi.org/10.1016/j.foodres.2024.115527",
            "href": "https://doi.org/10.1016/j.foodres.2024.115527"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Proteína de Soya Texturizada. (2010). Industria Alimenticia, 21(10), 20. "
          },
          {
            "text": "https://research-ebsco-com.pbidi.unam.mx:2443/c/df24kt/search/details/ipqmk3kq2b?limiters=FT%3AY&q=soya+texturizada&searchMode=boolean",
            "href": "https://research-ebsco-com.pbidi.unam.mx:2443/c/df24kt/search/details/ipqmk3kq2b?limiters=FT%3AY&q=soya+texturizada&searchMode=boolean"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Rivera-Pérez, E. M., Granados-Nevárez, M. D. C., Montoya-Ballesteros, L. D. C., Váquez-Lara, F., Islas-Rubio, A. R., & Heredia-Sandoval, N. G. (2026). Development of a Soy-Pea-Based Nugget Using Texturized Commercial Products: Physicochemical and Sensory Evaluation. Plant Foods for Human Nutrition (Dordrecht,Netherlands),81(3).\n"
          },
          {
            "text": "https://doi-org.pbidi.unam.mx:2443/10.1007/s11130-026-01567-0",
            "href": "https://doi-org.pbidi.unam.mx:2443/10.1007/s11130-026-01567-0"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Sara. (13 de enero de 2026). Principales fabricantes y proveedores de proteínas vegetales en México. Newnature. Recuperado el 23 de septiembre de 2026, de "
          },
          {
            "text": "https://www.newnaturebio.com/es/top-plant-protein-manufacturers-and-suppliers-in-mexico.html",
            "href": "https://www.newnaturebio.com/es/top-plant-protein-manufacturers-and-suppliers-in-mexico.html"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Schmid, E. - M., Farahnaky, A., Adhikari, B., & Torley, P. J. (2022). High moisture extrusion cooking of meat analogs: A review of mechanisms of protein texturization. Comprehensive Reviews in Food Science and Food Safety, 21, 4573–4609. "
          },
          {
            "text": "https://doi.org/10.1111/1541-4337.13030",
            "href": "https://doi.org/10.1111/1541-4337.13030"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Secretaría de Economía. (2024). Concentrados de proteínas y sustancias proteicas texturadas: Intercambio comercial, importaciones y exportaciones, mercado y especialización. Data México. Recuperado el 23 de septiembre de 2026, de "
          },
          {
            "text": "https://www.economia.gob.mx/datamexico/es/profile/product/protein-concentrates-and-textured-protein-substances",
            "href": "https://www.economia.gob.mx/datamexico/es/profile/product/protein-concentrates-and-textured-protein-substances"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Sha, L., & Xiong, Y. L. (2020). Plant protein-based alternatives of reconstructed meat: Science, technology, and challenges. Trends in Food Science & Technology, 102, 51-61. "
          },
          {
            "text": "https://doi-org.pbidi.unam.mx:2443/10.1016/j.tifs.2020.05.022",
            "href": "https://doi-org.pbidi.unam.mx:2443/10.1016/j.tifs.2020.05.022"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Shahid, M., Shah, P., Mach, K., Rodgers-Hunt, B., Finnigan, T., Frost, G., Neal, B., & Hadjikakou, M. (2024). Environmental impact of mycoprotein-based meat alternatives compared to plant-based meat alternatives: A systematic review. Future Foods, 10, 100410. "
          },
          {
            "text": "https://doi.org/10.1016/j.fufo.2024.100410",
            "href": "https://doi.org/10.1016/j.fufo.2024.100410"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Shewry, P. R., & Tatham, A. S. (2000). Wheat gluten (pp. 408-438). Royal Society of Chemistry. "
          },
          {
            "text": "https://doi.org/10.1039/9781847552389",
            "href": "https://doi.org/10.1039/9781847552389"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Singh, R., Bandara, N., & Koksel, F. (2026). Mechanistic insights into protein structure, nutritional quality and physical attributes of faba bean protein-based high-moisture meat analogues. Food Chemistry, 480, Artículo 148741. "
          },
          {
            "text": "https://doi.org/10.1016/j.foodchem.2026.148741",
            "href": "https://doi.org/10.1016/j.foodchem.2026.148741"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Singh, U., Jambunathan, R., & Saxena, N. P. (1981). Changes in carbohydrates, amino acids and proteins in developing seed of chickpea. Phytochemistry, 20(3), 373–378. "
          },
          {
            "text": "https://doi.org/10.1016/0031-9422(81)84148-5",
            "href": "https://doi.org/10.1016/0031-9422(81)84148-5"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "The Good Food Institute. (2026). Analyzing plant-based meat & seafood sales. Recuperado el 2 de octubre de 2026, de "
          },
          {
            "text": "https://gfi.org/resource/analyzing-plant-based-meat-and-seafood-sales/",
            "href": "https://gfi.org/resource/analyzing-plant-based-meat-and-seafood-sales/"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Webb, D., Li, Y., & Alavi, S. (2023). Chemical and physicochemical features of common plant proteins and their extrudates for use in plant-based meat. Trends in Food Science & Technology, 131, 129–138. "
          },
          {
            "text": "https://doi.org/10.1016/j.tifs.2022.11.006",
            "href": "https://doi.org/10.1016/j.tifs.2022.11.006"
          }
        ]
      },
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Zhao, Y., Li, K., Zhang, X., Zhang, T., Zhao, J., Jiang, L., & Sui, X. (2024). Protein blend extrusion: Crafting meat analogues with varied textural structures and characteristics. Food Chemistry, 460. \n"
          },
          {
            "text": "https://doi-org.pbidi.unam.mx:2443/10.1016/j.foodchem.2024.140709",
            "href": "https://doi-org.pbidi.unam.mx:2443/10.1016/j.foodchem.2024.140709"
          }
        ]
      }
    ]
  }
];
