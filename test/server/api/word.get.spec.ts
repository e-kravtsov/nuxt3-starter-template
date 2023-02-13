import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'
describe('testing word apis', async () => {
  await setup({})
  it('word should be 4 letters long', async () => {
    const { word } = await $fetch('/api/word')
    expect(word.length).toBe(4)
  })
})
