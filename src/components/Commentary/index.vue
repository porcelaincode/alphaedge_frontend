<template>
  <div class="commentary">
    <div class="live-commentary">
      <transition-group name="roller" tag="div" class="trade-list">
        <div
          v-for="(trade, index) in recentTrades"
          :key="trade.timestamp"
          class="trade-item"
          :class="{ fade: index < trades.length - 5 }"
        >
          <span class="timestamp">[{{ trade.timestamp }}]</span>
          <span>{{ trade.text }}</span>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useTradesStore } from '@/stores/trades'

const tradesStore = useTradesStore()

const trades = ref([])

watch(
  () => tradesStore.trades,
  (newTrades) => {
    trades.value = newTrades
  },
  { immediate: true, deep: true }
)

const recentTrades = computed(() => {
  return trades.value.slice(-5)
})
</script>

<style scoped>
@import './index.css';
</style>
