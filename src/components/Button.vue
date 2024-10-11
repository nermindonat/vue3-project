<template>
  <button
    :type="type"
    :loading="loading"
    :class="[
      'flex gap-1 items-center font-roboto min-h-[30px] text-white bg-[#34445D] rounded-md px-6 py-2 text-[14px] hover:opacity-90 hover:shadow-lg',
      customClass,
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
    <Spinner v-if="loading" class="ml-2" />
  </button>
</template>

<script setup>
import { defineProps } from "vue";
import Spinner from "./Spinner.vue";

const props = defineProps({
  type: { type: String, default: "button" },
  loading: Boolean,
});
</script>
