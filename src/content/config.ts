import { defineCollection, z } from 'astro:content';

const obrasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // SOLO 3 campos ABSOLUTAMENTE necesarios
    id: z.string().default('obra-' + Date.now()),
    titulo: z.string().default('Sin título'),
    
    // TODO lo demás es OPCIONAL y SIN restricciones
    autor: z.string().default('Anónimo').optional(),
    fecha: z.any().optional(),
    tipo: z.string().optional(),
    contenido: z.string().optional(),
    
    // Publicación básica
    publicado: z.boolean().default(true).optional(),
    
    // NADA MÁS. Sin region, sin epoca, sin dificultad, sin temas_principales
  })
});

const temasCollection = defineCollection({
  type: 'content',
  schema: z.object({})
});

export const collections = {
  'obras': obrasCollection
};