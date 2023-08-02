import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/IndexView.vue")
    },
    {
      path: '/products/homego',
      name: 'homego',
      component: () => import("../views/HomeGo.vue")
    },
    {
      path: '/products/spacesgo',
      name: 'spacesgo',
      component: () => import("../views/SpacesGo.vue")
    },
  ]
})

export default router
