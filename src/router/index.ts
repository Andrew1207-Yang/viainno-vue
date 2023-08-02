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
      path: '/en/products/homego',
      name: 'homego-en',
      component: () => import("../views/HomeGoEn.vue")
    },
    {
      path: '/products/spacesgo',
      name: 'spacesgo',
      component: () => import("../views/SpacesGo.vue")
    },
    {
      path: '/en/products/spacesgo',
      name: 'spacesgo-en',
      component: () => import("../views/SpacesGoEn.vue")
    },
  ]
})

export default router
