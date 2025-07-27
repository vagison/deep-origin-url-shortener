/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      port: parseInt(env.VITE_FRONTEND_PORT) || 3000
    },
    preview: {
      port: parseInt(env.VITE_FRONTEND_PORT) || 3000,
      host: '0.0.0.0'
    },
    plugins: [
      react(),
      visualizer({
        filename: './bundle-visualizer.html',
        template: 'treemap',
        open: true
      })
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const match = id.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              if (!match) return;

              const packageName = match[1];
              return `npm.${packageName.replace('@', '')}`; // Use package name as chunk name
            }
          },
          chunkFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  };
});
