<script setup>
import { watch, ref } from 'vue'

// external actions
import { isVisible, productId, toggleModal } from '@/composables/globalFunctions'
import { useProductsStore } from '@/stores/fetchProducts' //store needed to get the info of single product which is clicked
const store = useProductsStore()

const product = ref([])

// when isVisible is true,'product' is declared based on the productId
watch(isVisible, () => {
  if (isVisible.value == true) product.value = store.getProductById(productId.value)
  else return
})
</script>
<template>
  >
  <Teleport to="body" v-if="isVisible">
    <div class="fixed top-0 z-99999 w-full h-full bg-[#fdeeee] overflow-auto">
      <div class="flex justify-end p-4">
        <div @click="() => toggleModal()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
      <div class="px-2">
        <h1>{{ product.name }}</h1>
      </div>
    </div>
  </Teleport>
</template>
