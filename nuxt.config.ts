import eslintPlugin from 'vite-plugin-eslint'
import { NuxtI18nOptions } from '@nuxtjs/i18n/dist/types'
import i18nOptions from './i18n.config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '~/modules/blog/module'
  ],
  i18n: i18nOptions as NuxtI18nOptions,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      defaultLocale: 'en'
    }
  },
  typescript: {
    shim: false
  },
  vite: {
    plugins: [
      eslintPlugin({
        emitWarning: true,
        emitError: true
      })
    ]
  }
})
