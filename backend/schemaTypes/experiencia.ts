export default {
  name: 'experiencia',
  title: 'Experiencia',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'hero',
      title: 'Hero',
    },
    {
      name: 'intro',
      title: 'Introducción',
    },
    {
      name: 'spa',
      title: 'spa carousel',
      description: 'hi',
    },
    {
      name: 'adventure',
      title: 'Aventura carousel',
    },
    {
      name: 'placeToBe',
      title: 'Divisor place to be',
    },
    {
      name: 'traditions',
      title: 'Tradiciones'
    }
  ],
  fields: [
    {
      name: 'titleseo',
      title: 'Título para posicionar esta página en buscadores',
      type: 'string',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
      group: 'seo',
      validation: (rule) => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados'),
    },
    {
      name: 'descseo',
      title: 'Descripción para posicionar esta página en buscadores',
      type: 'text',
      description:
        '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
      group: 'seo',
      validation: (rule) =>
        rule.max(155).warning('Se han rebasado los 155 caracteres recomendados'),
    },
    {
      name: 'keyseo',
      title: 'Palabras clave para posicionar esta página en buscadores',
      type: 'text',
      description: '*Separar palabras con comas',
      group: 'seo',
    },
    {
      name: 'heroH1',
      title: 'Subtítulo de apertura',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroH2',
      title: 'Título principal',
      type: 'blockContent',
      group: 'hero',
      description:
        '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
    },
    /*
    {
      name: 'heroP',
      title: 'Descripción',
      type: 'text',
      group: 'hero',
    },*/
    {
      name: 'heroBtn1',
      title: 'Texto del botón',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroBtn2',
      title: 'Texto del segundo botón',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'introH2',
      title: 'Título principal',
      type: 'blockContent',
      group: 'intro',
      description:
        '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
    },
    {
      name: 'introH3',
      title: 'Subtítulo indicador para la introducción',
      type: 'string',
      group: 'intro',
    },
    {
      name: 'introDesc',
      title: 'Descripción para la introducción',
      type: 'blockContent',
      group: 'intro',
    },
    {
      name: 'introImg1',
      title: 'Imagen principal para la introducción',
      type: 'image',
      group: 'intro',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'introImg2',
      title: 'Imagen secundaria para la introducción',
      type: 'image',
      group: 'intro',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'spaCarousel',
      title: 'Sección de carrousel de imágenes',
      group: 'spa',
      type: 'object',
      fields: [
        {
          name: 'text1',
          title: 'Texto 1',
          type: 'object',
          fields: [
            {
              name: 'h2',
              title: 'titulo',
              type: 'blockContent',
            },
            {
              name: 'desc',
              title: 'Descripción',
              type: 'blockContent',
            },
          ],
        },
        {
          name: 'img1',
          title: 'Imagen correspondiente al texto',
          type: 'image',
        },
        {
          name: 'text2',
          title: 'Texto 2',
          type: 'object',
          fields: [
            {
              name: 'h2',
              title: 'titulo',
              type: 'blockContent',
            },
            {
              name: 'desc',
              title: 'Descripción',
              type: 'blockContent',
            },
          ],
        },
        {
          name: 'img2',
          title: 'Imagen correspondiente al texto',
          type: 'image',
        },
        {
          name: 'text3',
          title: 'Texto 3',
          type: 'object',
          fields: [
            {
              name: 'h2',
              title: 'titulo',
              type: 'blockContent',
            },
            {
              name: 'desc',
              title: 'Descripción',
              type: 'blockContent',
            },
          ],
        },
        {
          name: 'img3',
          title: 'Imagen correspondiente al texto',
          type: 'image',
        },
        {
          name: 'text4',
          title: 'Texto 4',
          type: 'object',
          fields: [
            {
              name: 'h2',
              title: 'titulo',
              type: 'blockContent',
            },
            {
              name: 'desc',
              title: 'Descripción',
              type: 'blockContent',
            },
          ],
        },
        {
          name: 'img4',
          title: 'Imagen correspondiente al texto',
          type: 'image',
        },
        {
          name: 'text5',
          title: 'Texto 5',
          type: 'object',
          fields: [
            {
              name: 'h2',
              title: 'titulo',
              type: 'blockContent',
            },
            {
              name: 'desc',
              title: 'Descripción',
              type: 'blockContent',
            },
          ],
        },
        {
          name: 'img5',
          title: 'Imagen correspondiente al texto',
          type: 'image',
        },
        {
          name: 'text6',
          title: 'Texto 6',
          type: 'object',
          fields: [
            {
              name: 'h2',
              title: 'titulo',
              type: 'blockContent',
            },
            {
              name: 'desc',
              title: 'Descripción',
              type: 'blockContent',
            },
          ],
        },
        {
          name: 'img6',
          title: 'Imagen correspondiente al texto',
          type: 'image',
        },
        {
          name: 'text7',
          title: 'Texto 7',
          type: 'object',
          fields: [
            {
              name: 'h2',
              title: 'titulo',
              type: 'blockContent',
            },
            {
              name: 'desc',
              title: 'Descripción',
              type: 'blockContent',
            },
          ],
        },
        {
          name: 'img7',
          title: 'Imagen correspondiente al texto',
          type: 'image',
        },
        {
          name: 'text8',
          title: 'Texto 8',
          type: 'object',
          fields: [
            {
              name: 'h2',
              title: 'titulo',
              type: 'blockContent',
            },
            {
              name: 'desc',
              title: 'Descripción',
              type: 'blockContent',
            },
          ],
        },
        {
          name: 'img8',
          title: 'Imagen correspondiente al texto',
          type: 'image',
        },
      ],
    },
    {
      name: 'adventure',
      title: 'Sección de aventura',
      group: 'adventure',
      type: 'object',
      fields: [
        {
          name: 'h2',
          title: 'Titulo principal',
          type: 'blockContent',
          description:
            '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
        },
        {
          name: 'gallery',
          title: 'Galería de imágenes tipo carousel',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'texto de la imagen de presentación',
                  type: 'string',
                },
                {
                  name: 'img',
                  title: 'Imagen',
                  type: 'image',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'placeToBeH2',
      title: 'Titulo principal',
      type: 'blockContent',
      group: 'placeToBe',
      description:
        '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
    },
    {
      name: 'placeToBeImg',
      title: 'Imagen divisora',
      group: 'placeToBe',
      type: 'image',
    },
    {
      name: 'traditionsH2',
      title: 'Titulo principal',
      type: 'blockContent',
      group: 'traditions',
      description:
        '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
    },
    {
      name: 'traditionsH3',
      title: 'subtitulo',
      group: 'traditions',
      type: 'string',
    },
    {
      name: 'traditionsDesc',
      title: 'Descripción',
      group: 'traditions',
      type: 'blockContent',
    },
    {
      name: 'traditionsBtn',
      title: 'Texto para el botón de acción',
      group: 'traditions',
      type: 'string',
    },
    {
      name: 'traditionsImg1',
      title: 'imagen 1',
      group: 'traditions',
      type: 'image'
    },
    {
      name: 'traditionsImg2',
      title: 'imagen 2',
      group: 'traditions',
      type: 'image'
    },
    {
      name: 'traditionsImg3',
      title: 'imagen 3',
      group: 'traditions',
      type: 'image'
    }
  ],
}
