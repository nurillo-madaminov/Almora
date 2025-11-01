<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'

import ProductsSection from '@/components/ProductsSection.vue'

const modules = [Autoplay]

const onSwiper = (swiper) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}
</script>
<template>
  <swiper
    :slides-per-view="1.1"
    :space-between="10"
    :centered-slides="true"
    :initial-slide="1"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="pl-5 my-3"
  >
    <swiper-slide>
      <div class="w-full h-[200px] border rounded">slider 1</div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-full h-[200px] border rounded">slider 2</div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-full h-[200px] border rounded">slider 3</div>
    </swiper-slide>
  </swiper>

  <div class="flex overflow-auto space-x-2 px-2 hide-scrollbar mb-3">
    <div class="w-[180px] h-[110px] shrink-0 rounded border">slider 1</div>
    <div class="w-[180px] h-[110px] shrink-0 rounded border">slider 2</div>
    <div class="w-[180px] h-[11 0px] shrink-0 rounded border">slider 3</div>
  </div>
  <div>
    <products-section title="Title 1" :products="[1,2,3,4,6]"/>
    <products-section title="Title 2" :products="[1,2,3]"/>
    <products-section title="Title 3" :products="[1,2,3,4]"/>
  </div>
</template>
