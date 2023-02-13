import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BlogPost from '../../components/BlogPost.vue'
// import { expect, test } from "vitest";
describe('testing our module BlogPost component', () => {
  it('mount component', async () => {
    expect(BlogPost).toBeTruthy()

    const wrapper = await mount(BlogPost, {
      props: {
        blog: 'Some blog text'
      }
    })
    expect(wrapper.text()).toContain('Some blog text')
  })
})
