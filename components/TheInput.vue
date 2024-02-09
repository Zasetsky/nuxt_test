<template>
  <div class="input-wrapper" @click="setFocus">
    <PersonIcon v-if="isPersonIconVisible" class="icon" />
    <EnvelopeIcon v-if="isEnvelopeIconVisible" class="icon" />
    <ShieldIcon v-if="isShieldIconVisible" class="icon" />
    <EyeIcon
      @click.stop="isPasswordVisibled = !isPasswordVisibled"
      :class="{ visible: isPasswordVisibled }"
      v-if="isShieldIconVisible"
      class="icon-eye"
    />

    <input
      ref="inputElement"
      class="input"
      :type="isPasswordVisibled ? 'text' : type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput($event)"
    />
  </div>
</template>

<script setup lang="ts">
import PersonIcon from "../assets/icons/auth/PersonIcon.vue";
import EnvelopeIcon from "../assets/icons/auth/EnvelopeIcon.vue";
import ShieldIcon from "../assets/icons/auth/ShieldIcon.vue";
import EyeIcon from "~/assets/icons/auth/EyeIcon.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: String,
  placeholder: String,
  type: String,
});

const inputElement = ref<HTMLElement | null>(null);
const isPasswordVisibled = ref(false);

const isPersonIconVisible = computed(() => props.placeholder === "Username");
const isEnvelopeIconVisible = computed(() => props.placeholder === "Email");
const isShieldIconVisible = computed(
  () =>
    props.placeholder === "Password" || props.placeholder === "Confirm Password"
);

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target && target.value !== undefined) {
    emit("update:modelValue", target.value);
  }
}

function setFocus() {
  inputElement.value?.focus();
}
</script>

<style scoped>
.input-wrapper {
  @apply cursor-text relative flex items-center w-[453px] h-[64px] rounded-lg border-2 mb-2.5;
  --tw-border-opacity: 0.5;
  border-color: rgba(128, 152, 249, var(--tw-border-opacity));
  --tw-bg-opacity: 0.1;
  background-color: rgba(128, 152, 249, var(--tw-bg-opacity));
}

.input {
  @apply w-full bg-transparent border-none outline-none text-[#2D31A633] placeholder-[#2D31A633] ml-12;
  --tw-text-opacity: 0.2;
  color: rgba(45, 49, 166, var(--tw-text-opacity));
  font-size: 18px;
}

.icon {
  @apply absolute left-0 ml-2.5;
}

.icon-eye {
  @apply absolute right-0 mr-5 cursor-pointer;
  opacity: 0.2;
}

.input-wrapper,
.icon-eye {
  transition: all 0.3s ease;
}

.icon-eye:hover {
  opacity: 0.5;
}

.icon-eye.visible {
  opacity: 0.7;
}

.input-wrapper:hover {
  --tw-border-opacity: 0.7;
  --tw-bg-opacity: 0.2;
}

.input-wrapper:focus-within {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 0.2;
}
</style>
