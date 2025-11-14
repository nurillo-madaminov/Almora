//composables are global functions newthing for me

import { ref, watch } from 'vue'

//wraps the swiper-pagination with div.wrapper in order to customize it's style
export function useSwiperPaginationWrapper() {
  return function wrapPagination(swiper) {
    const paginationEl = swiper.pagination.el
    if (!paginationEl) return

    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    paginationEl.parentNode.insertBefore(wrapper, paginationEl)
    wrapper.appendChild(paginationEl)
  }
}

//product details page (ModalLayer.vue visibility and displaying information from clicked product)
export const isVisible = ref(false)
export const productId = ref()

export function toggleModal(id) {
  isVisible.value = !isVisible.value
  productId.value = id
}

//stops <body> scrolling when ModalLayer is visible --better ex--
watch(isVisible, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
