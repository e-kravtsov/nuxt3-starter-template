import { resolve } from 'pathe'
import { NuxtPage } from '@nuxt/schema/dist/index'
import i18nOptions from '../../i18n.config'

export const registerLocaleRoutes = (
  routes: Array<Required<Pick<NuxtPage, 'name'|'path'|'file'>>>,
  pages: NuxtPage[],
  dirname: string
) => {
  i18nOptions.locales.forEach((locale) => {
    routes.forEach((route) => {
      pages.push({
        name: `${route.name}___${locale.code}`,
        // will add the path of /fr for langs different from default
        path: locale.code === i18nOptions.defaultLocale ? route.path : `/${locale.code}${route.path}`,
        file: resolve(dirname, route.file)
      })
    })
  })
}
