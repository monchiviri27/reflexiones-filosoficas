import { defineCollection, z } from 'astro:content';

const obrasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // SOLO esto, NADA más
    titulo: z.string().default('Sin título'),
    autor: z.string().default('Anónimo'),
    publicado: z.boolean().default(true),
  })
});

export const collections = {
  'obras': obrasCollection
};