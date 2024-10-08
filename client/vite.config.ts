import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
      '/signup': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
      '/external': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
      '/drinks': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      },
    },
  },
});
