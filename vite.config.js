import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/RefactorCC/',
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    cssCodeSplit: true,
    cssMinify: 'esbuild',
    minify: 'esbuild',
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
    sourcemap: false,
    target: 'es2020',
  },
});
