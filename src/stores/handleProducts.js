import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      products: [],
    }
  },

  actions: {
    // work on response handler
    async getProducts() {
      try {
        const data = await fetch(
          'https://raw.githubusercontent.com/nurillo-madaminov/Almora/main/src/stores/data.json',
          // 'http://localhost:3000/products', //tempcode
        )
        const res = await data.json()
        this.products = res.products
        // this.products = res // tempcode
      } catch (e) {
        console.log('message', e)
      }
    },
  },

  getters: {
    // returns a product that id is matched with argument
    getProductById: (state) => {
      return (id) => state.products.find((item) => item.id == id)
    },

    // group products based on their category and returns an array (group of products)
    groupItemsByCategory: (state) => {
      const groups = {}
      state.products.forEach((product) => {
        const category = product.category || 'Uncategorized'
        if (!groups[category]) groups[category] = []
        groups[category].push(product)
      })

      return Object.entries(groups).map(([category, products]) => ({
        // object.enteries newthing
        category,
        products,
      }))
    },
  },
})
