import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  minify: true,
  clean: true,
  tsconfig: 'tsconfig.build.json'
})