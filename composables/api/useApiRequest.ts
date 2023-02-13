import { UseFetchOptions } from '#app'
import { KeyOfRes } from 'nuxt/dist/app/composables/asyncData'

export function useApiRequest<T> (
  url: string,
  successMessage?: string,
  errorMessage = 'Error occured'
) {
  const { success, error } = useToast()
  const config: UseFetchOptions<
  T extends void ? unknown : T,
  (res: T extends void ? unknown : T) => T extends void ? unknown : T,
  KeyOfRes<
    (res: T extends void ? unknown : T) => T extends void ? unknown : T
  >
> = {
  onResponseError () {
    error(errorMessage)
  },
  onRequestError (context) {
    if (context.error.name === 'AbortError') { return }
    error(errorMessage)
  },
  onResponse ({ response }) {
    if (response.ok) {
      if (successMessage) {
        success(successMessage)
      }
    }
  }
}

  return useBaseFetch<T>(url, config)
}
