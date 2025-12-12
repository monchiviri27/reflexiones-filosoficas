import { defineCollection, z } from 'astro:content';

// Definir los 20 temas
export const temas = [
  'tiempo-eternidad',
  'identidad-memoria',
  'realidad-sueno',
  'muerte-transcendencia',
  'vida-existencia',
  'lenguaje-significado',
  'soledad-comunidad',
  'destino-liber-albedrio',
  'belleza-arte',
  'amor-dolor',
  'infinito-limites',
  'etica-moral',
  'conocimiento-verdad',
  'libertad-responsabilidad',
  'naturaleza-humano',
  'dios-sagrado',
  'sufrimiento-resignificacion',
  'poder-justicia',
  'tecnologia-humanidad',
  'silencio-vacio'
] as const;

// Colección de obras literarias
const obrasCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.string(),
    titulo: z.string(),
    autor: z.string(),
    fecha: z.date(),
    tipo: z.enum(['poema', 'cuento', 'ensayo', 'microficcion']),
    temas_principales: z.array(z.enum(temas)).min(1).max(3),
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

// Colección de autores
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

// Colección de temas (páginas descriptivas de cada tema)
const temasCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    id: z.enum(temas),
    titulo: z.string(),
    descripcion: z.string(),
    icono: z.string(), // Nombre del icono de lucide
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