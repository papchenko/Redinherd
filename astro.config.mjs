import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://redinherd.vercel.app',
  output: 'server',
  adapter: vercel(),
});