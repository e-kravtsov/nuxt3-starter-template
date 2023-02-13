import { describe, it, expect } from 'vitest'
import { setup } from '@nuxt/test-utils'
describe('testing useLocaleRouter', async () => {
  await setup({})
  it('should generate link object without params', () => {
    const name = 'index'
    const linkObject = useLocaleRouter().generateLinkObject(name)
    expect(linkObject).toMatchObject({ name: `${name}___en` })
  })
  it('should generate link object with params', () => {
    const name = 'blogPage'
    const params = { id: '342' }
    const linkObject = useLocaleRouter().generateLinkObject(name, params)
    expect(linkObject).toMatchObject({ name: `${name}___en`, params })
  })
})
