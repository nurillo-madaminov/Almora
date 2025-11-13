import { ref, watch } from 'vue'

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

//----------

export const isVisible = ref(false)
export const productId = ref()

export function toggleModal(x) {
  isVisible.value = !isVisible.value
  productId.value = x
}

  watch(isVisible, (val) => {
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

//composables are global functions
