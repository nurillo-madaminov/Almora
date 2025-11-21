<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
  <navbar-component/>
  <div class="pt-18">
    <RouterView />
  </div>
  <footer-component/>
</template>
