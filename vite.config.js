import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    base: '/WatchCharm/', // важливо для GitHub Pages
    root: 'src',
    build: {
      sourcemap: true,
      outDir: '../dist',
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'assets/[name].[hash].js', // стандартний варіант
        },
      },
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
    define: {
      global: {}, // без умовного хаку
    },
  };
});