import { createRouter, createWebHistory } from 'vue-router'

import LiveTrades from '../views/LiveTrades/index.vue'
import History from '../views/History/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'live',
      component: LiveTrades
    },
    {
      path: '/history',
      name: 'history',
      component: History
    }
  ]
})

export default router
