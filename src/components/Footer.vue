<template>
  <div class="flex justify-between p-12 px-20 bg-[#0a0c0f] text-white">
    <div class="flex flex-col w-56 p-4">
      <h2 class="mb-4 font-bold text-lg">MNS YAPI</h2>
      <p>
        Mimari yolcuğunuza eşlik ediyoruz. Hayallerinizi gerçeğe dönüştürmek
        için mimari ve yaratıcı çözümler üretiyoruz.
      </p>
    </div>
    <div class="flex flex-col w-56 p-4">
      <h2 class="mb-4 font-bold text-lg">Bizi Takip Edin</h2>
      <ul class="leading-10">
        <li class="flex items-center">
          <Icon icon="bi:facebook" width="1.2em" height="1.2em" />
          <a href="" class="ml-2">Facebook</a>
        </li>
        <li class="flex items-center">
          <Icon icon="ri:instagram-fill" width="1.2em" height="1.2em" />
          <a href="" class="ml-2">İnstagram</a>
        </li>
        <li class="flex items-center">
          <Icon
            icon="ant-design:twitter-outlined"
            width="1.2em"
            height="1.2em"
          />
          <a href="" class="ml-2">Twitter</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-col w-56 p-4">
      <h2 class="mb-4 font-bold text-lg">İletişim Bilgileri</h2>
      <div class="leading-10">
        <div class="flex items-center">
          <Icon icon="ph:phone-fill" width="1.2em" height="1.2em" />
          <p class="ml-2">0541 402 44 21</p>
        </div>
        <div class="flex items-center">
          <Icon icon="mdi:email" width="1.2em" height="1.2em" />
          <p class="ml-2">mnsyapi@gmail.com</p>
        </div>
        <div class="flex items-center">
          <Icon icon="carbon:location-filled" width="1.2em" height="1.2em" />
          <p class="ml-2">Bayraklı / İzmir</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
</script>
