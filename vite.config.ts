import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/TypeScript-Quest/',
  plugins: [
    react(),
  ],
  assetsInclude: ['**/*.md'],
  optimizeDeps: {
    include: ['shiki'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
