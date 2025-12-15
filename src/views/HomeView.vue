<script setup>
import { onMounted, watch, nextTick, ref } from 'vue'

//ui components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { initFlowbite } from 'flowbite'

//external actions
import {
  useSwiperPaginationWrapper,
  isVisible,
  productId,
  toggleModal,
} from '@/composables/globalFunctions'
import { useProductsStore } from '@/stores/handleProducts' //needed get grouped products and sending it to ProductsSection as a prop
const wrapPagination = useSwiperPaginationWrapper()
const store = useProductsStore()

//components
import ModalLayer from '@/components/ModalLayer.vue'
import ProductsSection from '@/components/ProductsSection.vue'

const product = ref([])
const modal = ref(null)
const alert = ref(null)
const showAlert = ref(false)

// shows grouped products by groups in console
watch(
  () => store.products,
  () => {
    store.groupItemsByCategory.forEach((i) => {
      console.log(i)
    })
  },
)

//opening product overview left to right animation
watch(isVisible, async () => {
  if (isVisible.value == true) {
    await nextTick()
    setTimeout(() => {
      modal.value.style.transition = '300ms'
      modal.value.style.right = 0
    }, 100)
    product.value = store.getProductById(productId.value)
  }
})

//closing product overview right to left animation
function close() {
  modal.value.style.transition = '300ms'
  modal.value.style.right = '-100%'

  setTimeout(() => {
    toggleModal()
  }, 100)
}

function addToCart() {
  showAlert.value = true
  nextTick(() => {
    setTimeout(() => {
      alert.value.style.transition = '300ms'
      alert.value.style.opacity = '1'
    }, 1)

    setTimeout(() => {
      alert.value.style.opacity = '0'
      setTimeout(() => {
        showAlert.value = false
      }, 300)
    }, 1500)
  })
}

// when isVisible is true,'product' is declared based on the productId

onMounted(() => {
  store.getProducts()
  initFlowbite()
})
</script>
<template>
  <div class="flex justify-center">
    <div class="container">
      <swiper
        @swiper="wrapPagination"
        :slides-per-view="1.1"
        :space-between="10"
        :centered-slides="true"
        :initial-slide="1"
        :modules="[Pagination]"
        :pagination="true"
        class="pl-5 my-3"
      >
        <swiper-slide>
          <div class="w-full h-[200px] border rounded overflow-hidden">
            <img class="object-cover w-full h-full" src="https://picsum.photos/800/400" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-full h-[200px] border rounded overflow-hidden">
            <img class="object-cover w-full h-full" src="https://picsum.photos/801/400" alt="" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-full h-[200px] border rounded overflow-hidden">
            <img class="object-cover w-full h-full" src="https://picsum.photos/802/400" alt="" />
          </div>
        </swiper-slide>
      </swiper>

      <div class="flex overflow-auto space-x-2 px-2 hide-scrollbar mb-3">
        <div class="w-[180px] h-[110px] shrink-0 rounded">
          <img class="object-cover w-full h-full" src="https://picsum.photos/600/400" alt="" />
        </div>
        <div class="w-[180px] h-[110px] shrink-0 rounded">
          <img class="object-cover w-full h-full" src="https://picsum.photos/601/400" alt="" />
        </div>
        <div class="w-[180px] h-[110px] shrink-0 rounded">
          <img class="object-cover w-full h-full" src="https://picsum.photos/602/400" alt="" />
        </div>
      </div>
      <div>
        <products-section
          v-for="groupedProducts in store.groupItemsByCategory"
          :key="groupedProducts.category"
          :title="groupedProducts.category"
          :products="groupedProducts.products"
        />
      </div>
    </div>
  </div>

  <ModalLayer v-if="isVisible">
    <div
      class="fixed top-0 -right-full z-99999 w-full h-full dark:border-gray-600 bg-gray-100 overflow-auto"
      ref="modal"
    >
      <div class="fixed w-full top-10 left-0 z-99 opacity-0" ref="alert" v-if="showAlert">
        <div
          class="w-[90%] m-auto flex items-start sm:items-center p-4 text-sm text-heading rounded-md bg-success"
          role="alert"
        >
          <svg
            class="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p>
            <span class="font-medium me-1">Dark alert!</span> Product successfully added to the
            cart!
          </p>
        </div>
      </div>
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
            @click="close()"
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
      <div class="px-2 bg-gray-200 dark:bg-gray-800">
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
                      @click="addToCart"
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
                  {{ product?.name }}
                </h2>
                <div class="flex mb-2">
                  <div class="mr-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                    <span class="text-gray-600 dark:text-gray-300">${{ product?.price }}</span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                    <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                  </div>
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300"
                    >Product Description:</span
                  >
                  <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet porro
                    consequuntur tempore amet provident delectus consectetur cum, illum veniam. Rem
                    ipsum eum beatae, repudiandae sequi quasi animi, fuga inventore est, ab eius cum
                    repellat quibusdam maxime vero dolorem modi illo debitis itaque? Asperiores
                    excepturi assumenda eos ex, saepe perspiciatis aut dolor? Voluptate architecto
                    tenetur saepe est repellat illo beatae. Asperiores unde, earum illum corporis
                    modi cumque! Ipsam rerum nemo repellendus nam, cupiditate vitae. Eligendi
                    delectus mollitia quis nostrum dignissimos reiciendis accusamus adipisci facere
                    quisquam explicabo fuga tempore, rerum repudiandae distinctio tenetur iusto
                    vitae atque blanditiis nulla odio asperiores accusantium aliquam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ModalLayer>
</template>
