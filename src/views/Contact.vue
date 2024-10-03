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
  <div
    class="w-full flex flex-col md:flex-row justify-center items-stretch h-auto p-6 md:p-10 mb-10 space-y-6 md:space-y-0 md:space-x-6"
  >
    <div
      class="w-full md:w-[300px] flex flex-col items-center border border-gray-200 rounded-md p-5 shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105"
    >
      <div
        class="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 mb-5 bg-[#e7c092]"
      >
        <Icon icon="ph:phone-light" width="2em" height="2em" />
      </div>
      <h3 class="font-bold text-xl mb-5">Telefon</h3>
      <p>0546 786 43 54</p>
    </div>
    <div
      class="w-full md:w-[300px] flex flex-col items-center border border-gray-200 rounded-md p-5 shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105"
    >
      <div
        class="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 mb-5 bg-[#e7c092]"
      >
        <Icon icon="mdi-light:email" width="2em" height="2em" />
      </div>
      <h3 class="font-bold text-xl mb-5">E-posta Adresi</h3>
      <p>mnsyapi@gmail.com</p>
    </div>
    <div
      class="w-full md:w-[300px] flex flex-col items-center border border-gray-200 rounded-md p-5 shadow-[0_4px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105"
    >
      <div
        class="flex items-center justify-center w-16 h-16 rounded-full border border-gray-200 mb-5 bg-[#e7c092]"
      >
        <Icon icon="carbon:location" width="2em" height="2em" />
      </div>
      <h3 class="font-bold text-xl mb-5">Adres</h3>
      <p>Fuat Edip Baksı Mahallesi Anadolu Caddesi Bayraklı / İzmir</p>
    </div>
  </div>

  <div ref="map" class="w-full h-[500px] p-10 mb-2"></div>
  <Footer />
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import { Icon } from "@iconify/vue";
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
