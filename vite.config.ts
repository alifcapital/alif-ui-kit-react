/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import libCss from 'vite-plugin-libcss';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    react(),
    tsConfigPaths(),
    libCss()
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'AlifUiKitReact',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
          globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
          },
      },
    },
    cssCodeSplit: true,
    target: 'es2015'
  }
});
