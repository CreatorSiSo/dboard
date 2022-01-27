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
      $types: path.resolve(__dirname, './src/types'),
      $components: path.resolve(__dirname, './src/components'),
      $assets: path.resolve(__dirname, './src/assets'),
      $public: '/',
    },
  },
});
