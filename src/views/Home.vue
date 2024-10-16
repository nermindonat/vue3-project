<template>
  <div
    class="h-screen bg-[url('/images/bg-image.jpg')] bg-cover bg-center relative flex flex-col justify-center"
  >
    <div class="bg-black/40 absolute inset-0 z-0"></div>

    <h4
      class="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl z-10 w-5/6 ml-4 sm:ml-6 md:ml-10 mt-12 md:mt-24"
    >
      MNS Yapı İle Hayalinizdeki Evi Tasarlayın!
    </h4>
    <div
      class="z-10 text-white flex flex-col items-start sm:flex-row md:items-center"
    >
      <button
        @click="handleCall"
        class="relative bg-white ml-4 py-1.5 px-6 text-green-800 sm:ml-10 mt-10 pr-12 clip-path-right-arrow"
      >
        Bizi Arayın
      </button>
      <div class="flex items-center mt-4 sm:mt-10 ml-4 sm:ml-8">
        <Icon icon="ph:phone-fill" width="16" height="16" />
        <span class="font-bold ml-2">Telefon: 0541 402 44 21</span>
      </div>
    </div>
  </div>
  <Information />
  <Footer />
</template>
<script setup>
import { Icon } from "@iconify/vue";
import Information from "../views/Information.vue";
import Footer from "../layouts/Footer.vue";

const isMobileDevice = () => {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|Windows Phone/i.test(
    navigator.userAgent
  );
};

const handleCall = () => {
  if (isMobileDevice()) {
    window.location.href = "tel:05414024421";
  } else {
    alert("Bu özellik yalnızca mobil cihazlarda kullanılabilir.");
  }
};
</script>

<style>
.clip-path-right-arrow {
  clip-path: polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%);
}
</style>
