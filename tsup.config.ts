import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.js'],
  dts: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
});