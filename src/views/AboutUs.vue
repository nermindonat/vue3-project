<template>
  <div
    class="w-full h-[400px] bg-[url('/images/bg-about-image.jpg')] bg-cover bg-center bg-no-repeat relative bottom-10"
  >
    <div class="absolute inset-0 flex items-center justify-center">
      <h2 class="font-bold text-5xl leading-10 text-black">Hakkımızda</h2>
    </div>
    <div
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-14 flex items-center whitespace-nowrap text-black z-10 bg-white p-4"
    >
      <a href="/" class="hover:underline mr-2">Anasayfa</a> / Hakkımızda
    </div>
  </div>
  <div class="p-6 md:p-10 flex items-center justify-center">
    <div class="flex flex-col md:flex-row w-full">
      <div class="flex-1 flex flex-col items-center p-4">
        <h2
          class="font-bold text-xl md:text-2xl leading-8 md:leading-10 text-black p-2"
        >
          Hakkımızda
        </h2>
        <h4 class="p-2 text-justify text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptate officia aspernatur dolor doloremque nostrum quis magni at
          animi, minus eum ipsa. Voluptatibus eveniet animi cumque dignissimos
          amet cupiditate doloremque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia voluptate officia aspernatur dolor doloremque
          nostrum quis magni at animi, minus eum ipsa. Voluptatibus eveniet
          animi cumque dignissimos amet cupiditate doloremque. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quia voluptate officia
          aspernatur dolor doloremque nostrum quis magni at animi, minus eum
          ipsa. Voluptatibus eveniet animi cumque dignissimos amet cupiditate
          doloremque.
        </h4>
      </div>
      <div class="flex-1 flex items-center justify-center p-4">
        <img
          src="/images/about-image.jpg"
          alt="Hakkımızda"
          class="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg object-cover"
        />
      </div>
    </div>
  </div>

  <Footer />
</template>
<script setup>
import Footer from "@/components/Footer.vue";
</script>
