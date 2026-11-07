import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lucascockerham.com',
  integrations: [sitemap()],
  output: 'static',
  // Astro 7 changed the default to 'jsx', which strips whitespace between
  // inline elements (e.g. "Journal • Giantsbane" -> "Journal•Giantsbane").
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
