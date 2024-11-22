import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'LA-ESENCIA',

  projectId: 'qf6rvplj',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Empresa')
              .id('empresaAll')
              .child(
                S.list()
                  // Sets a title for our new list
                  .title('Ajustes para la empresa')
                  // Add items to the array
                  // Each will pull one of our new singletons
                  .items([
                    S.listItem()
                      .title('Datos de la Empresa')
                      .child(S.document().schemaType('empresa').documentId('empresa')),
                    S.listItem()
                      .title('Social Media')
                      .child(S.document().schemaType('social').documentId('social')),
                    S.listItem()
                      .title('Aviso de Privacidad')
                      .child(S.document().schemaType('aviso').documentId('aviso')),
                  ]),
              ),
            S.listItem()
              .title('Secciones')
              .id('sectionsAll')
              .child(
                S.list()
                  // Sets a title for our new list
                  .title('Ajustes para las secciones')
                  // Add items to the array
                  // Each will pull one of our new singletons
                  .items([
                    S.listItem()
                      .title('Inicio')
                      .id('home')
                      .child(S.document().schemaType('inicio').documentId('inicio')),
                    S.listItem()
                      .title('Experiencia')
                      .id('experiencia')
                      .child(S.document().schemaType('experiencia').documentId('experiencia')),
                    S.listItem()
                      .title('Resorts')
                      .id('resorts')
                      .child(S.document().schemaType('resorts').documentId('resorts')),
                    S.listItem()
                      .title('Ubicación')
                      .id('ubicacion')
                      .child(S.document().schemaType('ubicacion').documentId('ubicacion')),
                    S.listItem()
                      .title('Fundadores')
                      .id('socios')
                      .child(S.document().schemaType('socios').documentId('socios')),
                    S.listItem()
                      .title('Artículos')
                      .id('blog')
                      .child(S.document().schemaType('blog').documentId('blog')),
                    S.listItem()
                      .title('Contacto')
                      .id('contacto')
                      .child(S.document().schemaType('contacto').documentId('contacto')),
                    S.listItem()
                      .title('Miembros')
                      .id('gracias')
                      .child(S.document().schemaType('gracias').documentId('gracias')),
                  ]),
              ),

            // Crea un nuevo grupo llamado "Productos"
            S.listItem()
              .title('Lista de artículos de blog')
              .child(
                S.list()
                  .title('Gestión de artículos')
                  .items([
                    S.listItem()
                      .title('Artículos')
                      .schemaType('post') // Asegúrate de que 'product' corresponde al nombre del schema en tu esquema de productos
                      .child(S.documentTypeList('post').title('Artículos')),
                    S.listItem()
                      .title('Categorías')
                      .schemaType('post-category') // Asegúrate de que 'category' corresponde al nombre del schema en tu esquema de categorías
                      .child(S.documentTypeList('post-category').title('Categorías')),
                    S.listItem()
                      .title('Autores')
                      .schemaType('author') // Asegúrate de que 'category' corresponde al nombre del schema en tu esquema de categorías
                      .child(S.documentTypeList('author').title('Autores')),
                  ]),
              ),

            // We also need to remove the new singletons from the main list
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'inicio',
                  'blog',
                  'contacto',
                  'aviso',
                  'empresa',
                  'social',
                  'products',
                  'category',
                  'author',
                  'post',
                  'post-category',
                  'experiencia',
                  'ubicacion',
                  'resorts',
                  'socios',
                  'gracias'
                ].includes(listItem.getId()),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
