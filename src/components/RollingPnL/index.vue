<template>
  <span :class="{ value: true, green: pnl > 0, red: pnl < 0 }">{{ formattedPnl }}</span>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useTradesStore } from '@/stores/trades'

const tradesStore = useTradesStore()

const pnl = ref(0)
const lastPnl = ref(0)

watch(tradesStore.trades, (newTrades) => {
  const newPnl = calculatePNL(newTrades)

  rollPNL(lastPnl.value, newPnl)
  lastPnl.value = newPnl
})

const calculatePNL = (trades) => {
  const pnl = trades.reduce((total, trade) => total + trade.pnl, 0)
  return Math.round((pnl + Number.EPSILON) * 100) / 100
}

const rollPNL = (oldPnl, newPnl) => {
  const direction = newPnl >= oldPnl ? 1 : -1

  const oldDigits = Array.from(Math.abs(oldPnl).toString())
  const newDigits = Array.from(Math.abs(newPnl).toString())

  while (oldDigits.length < newDigits.length) {
    oldDigits.unshift('0')
  }

  oldDigits.forEach((oldDigit, index) => {
    if (oldDigit !== newDigits[index]) {
      rollDigit(oldDigit, newDigits[index], index, direction)
    }
  })
}

const rollDigit = (oldDigit, newDigit, index, direction) => {
  const digitElement = document.querySelector(`.value:nth-child(${index + 1})`)
  const step = direction * 1

  const rollInterval = setInterval(() => {
    const currentDigit = parseInt(digitElement.textContent)
    if (
      (direction === 1 && currentDigit >= parseInt(newDigit)) ||
      (direction === -1 && currentDigit <= parseInt(newDigit))
    ) {
      clearInterval(rollInterval)
      return
    }
    digitElement.textContent = currentDigit + step
  }, 50)
}

const formattedPnl = computed(() => {
  return pnl.value.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
})
</script>

<style scoped>
@import './index.css';
</style>
