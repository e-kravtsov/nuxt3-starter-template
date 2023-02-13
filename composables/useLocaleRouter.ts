import type { RouteLocationRaw } from 'vue-router'
import { allRoutes } from '~~/services/routes'

type MutableString<T> = {
  -readonly [P in keyof T]: string;
};

type RouteKeys = keyof typeof allRoutes

type RouterParams<T extends RouteKeys> = MutableString<(typeof allRoutes)[T]['params']>

export const useLocaleRouter = () => {
  const { locale } = useI18n()
  const router = useRouter()
  const generateLinkObject = <T extends RouteKeys, R extends RouterParams<T>>(name: T, params?:R): RouteLocationRaw => {
    return { name: `${allRoutes[name].name}___${locale.value}`, params }
  }

  const goToRoute = <T extends RouteKeys, R extends RouterParams<T>>(name: T, params?:R): void => {
    router.push(generateLinkObject(name, params))
  }

  return {
    generateLinkObject,
    goToRoute
  }
}
