import LiveTrades from '../views/LiveTrades/index.vue'
import History from '../views/History/index.vue'

const app = [
  {
    path: '/',
    name: 'live',
    component: LiveTrades,
    meta: {
      title: 'Live Trades | Alphaedge'
    }
  },
  {
    path: '/history',
    name: 'history',
    component: History,
    meta: {
      title: 'History | Alphaedge'
    }
  }
]

export { app }
