<template>
  <div
    class="flex flex-col md:flex-row justify-between p-4 md:p-12 bg-[#0a0c0f] text-white"
  >
    <div
      class="flex flex-col w-full md:w-56 p-4 mb-6 md:mb-0 items-center md:items-start"
    >
      <h2 class="mb-4 font-bold text-lg">MNS YAPI</h2>
      <p class="text-center md:text-left">
        Mimari yolcuğunuza eşlik ediyoruz. Hayallerinizi gerçeğe dönüştürmek
        için mimari ve yaratıcı çözümler üretiyoruz.
      </p>
    </div>
    <div
      class="flex flex-col w-full md:w-56 p-4 mb-6 md:mb-0 items-center md:items-start"
    >
      <h2 class="mb-4 font-bold text-lg">Bizi Takip Edin</h2>
      <ul class="leading-10 text-center md:text-left">
        <li class="flex items-center justify-center md:justify-start">
          <Icon icon="bi:facebook" class="w-5 h-5 animate-pulse" />
          <a href="" class="ml-2">Facebook</a>
        </li>
        <li class="flex items-center justify-center md:justify-start">
          <Icon
            icon="ant-design:twitter-outlined"
            class="w-5 h-5 animate-pulse"
          />
          <a href="" class="ml-2">Twitter</a>
        </li>
        <li class="flex items-center justify-center md:justify-start">
          <Icon icon="ri:instagram-fill" class="w-5 h-5 animate-pulse" />
          <a href="" class="ml-2">İnstagram</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-col w-full md:w-56 p-4 items-center md:items-start">
      <h2 class="mb-4 font-bold text-lg">İletişim Bilgileri</h2>
      <div class="leading-10 text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start">
          <Icon icon="ph:phone-fill" class="w-5 h-5 animate-pulse" />
          <p class="ml-2">0541 402 44 21</p>
        </div>
        <div class="flex items-center justify-center md:justify-start">
          <Icon icon="mdi:email" class="w-5 h-5 animate-pulse" />
          <p class="ml-2">mnsyapi@gmail.com</p>
        </div>
        <div class="flex items-center justify-center md:justify-start">
          <Icon icon="carbon:location-filled" class="w-5 h-5 animate-pulse" />
          <p class="ml-2">Bayraklı / İzmir</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
