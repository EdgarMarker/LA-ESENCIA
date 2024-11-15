import {validation} from 'sanity'

export default {
  name: 'ubicacion',
  title: 'Ubicación',
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
      name: 'haveAll',
      title: 'Lo tiene todo',
    },
    {
      name: 'discoverBenefits',
      title: 'El nuevo place to be',
    },
    {
      name: 'map',
      title: 'Mapa',
    },
    {
      name: 'adventure',
      title: 'Carousel de imágenes',
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
      name: 'introImg2',
      title: 'Imagen personalizada png para la introducción',
      type: 'image',
      group: 'intro',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'haveAll',
      title: 'Sección el lugar que lo tiene todo',
      group: 'haveAll',
      type: 'object',
      fields: [
        {
          name: 'h2',
          title: 'Título principal para la introducción',
          description:
            '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'h3',
          title: 'Subtitulo',
          type: 'string',
        },
        {
          name: 'desc',
          title: 'Descripción',
          type: 'blockContent',
        },
        {
          name: 'leftGallery',
          title: 'Galería de imágenes lado izquierdo',
          type: 'image',
        },
        {
          name: 'rightGallery',
          title: 'Galería de imágenes lado derecho',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          options: {
            layout: 'grid',
          },
          validation: (rule) => rule.max(2).warning('Se han rebasado los 3 elementos recomendados'),
        },
      ],
    },
    {
      name: 'discoverBenefits',
      title: 'Sección el nuevo place to be',
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
      name: 'map',
      title: 'Sección del mapa',
      type: 'object',
      group: 'map',
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
          name: 'keyPlaces',
          title: 'Lugares claves',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Nombre',
                  type: 'string',
                },
                {
                  name: 'icon',
                  title: 'Icono',
                  type: 'image',
                },
              ],
            },
          ],
          
        },
        {
          name: 'img',
          title: 'Imagen fondo',
          type: 'image',
          options: {
            hotspot: true,
          },
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
  ],
}
