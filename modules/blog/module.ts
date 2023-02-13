import { defineNuxtModule } from '@nuxt/kit'
// import { resolve, join } from 'pathe'
import type { Nuxt } from '@nuxt/schema'
import { registerLocaleRoutes } from '../../services/moduleRegister/register'
import { routes } from './routes'
export default defineNuxtModule({
  meta: {
    name: 'blog-module',
    configKey: 'blog-module'
  },
  setup (_: any, nuxt: Nuxt) {
    // Auto register components
    // these are module components, so in my opinion we don't need to register them globally to prevent their usage outside the module
    // nuxt.hook('components:dirs', (dirs) => {
    //   dirs.push({
    //     path: join(__dirname, 'components')
    //   })
    // })

    // !!! this hook doesn't fire, so I added json for in locales dir and added it via <i18n> component on pages
    // nuxt.hook('i18n:extend-messages', async function (additionalMessages) {
    //   console.log('tell something here sssssssssss')
    //   await additionalMessages.push({
    //     en: {
    //       blog: {
    //         hellohello: 'Hello from external module'
    //       }
    //     },
    //     blog: { hellohello: 'Simple hello' },
    //     fr: {
    //       blog: {
    //         hellohello: 'Bonjour depuis le module externe'
    //       }
    //     }
    //   })
    // })
    // Auto register composables, these are module composables, so in my opinion we don't need to register them globally
    // nuxt.hook('imports:dirs', (dirs) => {
    //   dirs.push(resolve(__dirname, './composables'))
    // })

    // Register pages
    nuxt.hook('pages:extend', (pages) => {
      registerLocaleRoutes(routes, pages, __dirname)
    })

    // Pinia store modules are auto imported
  }
})
