<script setup>
import { onMounted, ref } from 'vue'
import { useProductsStore } from '@/stores/handleProducts'
const store = useProductsStore()

const totalPrice = store.readOnlyCart.reduce((x, y) => {
  return (x + y.subtotal)
}, 0)

onMounted(() => {
  store.getProducts()
  // console.log(store.readOnlyCart)
  console.log(totalPrice)
})
</script>

<template>
  <div>
    <div v-if="store.cartItems.length" class="px-4">
      <div
        v-for="cartItem in store.readOnlyCart"
        class="flex justify-between items-center border-b border-neutral-200 py-5"
      >
        <div class="w-20 h-20 mr-4 bg-neutral-400 rounded-lg"></div>
        <div class="flex-1">
          <div>
            <h2 class="font-bold">{{ cartItem.name }}</h2>
            <p>{{ cartItem.unitPrice }} $</p>
          </div>
        </div>
        <div class="flex flex-col items-end gap-4">
          <div class="flex gap-2">
            <div class="w-8 h-8 rounded-full border border-neutral-500 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"
                />
              </svg>
            </div>
            <span class="text-xl">{{ cartItem.amount }}</span>
            <div class="w-8 h-8 rounded-full border border-neutral-500 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"
                />
              </svg>
            </div>
          </div>
          <div
            class="w-23 h-8 rounded-full border p-2 flex justify-center items-center border-red-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4" fill="red">
              <path
                d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <div class="text-white rounded overflow-hidden">
          <div
            class="flex items-center justify-between px-8 py-3 bg-blue-300 border-b border-white"
          >
            <h3>Items amount:</h3>
            <p>{{totalPrice}}$</p>
          </div>
          <div class="flex items-center justify-between px-8 py-3 bg-blue-300">
            <h3>Discount:</h3>
            <p>0$</p>
          </div>
          <div
            class="flex items-center justify-between px-8 py-5 bg-blue-500 text-xl font-semibold border-t border-white"
          >
            <h3>Total amount:</h3>
            <p>{{totalPrice}}$</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="h-[50vh] flex items-center justify-center flex-col text-neutral-800">
      <h1 class="text-5xl font-bold mb-3">¯\_(ツ)_/¯</h1>
      <p>No products yet</p>
      <p></p>
    </div>
  </div>
</template>
