<template>
  <div class="historic-trades">
    <table class="trades-table">
      <thead>
        <tr>
          <th class="header-cell">Symbol</th>
          <th class="header-cell">Trade ID</th>
          <th class="header-cell">Quantity</th>
          <th class="header-cell">Price</th>
          <th class="header-cell">Execution Date/Time</th>
          <th class="header-cell">Total Cost</th>
          <th class="header-cell">P/L</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="day in tradeBook">
          <tr class="date-row">
            <td colspan="6" class="date">
              {{ day.date }}
              <span :class="`pnl ${day.pnl > 0 ? 'profit' : 'loss'}`">
                {{ formatPnl(day.pnl) }}</span
              >
            </td>
            <td colspan="2" :class="{ profit: day.pnl > 0, loss: day.pnl <= 0 }">
              {{ formatPnl(day.pnl) }}
            </td>
          </tr>
          <tr v-for="trade in day.trades" :key="trade.tradeId" class="trade-row">
            <td>{{ trade.symbol }}</td>
            <td>{{ trade.tradeId }}</td>
            <td>{{ trade.quantity }}</td>
            <td>{{ trade.price }}</td>
            <td>{{ formatDateTime(trade.executionDateTime) }}</td>
            <td>{{ trade.totalCost }}</td>
            <td>{{ trade.pl }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import { useTradesStore } from '@/stores/trades'
import { storeToRefs } from 'pinia'

import { formatDateTime } from '@/utils/formatDate'

const tradeStore = useTradesStore()
const { getTradebook } = tradeStore
const { tradeBook } = storeToRefs(tradeStore)

onMounted(async () => {
  await getTradebook()
})

function formatPnl(pnl) {
  const formattedPnl = pnl.toFixed(2)
  return pnl > 0 ? `Rs ${formattedPnl}` : `Rs ${Math.abs(formattedPnl)}`
}
</script>

<style scoped>
@import './index.css';
</style>
