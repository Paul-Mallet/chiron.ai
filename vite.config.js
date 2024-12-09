import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Permet d'accéder depuis d'autres appareils si nécessaire
    hmr: true, // Active le HMR
  },
});