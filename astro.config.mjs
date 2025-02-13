import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel';
import browserSync from 'vite-plugin-browser-sync';
// https://astro.build/config
export default defineConfig({
    site: 'https://papchenko.github.io',
    base: 'Redinherd',
    // site: 'https://astrosite-4v23.vercel.app/',
    build: {
        format: "file",
    },
    output: "static",
    // output: 'server',
    // adapter: vercel(),
    vite: {
        plugins: [
          browserSync({
            open: false,
            host: '0.0.0.0',
            port: 3000,
            proxy: 'http://localhost:3000',
          }),
        ],
      },
});
