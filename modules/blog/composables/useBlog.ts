import { useState } from '#app'

export const useBlog = () => {
  const blogPostId = useState('blog-post-id', () => 15555)

  return {
    blog: `Test blog post trololo ${blogPostId.value}`
  }
}
