// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://hzihimel.github.io',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true },
  // Classic whitespace collapsing keeps spaces between text and inline links.
  compressHTML: true,
});
