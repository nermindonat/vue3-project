<template>
  <div
    class="h-screen bg-[url('src/assets/images/bg-image.jpg')] bg-cover bg-center relative flex flex-col justify-center"
  >
    <div class="bg-black/50 absolute inset-0 z-0"></div>
    <div class="absolute left-0 top-0 w-full"><Header /></div>
    <h4 class="text-white text-7xl z-10 w-5/6 ml-10 mt-24">
      MNS Yapı İle Hayalinizdeki Evi Tasarlayın!
    </h4>
    <div class="z-10 text-white flex items-center">
      <button
        class="relative bg-white py-1.5 px-6 text-green-800 ml-10 mt-10 pr-12 clip-path-right-arrow"
      >
        Bizi Arayın
      </button>
      <div class="flex items-center mt-10 ml-4">
        <Icon icon="ph:phone-fill" width="16" height="16" />
        <span class="font-bold ml-2">Telefon: 0545 345 67 43</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from "./views/Header.vue";
import { Icon } from "@iconify/vue";
</script>
<style>
.clip-path-right-arrow {
  clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
}
</style>
