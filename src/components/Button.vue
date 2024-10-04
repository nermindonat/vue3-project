<template>
  <button
    :type="type"
    :class="[
      'flex gap-1 items-center font-roboto min-h-[30px] text-white bg-[#34445D] rounded-md px-6 py-2 text-[14px] hover:opacity-90 hover:shadow-lg',
      customClass,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "customClass"],
};
</script>
