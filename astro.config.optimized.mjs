// Optimized Astro config for performance
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

export default defineConfig({
  // Performance optimizations
  build: {
    format: 'file',
    assets: 'static',
  },
  
  // Enable compression
  compressHTML: true,
  
  // Image optimization
  image: {
    domains: ['certifly.tech'],
  },
  
  // Vite optimizations
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Split vendor chunks for better caching
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
              return 'vendor';
            }
          },
        },
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    css: {
      postcss: './postcss.config.js',
    },
  },
  
  // Partytown for third-party scripts (optional)
  // integrations: [partytown()],
});
