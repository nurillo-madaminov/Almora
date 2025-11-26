<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import LoaderComponent from './components/LoaderComponent.vue'

const isLoading = ref(true)
let loadHandler = null
let fallbackTimer = null

onMounted(() => {
  
  loadHandler = () => {
    // small delay so the fade is visible
    setTimeout(() => {
      isLoading.value = false
    }, 150)
  }
  window.addEventListener('load', loadHandler)
  // fallback: hide loader after 8s if load doesn't fire
  fallbackTimer = setTimeout(() => {
    isLoading.value = false
  }, 8000)
})

onUnmounted(() => {
  window.removeEventListener('load', loadHandler)
  if (fallbackTimer) clearTimeout(fallbackTimer)
})
</script>

<template>
  <loader-component v-if="isLoading" />

  <transition name="fade">
    <div v-if="!isLoading" class="min-h-screen flex flex-col">
      <navbar-component />
      <div class="pt-18 flex-1">
        <RouterView />
      </div>
      <footer-component />
    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
