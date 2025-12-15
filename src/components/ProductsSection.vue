<script setup>
import ProductCard from './ProductCard.vue'

const props = defineProps(['title', "products",])
</script>

<template>
  <div>
      <h1 class="ml-3 mb-1 text-xl font-semibold">{{props.title}}</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6 px-2 mb-5">
        <product-card v-for="product in products" :key="product" :name="product.name" :price="product.price" :id="product.id" />
      </div>
  </div>
</template>