<script setup>
import ProductCard from './ProductCard.vue'

const props = defineProps(['title', "products"])
</script>

<template>
  <div>
    <h1 class="ml-3 mb-1 text-xl font-semibold">{{props.title}}</h1>
    <div class="grid grid-cols-2 gap-2 px-2 mb-5">
      <product-card v-for="product in products" :key="product" :name="product.name" :price="product.price" />
    </div>
  </div>
</template>
