
const i18nOptions = {
  locales: [
    {
      code: 'en',
      file: 'en-US.json',
      name: 'English'
    },
    {
      code: 'fr',
      file: 'fr-FR.json',
      name: 'Francais'
    }
  ],
  lazy: true,
  langDir: 'locales',
  strategy: 'prefix_except_default',
  defaultLocale: 'en', // default locale of your project for Nuxt pages and routings
  vueI18n: {
    legacy: false
  }
}

export default i18nOptions
