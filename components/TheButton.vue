<template>
  <button :class="buttonClasses">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  disabled: {
    type: Boolean,
    default: false,
  },
});

const buttonClasses = computed(() => [
  "w-[453px] h-[64px] rounded-lg text-white font-bold py-2 px-4 transition-opacity duration-300 ease-in-out",
  props.disabled
    ? "bg-[#8098F980] cursor-default"
    : "bg-[#6172F3] opacity-90 hover:opacity-100 cursor-pointer",
]);
</script>
