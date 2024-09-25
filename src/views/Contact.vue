<template>
  <div
    class="w-full h-[400px] bg-[url('src/assets/images/bg-about-image.jpg')] bg-cover bg-center bg-no-repeat relative bottom-10"
  >
    <div class="absolute inset-0 flex items-center justify-center">
      <h2 class="font-bold text-5xl leading-10 text-black">İletişim</h2>
    </div>
    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-14 flex items-center text-black z-10 bg-white p-4"
    >
      Anasayfa / İletişim
    </div>
  </div>
  <div ref="map" class="w-full h-[500px] p-10 mb-5"></div>
  <Footer />
</template>
<script setup>
import Footer from "@/components/Footer.vue";

import { ref, onMounted } from "vue";
const map = ref(null);

onMounted(() => {
  if (window.google && window.google.maps) {
    const googleMap = new window.google.maps.Map(map.value, {
      center: { lat: 38.462223, lng: 27.166668 }, // Haritanın merkezi İzmir
      zoom: 10, // Yakınlaştırma seviyesi
    });
  } else {
    console.error("Google Maps API yüklenemedi.");
  }
});
</script>
