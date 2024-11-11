export default {
  name: 'empresa',
  title: 'Datos de la empresa',
  type: 'document',
  groups: [
    {
      name: 'form',
      title: 'Formulario',
    },
    {
      name: 'logo',
      title: 'logos'
    }
  ],
  fields: [
    {
      name: 'brandName',
      title: 'Nombre de la empresa',
      type: 'string'
    },
    {
      name: 'brandLogo',
      title: 'Logo de la empresa para el menú principal',
      type: 'image',
      options: {
          hotspot: true,
      },
    },
    {
      name: 'brandIndustry',
      title: 'Giro o industria',
      type: 'string',
    },
    {
      name: 'brandTagLine',
      title: 'Eslogan',
      type: 'string',
    },
    {
      name: 'brandPhone',
      title: 'Teléfono',
      description: '*Escribir solo los 10 dígitos, sin lada y sin espacios',
      type: 'string',
    },
    {
      name: 'brandEmail',
      title: 'Correo electrónico',
      type: 'string',
    },
    {
      name: 'brandAddress',
      title: 'Dirección de oficinas',
      type: 'string',
    },
    {
      name: 'brandAddressUrl',
      title: 'URL de Google Maps de las oficinas',
      type: 'string',
    },
    {
      name: 'footLogo',
      title: 'Logo de la empresa para el pie del sitio',
      type: 'image',
      options: {
          hotspot: true,
      },
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
          name: 'description',
          title: 'Descripción',
          type: 'blockContent',
        },
        {
          name: 'img',
          title: 'Imagen representativa de sección del formulario',
          type: 'image',
        },
      ]
    },
    {
      name: 'isoType',
      title: 'Iso tipo para el navegador',
      type: 'image',
      group: 'logo',
      options: {
          hotspot: true,
      },
    },
    {
      name: 'logoType',
      title: 'Logo tipo para el navegador mobile y ipad',
      type: 'image',
      group: 'logo',
      options: {
          hotspot: true,
      },
    },
  ]
}