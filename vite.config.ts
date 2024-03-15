/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import svgr from 'vite-plugin-svgr';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    svgr({
      include: ['**/*.svg?react', '**/*.svg'],
    }),
    react(),
  ],
  base: '/SpaceXplorer/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "assets/styles/variables.scss"; 
          @import "assets/styles/mixins.scss"; 
        `,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        'assets',
        '**/*.cjs',
        '**/index.*',
        '**/RoutesMap.tsx',
        'src/CONSTANTS.ts',
        'src/ROUTES.ts',
        'src/core/**',
        'src/App.tsx',
        'src/Router.tsx',
        'src/main.tsx',
      ],
    },
  },
  resolve: {
    alias: {
      src: path.resolve('./src', ''),
      CONSTANTS: path.resolve('./src/', 'CONSTANTS.ts'),
      ROUTES: path.resolve('./src/', 'ROUTES.ts'),
      assets: path.resolve('./src/', 'assets'),
      components: path.resolve('./src/', 'components'),
      core: path.resolve('./src/', 'core'),
      hooks: path.resolve('./src/', 'hooks'),
      utils: path.resolve('./src/', 'utils'),
    },
  },
}));
