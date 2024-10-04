<template>
  <div :class="['flex flex-col w-full relative', wrapperClass]">
    <Label
      :id="id"
      :label="label"
      :labelClass="labelClass"
      :required="required"
    />
    <textarea
      :id="id"
      class="pt-1 border border-gray-300 rounded-[4px] !h-[100px] hover:border-gray-300 focus-visible:border-gray-300 focus-visible:outline-offset-[3px] focus-visible:outline-1 focus-visible:outline-dashed focus-visible:outline-gray-300 px-2 text-[12px] font-roboto shadow-custom-inset"
      :value="modelValue"
      @input="onInput"
      v-bind="$attrs"
    ></textarea>
    <span
      v-if="errorMessage"
      class="text-red-400 text-[11px] pt-[2px] font-roboto absolute top-full"
    >
      {{ $t(errorMessage) }}
    </span>
  </div>
</template>

<script setup>
import Label from "./Label.vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  id: String,
  label: String,
  wrapperClass: String,
  labelClass: String,
  inputClass: String,
  errorMessage: String,
  modelValue: String,
  required: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
