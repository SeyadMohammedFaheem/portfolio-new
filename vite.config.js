import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin to load output CSS asynchronously to prevent render blocking
function asyncCSSPlugin() {
  return {
    name: 'async-css-plugin',
    transformIndexHtml(html) {
      // Matches both standard <link rel="stylesheet"> and <link rel="stylesheet" crossorigin>
      return html.replace(
        /<link rel="stylesheet"\s*(crossorigin)?\s*href="([^"]+)">/g,
        (match, crossorigin, href) => {
          return `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
        }
      );
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), asyncCSSPlugin()],
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

