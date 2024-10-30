// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://weridfire.github.io',
  base: 'Human-Computer-Interaction',
  integrations: [tailwind(), mdx(), react()]
});