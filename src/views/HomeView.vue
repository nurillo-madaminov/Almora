<script setup>
import { onMounted, watch } from 'vue'

//ui components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

//external actions
import { useSwiperPaginationWrapper } from '@/composables/globalFunctions'
import { useProductsStore } from '@/stores/fetchProducts' //needed get grouped products and sending it to ProductsSection as a prop
const wrapPagination = useSwiperPaginationWrapper()
const store = useProductsStore()

//components
import ModalLayer from '@/components/ModalLayer.vue'
import ProductsSection from '@/components/ProductsSection.vue'

// shows grouped products by groups in console
watch(
  () => store.products,
  () => {
    store.groupItemsByCategory.forEach((i) => {
      console.log(i)
    })
  },
)

onMounted(() => {
  store.getProducts()
})
</script>
<template>
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
    <div class="w-[180px] h-[110px] shrink-0 rounded ">
      <img class="object-cover w-full h-full" src="https://picsum.photos/600/400" alt="" />
    </div>
    <div class="w-[180px] h-[110px] shrink-0 rounded ">
      <img class="object-cover w-full h-full" src="https://picsum.photos/601/400" alt="" />
      
    </div>
    <div class="w-[180px] h-[110px] shrink-0 rounded ">
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
  <ModalLayer />
</template>
