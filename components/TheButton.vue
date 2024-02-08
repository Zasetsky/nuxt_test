<template>
  <button
    :class="buttonClasses"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    @mouseleave="isPressed = false"
  >
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

const isPressed = ref(false);

const buttonClasses = computed(() => {
  let classes = [
    "w-[453px] h-[64px] rounded-lg text-white font-bold py-2 px-4 transition-opacity duration-300 ease-in-out",
    props.disabled
      ? "bg-[#8098F980] cursor-default"
      : "bg-[#6172F3] opacity-90 hover:opacity-100 cursor-pointer",
  ];

  if (isPressed.value && !props.disabled) {
    classes.push("bg-[#7480f5]");
  }

  return classes.join(" ");
});
</script>
