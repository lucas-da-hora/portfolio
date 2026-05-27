import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // O Astro agora exige um loader para arquivos locais

const projetos = defineCollection({
  // O "glob" diz para o Astro procurar arquivos .md dentro de src/content/projetos/
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projetos" }),
  schema: z.object({
    titulo: z.string(),
    objetivo: z.string(),
    competencias: z.array(z.string()),
  }),
});

export const collections = { projetos };