import {validation} from 'sanity'

interface ArrayValidationRule {
  max: (n: number) => any
  error: (message: string) => any
}

export default {
  name: 'inicio',
  title: 'Inicio',
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
      name: 'introDivider',
      title: 'Separador de introducción',
    },
    {
      name: 'discover',
      title: 'Descubre Pueblito',
    },
    {
      name: 'toBe',
      title: 'Divisor galleria',
    },
    {
      name: 'discoverBenefits',
      title: 'Descubre los Beneficios',
    },
    {
      name: 'article',
      title: 'Artículos',
    },
    {
      name: 'location',
      title: 'Ubicación',
    },



    {
      name: 'activity',
      title: 'Actividades',
    },
    {
      name: 'divider',
      title: 'Separador ilustrativo',
    },
    {
      name: 'concept',
      title: 'Concepto',
    },
    {
      name: 'iWant',
      title: 'Quiero ser',
    },
    {
      name: 'prod',
      title: 'Productos recientes',
    },
  ],
  fields: [
    {
      name: 'titleseo',
      title: 'Título para posicionar esta página en buscadores',
      type: 'string',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
      group: 'seo',
      validation: (rule: ArrayValidationRule) =>
        rule.max(70).warning('Se han rebasado los 70 caracteres recomendados'),
    },
    {
      name: 'descseo',
      title: 'Descripción para posicionar esta página en buscadores',
      type: 'text',
      description:
        '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
      group: 'seo',
      validation: (rule: ArrayValidationRule) =>
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
      title: 'Texto del primer botón',
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
      name: 'heroImg',
      title: 'Imagen principal',
      type: 'image',
      group: 'hero',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'introH2',
      title: 'Título principal para la introducción',
      description:
        '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
      type: 'blockContent',
      group: 'intro',
    },
    {
      name: 'introH4',
      title: 'Titulillo para descripción',
      type: 'string',
      group: 'intro',
    },
    {
      name: 'introRichText',
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
      name: 'introDivider',
      title: 'Carrousel de introducción',
      type: 'object',
      group: 'introDivider',
      fields: [
        {
          name: 'logo',
          title: 'Logo ilustrativo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'slide1',
          title: 'Imágenes del carrousel lado izquierdo',
          type: 'array',
          of: [{type: 'image'}],
          options: {
            layout: 'grid',
          },
          validation: (rule: ArrayValidationRule) =>
            rule.max(3).warning('Se han rebasado los 3 elementos recomendados'),
        },
        {
          name: 'slide2',
          title: 'Imágenes del carrousel lado derecho',
          type: 'array',
          of: [{type: 'image'}],
          options: {
            layout: 'grid',
          },
          validation: (rule: ArrayValidationRule) =>
            rule.max(3).warning('Se han rebasado los 3 elementos recomendados'),
        },
      ],
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
      name: 'toBeH2',
      title: 'Título principal para la sección de divisor con galleria',
      description:
        '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
      type: 'blockContent',
      group: 'toBe',
    },
    {
      name: 'toBeImg',
      title: 'Galleria de imágenes',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
      group: 'toBe',
      validation: (Rule: ArrayValidationRule) =>
        Rule.max(6).error('No se pueden agregar más de 6 imágenes'),
    },
    {
      name: 'discoverBenefits',
      title: 'Beneficios',
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
          }
        }
      ],
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
      ]
    },
    {
      name: 'location',
      title: 'Sección de ubicación',
      group: 'location',
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
          title: 'Subtítulo indicador',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Descripción',
          type: 'blockContent',
        },
      ]
    },




    {
      name: 'activityH3',
      title: 'Subtítulo indicador para las actividades',
      type: 'string',
      group: 'activity',
    },
    {
      name: 'activityH2',
      title: 'Título principal para las actividades',
      type: 'blockContent',
      group: 'activity',
    },
    {
      name: 'activityH4',
      title: 'Titulillo para descripción',
      type: 'string',
      group: 'activity',
    },
    {
      name: 'activityRichText',
      title: 'Descripción para las actividades',
      type: 'blockContent',
      group: 'activity',
    },
    {
      name: 'activityBtn',
      title: 'Texto del botón',
      type: 'string',
      group: 'activity',
    },
    {
      name: 'dividerImg',
      title: 'Imagen de división',
      type: 'image',
      group: 'divider',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'conceptH3',
      title: 'Subtítulo indicador para el concepto',
      type: 'string',
      group: 'concept',
    },
    {
      name: 'conceptH2',
      title: 'Título principal para el concepto',
      description:
        '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
      type: 'blockContent',
      group: 'concept',
    },
    {
      name: 'conceptH4',
      title: 'Titulillo para descripción',
      type: 'string',
      group: 'concept',
    },
    {
      name: 'conceptRichText',
      title: 'Descripción para el concepto',
      type: 'blockContent',
      group: 'concept',
    },
    {
      name: 'conceptBtn',
      title: 'Texto del botón',
      type: 'string',
      group: 'concept',
    },
    {
      name: 'conceptImg1',
      title: 'Imagen lateral para el concepto',
      type: 'image',
      group: 'concept',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'conceptImg2',
      title: 'Segnda imagen lateral para el concepto',
      type: 'image',
      group: 'concept',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'locationH3',
      title: 'Subtítulo indicador para la locación',
      type: 'string',
      group: 'location',
    },
    {
      name: 'locationH2',
      title: 'Título principal para la locación',
      description:
        '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
      type: 'blockContent',
      group: 'location',
    },
    {
      name: 'locationH4',
      title: 'Titulillo para descripción',
      type: 'string',
      group: 'location',
    },
    {
      name: 'locationRichText',
      title: 'Descripción para la locación',
      type: 'blockContent',
      group: 'location',
    },
    {
      name: 'locationMapImg',
      title: 'Imagen del mapa',
      type: 'image',
      group: 'location',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'locationPinImg',
      title: 'Pin de mapa',
      type: 'image',
      group: 'location',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'iWantImg',
      title: 'Imagen representativa de sección',
      type: 'image',
      group: 'iWant',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'iWantCard',
      title: 'Tarjeta de quiero ser',
      type: 'object',
      group: 'iWant',
      fields: [
        {
          name: 'img',
          title: 'Imagen tipo logo de la tarjeta',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'h2',
          title: 'Titulo de la tarjeta',
          description:
            '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'btn',
          title: 'Configuración del botón',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nombre del botón',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link del botón',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'recentProdRef',
      type: 'object',
      group: 'prod',
      fields: [
        {
          title: 'Productos recientes',
          name: 'recentProducts',
          type: 'array', // Cambiado de 'reference' a 'array'
          of: [{type: 'reference', to: [{type: 'products'}]}], // Especifica que es un array de referencias
        },
      ],
    },
  ],
}
