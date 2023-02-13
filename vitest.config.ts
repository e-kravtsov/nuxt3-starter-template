/*
 This config is used to provide auto-imports for components and composables as well as vue composables
*/
import { resolve } from 'path'
import fs from 'fs'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'

const NuxtTsConfig = (fs.readFileSync('./.nuxt/tsconfig.json')).toString()
const tsConfigFormated = JSON.parse(NuxtTsConfig
  .replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? '' : m))

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {}

Object.entries(tsConfigFormated.compilerOptions.paths as string[])
  .forEach(([key, value]) => {
    alias[key] = r(value[0])
  })

export default defineConfig({
  root: '.',
  esbuild: {
    tsconfigRaw: '{}'
  },
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router'
      ],
      dirs: [
        './composables',
        './components'
      ],
      dts: true
    })
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    deps: {
      inline: [/@nuxt\/test-utils-edge/]
    }
    // setupFiles: ['./plugins/some-plugin.ts']
  },
  resolve: {
    alias: {
      ...alias,
      '#imports': r('./.nuxt/imports.d.ts')
    }
  }
})
