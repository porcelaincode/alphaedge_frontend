// src/services/websocketService.js
import { ref } from 'vue'
import { useTradesStore } from '../stores/trades'
import { generateTrade } from './mock-updates'

const socket = ref(null)

export function connectWebSocket() {
  const tradesStore = useTradesStore()
  console.log('import.meta.env.WEBSOCKET_BASE_URL: ', import.meta.env.VITE_APP_WEBSOCKET_BASE_URL)

  socket.value = new WebSocket(import.meta.env.VITE_APP_WEBSOCKET_BASE_URL)

  socket.value.onopen = () => {
    console.log('WebSocket connection opened')
    tradesStore.isConnected = true
  }

  socket.value.onmessage = (event) => {
    const data = JSON.parse(event.data)
    tradesStore.addTrade(data)
  }

  socket.value.onclose = () => {
    console.log('WebSocket connection closed')
    tradesStore.isConnected = false
  }

  socket.value.onerror = (error) => {
    console.error('WebSocket error:', error)
  }

  setInterval(() => {
    const trade = generateTrade()
    tradesStore.addTrade(trade)
  }, 2000)
}

export function disconnectWebSocket() {
  if (socket.value) {
    socket.value.close()
  }
}
