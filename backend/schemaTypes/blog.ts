export default {
    name: 'blog',
    title: 'Artículos',
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
  ],
    fields: [
      {
        name: 'titleseo',
        title: 'Título para posicionar esta página en buscadores',
        type: 'string',
        description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
        group: 'seo',
        validation: rule => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados')
      },
      {
        name: 'descseo',
        title: 'Descripción para posicionar esta página en buscadores',
        type: 'text',
        description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
        group: 'seo',
        validation: rule => rule.max(155).warning('Se han rebasado los 155 caracteres recomendados')
      },
      {
        name: 'keyseo',
        title: 'Palabras clave para posicionar esta página en buscadores',
        type: 'text',
        description: '*Separar palabras con comas',
        group: 'seo'
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
    ]
  }