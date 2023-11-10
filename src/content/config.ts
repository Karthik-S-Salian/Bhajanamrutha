import { z, defineCollection } from 'astro:content';

const bhajanCollection = defineCollection({
  type: 'data',
  schema: z.object({
    kannada_title: z.string(),
    english_title: z.string(),
    kannada: z.array(z.array(z.string())),
    english: z.array(z.array(z.string())),
    meta: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    tag: z.array(z.string()).optional(),
    media: z.string().optional()
  }),
});

export const collections = {
  'bhajan': bhajanCollection,
};