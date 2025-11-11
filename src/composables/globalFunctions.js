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


//composables are global functions
