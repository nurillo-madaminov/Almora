<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps(['name', 'price'])
</script>

<template>
  <div class="card-sm bg-base-100 col-span-1 shadow-sm">
    <div class="card-header h-[250px] overflow-hidden">
      <figure>
        <swiper :pagination="true" :modules="[Pagination]" class="overflow-hidden">
          <swiper-slide>
            <img src="https://picsum.photos/200/280" alt="Shoes" />
          </swiper-slide>
          <swiper-slide>
            <img src="https://picsum.photos/200/281" alt="Shoes" />
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
