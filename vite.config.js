import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.tsx',
      ssr: 'resources/js/ssr.tsx',
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: [
      { find: '#apis', replacement: '/resources/js/apis' },
      { find: '#app', replacement: '/resources/js/app' },
      { find: '#aws', replacement: '/resources/js/aws' },
      { find: '#assets', replacement: '/resources/js/assets' },
      { find: '#commons', replacement: '/resources/js/commons' },
      { find: '#components', replacement: '/resources/js/components' },
      { find: '#contexts', replacement: '/resources/js/contexts' },
      { find: '#hooks', replacement: '/resources/js/hooks' },
      { find: '#mocks', replacement: '/resources/js/mocks' },
      { find: '#layouts', replacement: '/resources/js/layouts' },
      { find: '#libs', replacement: '/resources/js/libs' },
      { find: '#pages', replacement: '/resources/js/pages' },
      { find: '#prisma', replacement: '/resources/js/prisma' },
      { find: '#public', replacement: '/resources/js/public' },
      { find: '#stores', replacement: '/resources/js/stores' },
      { find: '#queries', replacement: '/resources/js/queries' },
      { find: '#styles', replacement: '/resources/js/styles' },
      { find: '#types', replacement: '/resources/js/types' },
      { find: '#ui', replacement: '/resources/js/ui' },
      { find: '#utils', replacement: '/resources/js/utils' },
    ],
  },
});
