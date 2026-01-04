<script setup>
import { ref, onBeforeMount } from 'vue'
const showNav = ref(false)

onBeforeMount(() => {
  if (innerWidth >= 768) {
    showNav.value = false
  } else {
    showNav.value = true
  }
})
</script>
<template>
  <nav class="bg-neutral-100 dark:bg-neutral-900! fixed w-full z-20 top-0 start-0 shadow-xl">
    <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link :to="{ name: 'home' }" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-heading dark:text-white"
        >
          Flowbite
        </span>
      </router-link>

      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          @click="$router.push('/cart')"
          type="button"
          class="text-white bg-blue-400 dark:bg-blue-500 rounded-sm box-border border border-transparent shadow-xs font-medium leading-5 text-sm px-3 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-5"
            viewBox="0 0 640 512"
          >
            <path
              d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
            />
          </svg>
        </button>

        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-md md:hidden text-body dark:text-gray-300 hover:text-heading dark:hover:text-white border border-gray-300 dark:border-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
      </div>

      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 md:p-0"
              aria-current="page"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 md:p-0"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
