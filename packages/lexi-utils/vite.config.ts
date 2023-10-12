import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import myVitePlugin from './build/product'
import createDoc from './build/createDoc'

export default defineConfig((config) => {
  return {
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'lexi-utils',
        formats: ['es', 'umd'],
      },

      rollupOptions: {
        // Make sure to externalize dependencies
        external: ['vue'],
        plugins: [
          dts({
            outDir: 'dist/types',
          }),
          myVitePlugin(config),
        ],
        output: {
          // Provide global variables to use in the UMD build
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  };
});
