<template>
  <div
    class="h-16 flex justify-between items-center px-6 md:px-12 text-white bg-[#0a0c0f] fixed w-full top-0 z-50"
  >
    <h2 class="text-xl font-bold">MNS YAPI</h2>
    <div class="md:hidden">
      <button @click="isMenuOpen = !isMenuOpen" class="focus:outline-none">
        <svg
          v-if="!isMenuOpen"
          class="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          v-if="isMenuOpen"
          class="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <nav id="nav" class="hidden md:flex font-semibold space-x-6">
      <router-link to="/">Anasayfa</router-link>
      <router-link to="/hakkimizda">Hakkımızda</router-link>
      <router-link to="/hizmetlerimiz">Hizmetlerimiz</router-link>
      <router-link to="/iletisim">İletişim</router-link>
    </nav>
    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-16 left-0 w-full bg-[#0a0c0f] text-white text-center py-4"
    >
      <router-link to="/" class="block py-2" @click="isMenuOpen = false"
        >Anasayfa</router-link
      >
      <router-link
        to="/hakkimizda"
        class="block py-2"
        @click="isMenuOpen = false"
        >Hakkımızda</router-link
      >
      <router-link
        to="/hizmetlerimiz"
        class="block py-2"
        @click="isMenuOpen = false"
        >Hizmetlerimiz</router-link
      >
      <router-link to="/iletisim" class="block py-2" @click="isMenuOpen = false"
        >İletişim</router-link
      >
    </div>
  </div>

  <div class="mt-16">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>
