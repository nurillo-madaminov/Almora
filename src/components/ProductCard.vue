<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { useSwiperPaginationWrapper } from '@/composables/globalFunctions'

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps(['name', 'price'])

const wrapPagination = useSwiperPaginationWrapper()
</script>

<template>
  <div class="card-sm bg-base-100 col-span-1 shadow-sm">
    <div class="card-header">
      <figure>
        <swiper
          :pagination="true"
          :modules="[Pagination]"
          @swiper="wrapPagination"
          class="relative"
        >
          <swiper-slide class="h-[250px]! flex! justify-center items-center overflow-hidden">
            <img class="h-full!" src="https://picsum.photos/190/250" alt="" />
          </swiper-slide>
          <swiper-slide class="h-[250px]! flex! justify-center items-center overflow-hidden">
            <img class="h-full!" src="https://picsum.photos/190/251" alt="" />
          </swiper-slide>
        </swiper>
      </figure>
    </div>

    <div class="card-body flex flex-col justify-between">
      <h4 class="card-title text-sm items-start h-8">{{ props.name }}</h4>
      <div class="flex justify-between items-center mt-2">
        <p>{{ props.price }}$</p>
        <div class="card-actions justify-end">
          <button class="btn btn-success h-[30px]">More</button>
        </div>
      </div>
    </div>
  </div>
</template>
