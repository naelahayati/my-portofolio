import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'resources/js/assets', filename)
      }
    },
  }
}

export default defineConfig({
    base: '/my-portofolio/',
    plugins: [
        react(),
        tailwindcss(),
        figmaAssetResolver(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
    assetsInclude: ['**/*.svg', '**/*.csv'],
});
