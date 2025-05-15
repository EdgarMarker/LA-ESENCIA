export default {
  name: 'gracias',
  title: 'Miembros',
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
      name: 'experience',
      title: 'Sección beneficios',
    },
    {
      name: 'banner',
      title: 'Banner'
    },
    {
      name: 'privileges',
      title: 'Privilegios',
    },
    {
      name: 'article',
      title: 'Servicios exclusivos',
    },
    {
      name: 'discoverBenefits',
      title: 'Sección de red fundadores',
    },
    {
      name: 'decidir',
      title: 'Divisor decidir',
    },
    {
      name: 'price',
      title: 'Precio llamativo',
    },
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
      name: 'brochure',
      title: 'Subir brochure para socios fundadores',
      type: 'file',
      group: 'intro',
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
      name: 'privileges',
      title: 'Privilegios',
      type: 'object',
      group: 'privileges',
      fields: [
        {
          name: 'h2',
          title: 'Título principal',
          description:
            '* agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'h3',
          title: 'Subtítulo principal',
          type: 'string',
        },
        {
          name: 'list',
          title: 'Listado',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Título',
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
          validation: (rule: ArrayValidationRule) =>
            rule.max(6).error('Se han rebasado los 6 elementos recomendados'),
        },
      ],
    },
    {
      name: 'experience',
      title: 'Sección de beneficios',
      group: 'experience',
      type: 'object',
      fields: [
        {
          name: 'h2',
          title: 'Título principal',
          description:
            '* agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'list',
          title: 'Lista de elementos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'h3',
                  title: 'Titulo',
                  type: 'string',
                },
                {
                  name: 'p',
                  title: 'Texto',
                  type: 'text',
                },
                {
                  name: 'img',
                  title: 'Icono',
                  type: 'image',
                },
              ],
            },
          ],
          validation: (rule: ArrayValidationRule) =>
            rule.max(3).error('Se han rebasado los 3 elementos recomendados'),
        },
      ],
    },
    {
      name: 'banner',
      title: 'Banner',
      group: 'banner',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Texto',
          type: 'string'
        },
        {
          name: 'img',
          title: 'Imagen del banner',
          type: 'image'
        }
      ]
    },
    {
      name: 'recentArticles',
      title: 'Servicios exclusivos',
      type: 'object',
      group: 'article',
      fields: [
        {
          name: 'h2',
          title: 'Título principal',
          description:
            '* agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'desc',
          title: 'Descripción',
          type: 'blockContent',
        },
        {
          name: 'articles',
          title: 'Servicios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Descripción',
                  type: 'blockContent',
                },
                {
                  name: 'img',
                  title: 'Imagen',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
          validation: (rule: ArrayValidationRule) =>
            rule.max(5).warning('Se han rebasado los 5 elementos recomendados'),
        },
      ],
    },
    {
      name: 'decidir',
      title: 'Sección divisor de decidir',
      type: 'object',
      group: 'decidir',
      fields: [
        {
          name: 'h2',
          title: 'Título principal',
          description:
            '* agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'desc',
          title: 'Description',
          type: 'blockContent',
        },
        {
          name: 'img1',
          title: 'Imagen de fondo',
          type: 'image',
        },
      ],
    },
    {
      name: 'price',
      title: 'Sección de inversion y precio',
      type: 'object',
      group: 'price',
      fields: [
        {
          name: 'h2',
          title: 'Título principal',
          description:
            '* agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'desc',
          title: 'Titulo de descripción',
          type: 'blockContent',
        },
        {
          name: 'h3',
          title: 'subtitulo de sección',
          type: 'string',
        },
        {
          name: 'numero',
          title: 'Precio llamativo',
          type: 'string',
        },
        {
          name: 'span',
          title: 'Información sobre el precio',
          type: 'string',
        },
      ],
    },
    {
      name: 'discoverBenefits',
      title: 'Sección de red fundadores',
      type: 'object',
      group: 'discoverBenefits',
      fields: [
        {
          name: 'h2',
          title: 'Título principal',
          description:
            '* agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'blockContent',
        },
        {
          name: 'img',
          title: 'Imagen fondo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
