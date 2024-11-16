import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ["cjs", "esm"],
  splitting: true,
  cjsInterop : true,
  dts: true,
  minify: true
})