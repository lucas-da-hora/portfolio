import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Agora sim, com a barra correta na importação acima!
  site: 'https://lucas-da-hora.github.io',
  base: '/portfolio',
  trailingSlash: 'always'
});