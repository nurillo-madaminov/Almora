// import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      products: [],
    }
  },
  actions: {
    async getProducts() {
      const data = await fetch('https://raw.githubusercontent.com/nurillo-madaminov/Almora/main/src/stores/data.json')
      const res = await data.json()
      this.products = res.products
    },
  },
  getters: {
    groupItemsByCategory() {
      const groups = {}
      this.products.forEach((product) => {
        const category = product.category || 'Uncategorized'
        if (!groups[category]) groups[category] = []
        groups[category].push(product)
      })
      return Object.entries(groups).map(([category, products]) => ({
        category,
        products,
      }))
    },
  },
})
