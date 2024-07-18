<template>
  <header class="header">
    <div class="logo">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.5 3.5V6.5" stroke="white" stroke-linecap="round" />
        <path d="M7.5 14.5V18.5" stroke="white" stroke-linecap="round" />
        <path
          d="M6.8 6.5C6.08203 6.5 5.5 7.08203 5.5 7.8V13.2C5.5 13.918 6.08203 14.5 6.8 14.5H8.2C8.91797 14.5 9.5 13.918 9.5 13.2V7.8C9.5 7.08203 8.91797 6.5 8.2 6.5H6.8Z"
          stroke="white"
        />
        <path d="M16.5 6.5V11.5" stroke="white" stroke-linecap="round" />
        <path d="M16.5 16.5V20.5" stroke="white" stroke-linecap="round" />
        <path
          d="M15.8 11.5C15.082 11.5 14.5 12.082 14.5 12.8V15.2C14.5 15.918 15.082 16.5 15.8 16.5H17.2C17.918 16.5 18.5 15.918 18.5 15.2V12.8C18.5 12.082 17.918 11.5 17.2 11.5H15.8Z"
          stroke="white"
        />
      </svg>
    </div>

    <button class="menu-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="navigation" :class="{ active: isMenuOpen }">
      <RouterLink to="/" class="nav-item" :class="{ active: $route.path === '/' }">Live</RouterLink>
      <RouterLink to="/history" class="nav-item" :class="{ active: $route.path === '/history' }"
        >History</RouterLink
      >
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
@import './index.css';
</style>
