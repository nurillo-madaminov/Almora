<script setup>
// oxlint-disable no-unused-expressions
import { onMounted, watch } from 'vue'
import { useProductsStore } from '@/stores/fetchProducts'
const store = useProductsStore()

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import { useSwiperPaginationWrapper } from '@/composables/globalFunctions'
const wrapPagination = useSwiperPaginationWrapper()


import 'swiper/css'
import 'swiper/css/pagination'

import ProductsSection from '@/components/ProductsSection.vue'

// const onSwiper = (swiper) => {
//   console.log(swiper)
// }

// const onSlideChange = () => {
//   console.log('slide change')
// }
// @swiper="onSwiper"
// @slideChange="onSlideChange"

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
        <img src="https://picsum.photos/400" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-full h-[200px] border rounded overflow-hidden">
        <img src="https://picsum.photos/401" alt="" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-full h-[200px] border rounded overflow-hidden">
        <img src="https://picsum.photos/402" alt="" />
      </div>
    </swiper-slide>
  </swiper>

  <div class="flex overflow-auto space-x-2 px-2 hide-scrollbar mb-3">
    <div class="w-[180px] h-[110px] shrink-0 rounded border">slider 1</div>
    <div class="w-[180px] h-[110px] shrink-0 rounded border">slider 2</div>
    <div class="w-[180px] h-[11 0px] shrink-0 rounded border">slider 3</div>
  </div>
  <div>
    <products-section
      v-for="groupedProducts in store.groupItemsByCategory"
      :key="groupedProducts.category"
      :title="groupedProducts.category"
      :products="groupedProducts.products"
    />
  </div>
</template>
