import { createRouter, createWebHistory } from 'vue-router'

import { app } from './appRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...app]
})

router.beforeEach((to, from) => {
  document.title = to.meta.title || import.meta.env.DEFAULT_TITLE
})

export default router
