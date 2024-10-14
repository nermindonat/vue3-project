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
  <div class="flex flex-col md:flex-row w-full mb-10 px-20">
    <div class="flex-1 flex items-center mb-5 md:mb-0 md:mr-5">
      <img
        src="/images/contact-image.jpg"
        alt="Hakkımızda"
        class="w-full h-[480px] md:max-w-md lg:max-w-lg object-cover rounded-[6px]"
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
      <form
        @submit.prevent="handleSubmit"
        class="flex flex-col gap-4 py-4 px-9"
      >
        <div class="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="nameSurname"
            name="nameSurname"
            label="Ad Soyad"
            v-model="nameSurname"
            :errorMessage="nameSurnameError"
            required
          />
          <Input
            id="email"
            type="email"
            name="email"
            label="E-mail"
            v-model="email"
            :errorMessage="emailError"
            required
          />
        </div>
        <div class="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="phoneNumber"
            name="phoneNumber"
            label="Telefon Numarası"
            v-model="phoneNumber"
            :errorMessage="phoneNumberError"
            required
          />
          <Input
            id="subject"
            name="subject"
            label="Konu"
            v-model="subject"
            :errorMessage="subjectError"
            required
          />
        </div>
        <div class="grid w-full gap-4">
          <TextArea
            id="message"
            name="message"
            label="Mesajınız"
            v-model="message"
            :errorMessage="messageError"
            required
          />
        </div>
        <div class="flex justify-end">
          <Button type="submit" :loading="isLoading"> Gönder </Button>
        </div>
      </form>
      <div
        v-if="successMessage || errorMessage"
        :class="[
          'flex items-center justify-center mb-4 font-semibold border border-gray-300 mx-9 rounded-[6px] p-1 md:p-0',
          successMessage ? 'bg-green-400' : 'bg-red-400',
        ]"
      >
        {{
          successMessage
            ? "Mesajınız başarıyla gönderilmiştir."
            : "Form gönderilirken bir hata oluştu."
        }}
      </div>
    </div>
  </div>
  <div ref="map" class="w-full h-[500px] p-10 mb-2"></div>
  <Footer />
</template>
<script setup>
import * as yup from "yup";
import Footer from "@/layouts/Footer.vue";
import Input from "@/components/Input.vue";
import TextArea from "@/components/TextArea.vue";
import Button from "@/components/Button.vue";
import { Icon } from "@iconify/vue";
import { ref, onMounted } from "vue";
import { useForm, useField } from "vee-validate";
import axios from "axios";

const map = ref(null);
const successMessage = ref(false);
const errorMessage = ref(false);
const isLoading = ref(false);

const validationSchema = yup.object({
  nameSurname: yup.string().required("Ad ve Soyad alanı zorunludur"),
  email: yup.string().required("E-posta alanı zorunludur"),
  phoneNumber: yup.string().required("Telefon Numarası alanı zorunludur"),
  subject: yup.string().required("Konu alanı zorunludur"),
  message: yup.string().required("Mesaj alanı zorunludur"),
});

const form = useForm({ validationSchema });
const { value: nameSurname, errorMessage: nameSurnameError } =
  useField("nameSurname");
const { value: email, errorMessage: emailError } = useField("email");
const { value: phoneNumber, errorMessage: phoneNumberError } =
  useField("phoneNumber");
const { value: subject, errorMessage: subjectError } = useField("subject");
const { value: message, errorMessage: messageError } = useField("message");

const handleSubmit = form.handleSubmit(async (values) => {
  try {
    isLoading.value = true;
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/contact-form`,
      {
        nameSurname: values.nameSurname,
        email: values.email,
        phoneNumber: values.phoneNumber,
        subject: values.subject,
        message: values.message,
      }
    );
    if (response) {
      setTimeout(() => {
        isLoading.value = false;
        successMessage.value = true;
        errorMessage.value = false;
      }, 1000);
    }
  } catch (error) {
    isLoading.value = false;
    successMessage.value = false;
    errorMessage.value = true;
    console.error("From gönderilirken bir hata oluştu.", error);
  }
});

onMounted(() => {
  const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}`;
  script.async = true;
  script.onload = () => {
    if (window.google && window.google.maps) {
      const googleMap = new window.google.maps.Map(map.value, {
        center: { lat: 38.462223, lng: 27.166668 },
        zoom: 10,
      });
    } else {
      console.error("Google Maps API yüklenemedi.");
    }
  };
  document.body.appendChild(script);
});
</script>
