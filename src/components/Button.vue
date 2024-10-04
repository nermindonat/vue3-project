<template>
  <button
    :type="type"
    :class="[
      'flex gap-1 items-center font-roboto min-h-[30px] text-white bg-[#34445D] rounded-md px-6 py-2 text-[14px] hover:opacity-90 hover:shadow-lg',
      customClass,
    ]"
    @click.prevent="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  type: { type: String, default: "button" },
});
</script>
