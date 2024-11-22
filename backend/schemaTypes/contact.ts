export default {
  name: 'contacto',
  title: 'Contacto',
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
      name: 'form',
      title: 'Formulario',
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
      name: 'intro',
      title: 'Sección de introducción',
      type: 'object',
      group: 'intro',
      fields: [
        {
          name: 'h2Left',
          title: 'Título principal lado izquierdo',
          description:
            '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'pLeft',
          title: 'Descripción',
          type: 'text',
        },
        {
          name: 'img1Left',
          title: 'Imagen fondo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'img2Left',
          title: 'Imagen',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'h2Right',
          title: 'Título principal lado derecho',
          description:
            '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'pRight',
          title: 'Descripción',
          type: 'text',
        },
        {
          name: 'img1Right',
          title: 'Imagen fondo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'img2Right',
          title: 'Imagen',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'form',
      title: 'Formulario',
      group: 'form',
      type: 'object',
      fields: [
        {
          name: 'h2',
          title: 'Título principal',
          description:
            '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)',
          type: 'blockContent',
        },
        {
          name: 'img',
          title: 'Imagen de fondo de sección del formulario',
          type: 'image',
        },
      ],
    },
  ],
}
