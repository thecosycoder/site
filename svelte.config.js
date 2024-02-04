import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $src: 'src',
      $components: 'src/lib/components',
      $blog: 'src/routes/blog'
    }
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      highlight: {
        alias: { js: 'javascript' }
      }
    })
  ],
  extensions: ['.svelte', '.md']
};

export default config;
