<template>
  <div class="live-stats">
    <div class="stat">
      <span class="label">PNL</span>
      <span class="value">{{ pnl }}</span>
    </div>
    <div class="stat">
      <span class="label">Active Trades</span>
      <span class="value">{{ activeTrades }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useTradesStore } from '@/stores/trades'

const tradesStore = useTradesStore()

const pnl = ref(0)
const activeTrades = ref(0)

watch(tradesStore.trades, (trades) => {
  pnl.value = calculatePNL(trades)
  activeTrades.value = trades.length
})

const calculatePNL = (trades) => {
  const pnl = trades.reduce((total, trade) => total + trade.pnl, 0)
  return Math.round((pnl + Number.EPSILON) * 100) / 100
}
</script>

<style scoped>
@import './index.css';
</style>
