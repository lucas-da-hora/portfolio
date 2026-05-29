import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projetos" }),
  schema: z.object({
    titulo: z.string(),
    resumoCard: z.string(), // O texto curto que aparece no card da Home
    desafio: z.string(),
    abordagem: z.string(),
    resultados: z.string(),
    competencias: z.array(z.string()),
    // Deixamos preparados os campos de mídias para o futuro
    dashboardUrl: z.string().optional(),
    videoUrl: z.string().optional(),
  }),
});

export const collections = { projetos };