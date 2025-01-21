import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is correctly set
  },
  server: {
    historyApiFallback: true, // Add this to enable fallback to index.html
  },
  preview: {
    historyApiFallback: true, // Enable fallback for preview
  },
});
