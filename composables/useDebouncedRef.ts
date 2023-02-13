export function useDebouncedRef (value: string|number|boolean, delay = 200) {
  let timeoutId: string | number | NodeJS.Timeout | undefined
  return customRef((track, trigger) => {
    return {
      get () {
        track()
        return value
      },
      set (newValue) {
        if (timeoutId) { clearTimeout(timeoutId) }
        timeoutId = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
