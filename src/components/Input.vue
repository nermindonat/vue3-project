<template>
  <div :class="['flex flex-col w-full relative tooltip']">
    <Label :id="id" :label="label" :required="required" />
    <input
      ref="input"
      :id="id"
      :type="type"
      class="border border-gray-300 rounded-[4px] h-[35px] hover:border-gray-400 focus-visible:border-gray-400 focus-visible:outline-offset-[3px] focus-visible:outline-1 focus-visible:outline-dashed focus-visible:outline-gray-400 px-2 text-[12px] font-roboto disabled:bg-gray-200 shadow-custom-inset"
      :value="modelValue"
      @input="onInput"
      placeholder=" "
    />
    <span
      v-if="errorMessage"
      :class="[
        'text-red-400 text-[11px] pt-[2px] font-roboto absolute top-full',
        errorClass,
      ]"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup>
import Label from "./Label.vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  id: { type: String, required: true },
  label: String,
  type: { type: String, default: "text" },
  errorMessage: String,
  modelValue: String,
  errorClass: String,
  required: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
