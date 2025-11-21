<script setup>
import { watch, ref } from 'vue'

// external actions
import { isVisible, productId, toggleModal } from '@/composables/globalFunctions'
import { useProductsStore } from '@/stores/fetchProducts' //store needed to get the info of single product which is clicked
const store = useProductsStore()

const product = ref([])

// when isVisible is true,'product' is declared based on the productId
watch(isVisible, () => {
  if (isVisible.value == true) {
    product.value = store.getProductById(productId.value)
    console.log(product.value)
  } else return
})
</script>
<template>
  <Teleport to="body" v-if="isVisible">
    <div class="fixed top-0 z-99999 w-full h-full bg-gray-100 overflow-auto">
      <nav
        class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 sticky top-0 z-50 shadow-lg"
      >
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-7xl p-4">
          <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Almora</span
            >
          </a>
          <button
            @click="() => toggleModal()"
            data-collapse-toggle="mega-menu-full"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 0"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
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
          </button>
        </div>
      </nav>
      <div class="px-2">
        <div class="dark:bg-gray-800 py-8">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img
                    class="w-full h-full object-cover"
                    src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                    alt="Product Image"
                  />
                </div>
                <div class="flex -mx-2 mb-4">
                  <div class="w-1/2 px-2">
                    <button
                      class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div class="w-1/2 px-2">
                    <button
                      class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {{ product.name }}
                </h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {{ product.description}}
                </p>
                <div class="flex mb-4">
                  <div class="mr-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                    <span class="text-gray-600 dark:text-gray-300">${{ product.price }}</span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                    <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                  </div>
                </div>
                <!-- <div class="mb-4">
                  <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                  <div class="flex items-center mt-2">
                    <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                    <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                    <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                    <button
                      class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"
                    ></button>
                  </div>
                </div> -->
                <div class="mb-4">
                  <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                  <div class="flex items-center mt-2">
                    <button
                      class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                      S
                    </button>
                    <button
                      class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                      M
                    </button>
                    <button
                      class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                      L
                    </button>
                    <button
                      class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                      XL
                    </button>
                    <button
                      class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                      XXL
                    </button>
                  </div>
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300"
                    >Product Description:</span
                  >
                  <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet porro consequuntur tempore amet provident delectus consectetur cum, illum veniam. Rem ipsum eum beatae, repudiandae sequi quasi animi, fuga inventore est, ab eius cum repellat quibusdam maxime vero dolorem modi illo debitis itaque? Asperiores excepturi assumenda eos ex, saepe perspiciatis aut dolor? Voluptate architecto tenetur saepe est repellat illo beatae. Asperiores unde, earum illum corporis modi cumque! Ipsam rerum nemo repellendus nam, cupiditate vitae. Eligendi delectus mollitia quis nostrum dignissimos reiciendis accusamus adipisci facere quisquam explicabo fuga tempore, rerum repudiandae distinctio tenetur iusto vitae atque blanditiis nulla odio asperiores accusantium aliquam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
