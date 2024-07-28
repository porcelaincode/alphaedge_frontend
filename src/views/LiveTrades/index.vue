<template>
  <div class="live">
    <ConnectionStatus :active="isConnected" />
    <Commentary class="left" />
    <Indicator class="center" :update="tradeUpdate" />
    <Stats class="right" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import Indicator from '@/components/Indicator/index.vue'
import Commentary from '@/components/Commentary/index.vue'
import Stats from '@/components/Stats/index.vue'
import ConnectionStatus from '@/components/ConnectionStatus/index.vue'

import { useTradesStore } from '@/stores/trades'

const tradesStore = useTradesStore()
const { isConnected } = storeToRefs(tradesStore)

const tradeUpdate = ref({})

watch(
  () => tradesStore.trades,
  () => {
    tradeUpdate.value = {}
  },
  { deep: true }
)
</script>

<style scoped>
@import './index.css';
</style>
