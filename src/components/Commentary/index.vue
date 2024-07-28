<template>
  <div class="commentary">
    <div class="live-commentary">
      <transition-group name="roller" tag="div" class="trade-list">
        <div
          v-for="(trade, index) in trades"
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
import { storeToRefs } from 'pinia'
import { useTradesStore } from '@/stores/trades'

const tradesStore = useTradesStore()
const { trades } = storeToRefs(tradesStore)
</script>

<style scoped>
@import './index.css';
</style>
