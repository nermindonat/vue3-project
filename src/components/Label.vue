<template>
  <label
    v-if="label"
    :for="id"
    :class="['font-roboto text-black text-[14px] mb-2', labelClass]"
  >
    {{ label }}
    <span v-if="required" class="ml-1 text-red-600">*</span>
  </label>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true },
  label: String,
  labelClass: String,
  required: Boolean, // required prop'u burada tanımlı
});
</script>
