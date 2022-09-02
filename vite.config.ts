import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  // build: {
  //   rollupOptions: {
  //     plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
  //   },
  // },
  resolve: {
    alias: {
      path: 'path-browserify'
    }
  }
})
