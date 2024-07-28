// src/services/websocketService.js
import { ref } from 'vue'
import { useTradesStore } from '../stores/trades'
import { generateTrade } from './mock-updates'

const socket = ref(null)

export function connectWebSocket() {
  const tradesStore = useTradesStore()
  socket.value = new WebSocket('wss://your-websocket-url')

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
