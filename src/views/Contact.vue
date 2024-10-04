<template>
  <div
    class="w-full h-[400px] bg-[url('/images/bg-about-image.jpg')] bg-cover bg-center bg-no-repeat relative bottom-10"
  >
    <div class="absolute inset-0 flex items-center justify-center">
      <h2 class="font-bold text-5xl leading-10 text-black">İletişim</h2>
    </div>
    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-14 flex items-center text-black z-10 bg-white p-4"
    >
      <a href="/" class="hover:underline mr-2">Anasayfa</a> / İletişim
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
      <p>0541 402 44 21</p>
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
  <div class="flex flex-col md:flex-row w-full mb-10 px-10">
    <div class="flex-1 flex items-center mb-5 md:mb-0 md:mr-5">
      <img
        src="/images/contact-image.jpg"
        alt="Hakkımızda"
        class="w-full h-[450px] md:max-w-md lg:max-w-lg object-cover"
      />
    </div>
    <div
      class="w-full flex-1 flex-col flex border border-gray-300 rounded-[6px]"
    >
      <div class="bg-[#f5f5f5] px-9 py-3 rounded-[6px]">
        <h2 class="font-semibold text-[1.714em] leading-[1.618em]">
          Bizimle İletişime Geçin
        </h2>
      </div>
      <form action="" class="flex flex-col gap-4 py-4 px-9">
        <div class="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="nameSurname"
            name="nameSurname"
            label="Ad Soyad"
            required
          />
          <Input id="email" name="email" label="E-mail" required />
        </div>
        <div class="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="phoneNumber"
            name="phoneNumber"
            label="Telefon Numarası"
            required
          />
          <Input id="subject" name="subject" label="Konu" required />
        </div>
        <div class="grid w-full gap-4">
          <TextArea id="message" name="message" label="Mesajınız" required />
        </div>
        <div class="flex justify-end">
          <Button type="submit"> Gönder </Button>
        </div>
      </form>
    </div>
  </div>
  <div ref="map" class="w-full h-[500px] p-10 mb-2"></div>
  <Footer />
</template>
<script setup>
import Footer from "@/layouts/Footer.vue";
import Input from "@/components/Input.vue";
import TextArea from "@/components/TextArea.vue";
import Button from "@/components/Button.vue";
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";

const map = ref(null);

onMounted(() => {
  const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // Vite 3 için
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}`;
  script.async = true;
  script.onload = () => {
    if (window.google && window.google.maps) {
      const googleMap = new window.google.maps.Map(map.value, {
        center: { lat: 38.462223, lng: 27.166668 }, // Haritanın merkezi İzmir
        zoom: 10, // Yakınlaştırma seviyesi
      });
    } else {
      console.error("Google Maps API yüklenemedi.");
    }
  };
  document.body.appendChild(script);
});
</script>
