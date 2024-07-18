<template>
  <div class="indicator">
    <div class="line"></div>
    <div class="circle" :class="{ glowing: isGlowing }"></div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  update: Object
})

const isGlowing = ref(false)

const animateCircle = () => {
  isGlowing.value = true
  setTimeout(() => {
    isGlowing.value = false
  }, 1000)
}

watchEffect(() => {
  if (props.update) {
    animateCircle()
  }
})
</script>

<style scoped>
@import './index.css';
</style>
