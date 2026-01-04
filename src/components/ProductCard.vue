<script setup>
//ui components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

//external actions
import { toggleModal, useSwiperPaginationWrapper } from '@/composables/globalFunctions'
const wrapPagination = useSwiperPaginationWrapper()

const props = defineProps(['name', 'price', 'id'])
</script>

<template>
  <div class="card-sm bg-base-100 col-span-1 shadow-sm">
    <div class="card-header">
      <figure>
        <swiper
          :pagination="true"
          :modules="[Pagination]"
          @swiper="wrapPagination"
          class="relative h-[300px]"
        >
          <swiper-slide class="h-full">
            <img class="object-cover w-full h-full" src="https://picsum.photos/190/300" alt="product image 1" />
          </swiper-slide>
          <swiper-slide class="h-full">
            <img class="object-cover w-full h-full" src="https://picsum.photos/190/301" alt="product image 2" />
          </swiper-slide>
        </swiper>
      </figure>
    </div>

    <div class="card-body flex flex-col justify-between">
      <h4 class="card-title text-sm items-start h-8">{{ props.name }}</h4>
      <div class="flex justify-between items-center mt-2">
        <p>{{ props.price }}$</p>
        <div class="card-actions justify-end">
          <button class="btn text-white bg-blue-400 dark:bg-blue-500  h-[30px]" @click="toggleModal(props.id)">
            More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
