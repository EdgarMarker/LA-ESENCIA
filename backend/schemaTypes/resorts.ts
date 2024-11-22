export default {
  name: 'resorts',
  title: 'Resorts',
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
      name: 'toBe',
      title: 'Divisor galleria',
    },
    {
      name: 'experience',
      title: 'Experiencias',
    },
    {
      name: 'activity',
      title: 'Actividades'
    },
    {
      name: 'article',
      title: 'Artículos',
    },
    {
      name: 'discoverBenefits',
      title: 'Regístrate aquí',
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
      name: 'toBeH2',
      title: 'Título principal para la sección de divisor con galleria',
      description:
        '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
      type: 'blockContent',
      group: 'toBe',
    },
    {
      name: 'toBeImg1',
      title: 'Galleria de imágenes primera parte',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
      group: 'toBe',
      validation: (Rule: ArrayValidationRule) =>
        Rule.max(2).error('No se pueden agregar más de 2 imágenes'),
    },
    {
      name: 'toBeImg2',
      title: 'Galleria de imágenes segunda parte',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
      group: 'toBe',
      validation: (Rule: ArrayValidationRule) =>
        Rule.max(2).error('No se pueden agregar más de 2 imágenes'),
    },
    {
      name: 'toBeImg3',
      title: 'Galleria de imágenes tercera parte',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
      group: 'toBe',
      validation: (Rule: ArrayValidationRule) =>
        Rule.max(2).error('No se pueden agregar más de 2 imágenes'),
    },
    {
      name: 'recentArticles',
      title: 'Artículos recientes',
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
          name: 'articles',
          title: 'Artículos',
          type: 'array',
          of: [{type: 'reference', to: {type: 'post'}}],
          options: {
            layout: 'grid',
          },
          validation: (rule: ArrayValidationRule) =>
            rule.max(5).warning('Se han rebasado los 5 elementos recomendados'),
        },
      ],
    },
    {
      name: 'discoverBenefits',
      title: 'Regístrate aquí',
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
    {
      name: 'experience',
      title: 'Sección de experiencia',
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
          name: 'desc',
          title: 'Descripción general',
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
      name: 'activity',
      title: 'Sección de actividades exclusivas',
      group: 'activity',
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
          title: 'Lista de imágenes',
          type: 'array',
          of: [{
            type: 'object', fields: [
              {
                name: 'title',
                title: 'Nombre de la actividad',
                type: 'string'
              },
              {
                name: 'img',
                title: 'Imagen',
                type: 'image'
              }
          ]}],
        },
      ],
    },
  ],
}
