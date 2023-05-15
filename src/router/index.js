import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
       component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    // Spanish
    {
      path: '/spanish',
      name: 'spanish',
      component: () =>
      import('../views/PostsViews/SpanishPostsViews/MainView.vue')
    },
    {
      path: '/spanish/001',
      name: 'the-eight-most-used-verbs-in spanish',
      component: () =>
      import('../views/PostsViews/SpanishPostsViews/SpanishPostView001.vue')
    },
  ]
})

export default router
