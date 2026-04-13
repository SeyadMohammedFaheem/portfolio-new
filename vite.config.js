import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk warning limit (three.js + react-three are large by nature)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Rolldown (Vite 8) requires manualChunks to be a function
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-three';
            }
            if (id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('react')) {
              return 'vendor-react';
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('lenis')) {
              return 'vendor-lenis';
            }
          }
        },
      },
    },
    // Inline assets smaller than 4 KB to reduce HTTP requests
    assetsInlineLimit: 4096,
    target: 'esnext',
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
})
