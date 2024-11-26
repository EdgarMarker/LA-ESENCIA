export default {
  name: 'socios',
  title: 'Socios',
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
      title: 'Icono Turístico',
    },
    {
      name: 'banner',
      title: 'Banner',
    },
    {
      name: 'income',
      title: 'Ingresos de inversión',
    },
    {
      name: 'uFind',
      title: 'Lo que encontraras',
    },
    {
      name: 'model',
      title: 'Modelo de oportunidad',
    },
    {
      name: 'discover',
      title: 'Sé parte del proyecto',
    },
    {
      name: 'discoverBenefits',
      title: 'Socios fundadores',
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
      name: 'discoverPueblito',
      title: 'Pueblito',
      type: 'object',
      group: 'discover',
      fields: [
        {
          name: 'h2',
          title: 'Título principal',
          description:
            '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'h3',
          title: 'Subtítulo indicador',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'blockContent',
        },
        {
          name: 'img',
          title: 'Imágenes de sección',
          type: 'array',
          of: [{type: 'image'}],
        },
      ],
    },
    {
      name: 'experience',
      title: 'Sección de icono turístico',
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
      name: 'banner',
      title: 'Banner',
      group: 'banner',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Texto',
          type: 'string',
        },
        {
          name: 'img',
          title: 'Imagen del banner',
          type: 'image',
        },
      ],
    },
    {
      name: 'income',
      title: 'Ingresos de inversión ',
      group: 'income',
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
          title: 'Descripción',
          type: 'blockContent',
        },
        {
          name: 'list',
          title: 'Lista de servicios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Nombre',
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
      name: 'uFind',
      title: 'Sección lo que encontraras',
      group: 'uFind',
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
          title: 'Lista de servicios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'img',
          title: 'Imagen de sección',
          type: 'image',
        },
      ],
    },
    {
      name: 'model',
      title: 'Sección Modelo de oportunidades',
      group: 'model',
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
          name: 'h3',
          title: 'Subtitulo de sección',
          type: 'string'
        },
        {
          name: 'desc',
          title: 'Descripción',
          type: 'blockContent',
        },
        {
          name: 'img',
          title: 'Imagen de sección',
          type: 'image',
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
  ],
}
