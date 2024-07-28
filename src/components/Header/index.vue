<template>
  <header class="header">
    <div class="logo">
      <img :src="AppLogo" />
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

import AppLogo from '../../assets/icons/logo.svg'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
@import './index.css';
</style>
