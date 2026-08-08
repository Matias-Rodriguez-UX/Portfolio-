import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Estas deprecaciones vienen de los parciales de Bootstrap 5.3, no de
        // nuestro SCSS. No hay nada que arreglar de este lado: se van cuando
        // saquemos Bootstrap en el rediseño.
        silenceDeprecations: [
          'import',
          'global-builtin',
          'if-function',
          'color-functions',
        ],
      },
    },
  },
  build: {
    // Se mantiene "build" en lugar del "dist" por defecto de Vite para no tocar
    // la configuración de deploy que ya existe en Vercel.
    outDir: 'build',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
});
