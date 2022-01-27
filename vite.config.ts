import { defineConfig } from 'vite';
import path from 'node:path';

// Plugins
import vue from '@vitejs/plugin-vue';
import { VitePlugin as typscriptChecker } from 'vite-esbuild-typescript-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typscriptChecker({
      vite: {
        overlay: true,
      },
      checker: {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: '@vue/compiler-sfc',
            },
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      $: path.resolve(__dirname, './src'),
      $assets: path.resolve(__dirname, './src/assets'),
      $components: path.resolve(__dirname, './src/components'),
      $router: path.resolve(__dirname, './src/router'),
      $types: path.resolve(__dirname, './src/types'),
      $views: path.resolve(__dirname, './src/views'),
      $public: '/',
    },
  },
});
