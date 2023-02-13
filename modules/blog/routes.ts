export const routesObj = {
  index: {
    name: 'index',
    path: '/',
    file: './pages/home.vue',
    params: undefined
  },
  blogPage: {
    name: 'blogPage',
    path: '/blog/:id',
    file: './pages/[id].vue',
    params: { id: 'id' }
  }
} as const

export const routes = Object.values(routesObj)
