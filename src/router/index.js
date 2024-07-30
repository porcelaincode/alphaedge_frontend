import { createRouter, createWebHistory } from 'vue-router'

import { app } from './appRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: [...app]
})

router.beforeEach((to, from) => {
  document.title = to.meta.title || import.meta.env.VITE_APP_DEFAULT_TITLE
})

export default router
