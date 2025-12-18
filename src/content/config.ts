import { defineCollection, z } from 'astro:content';

// Colección de obras literarias - VERSIÓN SIMPLIFICADA
const obrasCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string(),
    titulo: z.string(),
    autor: z.string(),
    fecha: z.date(),
    tipo: z.enum(['poema', 'cuento', 'ensayo', 'microficcion']),
    // CAMBIO CRUCIAL: Ahora acepta cualquier string, no solo 20 temas fijos
    temas_principales: z.array(z.string()).min(1).max(3), // <- ELIMINADO .default(['filosofia'])
    temas_secundarios: z.array(z.string()).optional().default([]),
    resumen: z.string().max(200),
    imagen: image().optional(),
    cita_destacada: z.string().optional(),
    epoca: z.enum(['antigua', 'medieval', 'moderna', 'contemporanea']).optional(),
    region: z.enum(['occidental', 'oriental', 'latinoamericana', 'otra']).optional(),
    dificultad: z.enum(['introductorio', 'intermedio', 'avanzado']).default('intermedio'),
    publicado: z.boolean().default(true),
    orden: z.number().default(0),
  })
});

// Colección de autores (puede estar vacía)
const autoresCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string(),
    nombre: z.string(),
    epoca: z.string(),
    nacionalidad: z.string(),
    biografia: z.string(),
    imagen: image().optional(),
    obras_destacadas: z.array(z.string()).optional(),
  })
});

// Colección de temas (OPCIONAL - puedes eliminarla si quieres)
const temasCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string(),
    titulo: z.string(),
    descripcion: z.string(),
    icono: z.string(),
    color: z.string(),
    preguntas: z.array(z.string()).optional(),
    autores_relacionados: z.array(z.string()).optional(),
    obras_destacadas: z.array(z.string()).optional(),
  })
});

export const collections = {
  'obras': obrasCollection,
  'autores': autoresCollection,
  'temas': temasCollection,
};