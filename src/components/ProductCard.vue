<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps(['name', 'price'])
</script>

<template>
  <div class="card-sm bg-base-100 col-span-1 shadow-sm">
    <div class="card-header h-[250px]">
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

    <div class="card-body">
      <h4 class="card-title text-md">{{props.name}}</h4>
      <p>{{props.price}}$</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div>
      </div>
    </div>
  </div>
</template>
