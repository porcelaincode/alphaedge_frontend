<template>
  <div class="container">
    <div class="widget">
      <span :class="props.active ? 'status active' : 'status inactive'" />
      <span class="text">{{ props.active ? 'Active' : 'Inactive' }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>
@import './index.css';
</style>
