import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/experimentos-threejs/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        experimento001: resolve(
          __dirname,
          'experimentos/001-doble-cubo/index.html'
        ),
        experimento002: resolve(
          __dirname,
          'experimentos/002-piso-triangulo/index.html'
        ),
      },
    },
  },
});