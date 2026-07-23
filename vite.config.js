import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/experimentos-threejs/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        experimento001: resolve(
          __dirname,
          'experimentos/001-doble-cubo/index.html'
        ),
      },
    },
  },
});