<script setup>
import { RouterView } from 'vue-router'

import { onMounted, onUnmounted } from 'vue'
import { connectWebSocket, disconnectWebSocket } from '@/services/websocket'
import Header from '@/components/Header/index.vue'

onMounted(() => {
  connectWebSocket()
})

onUnmounted(() => {
  disconnectWebSocket()
})
</script>

<template>
  <Header />
  <RouterView />
</template>
