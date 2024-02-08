<template>
  <div class="input-wrapper relative">
    <PersonIcon v-if="isPersonIconVisible" class="icon" />
    <EnvelopeIcon v-if="isEnvelopeIconVisible" class="icon" />
    <ShieldIcon v-if="isShieldIconVisible" class="icon" />
    <input class="input" :type="type" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import PersonIcon from "../assets/icons/auth/PersonIcon.vue";
import EnvelopeIcon from "../assets/icons/auth/EnvelopeIcon.vue";
import ShieldIcon from "../assets/icons/auth/ShieldIcon.vue";
import EyeIcon from "~/assets/icons/auth/EyeIcon.vue";

const props = defineProps({
  placeholder: String,
  type: String,
});

const isPersonIconVisible = computed(() => props.placeholder === "Username");
const isEnvelopeIconVisible = computed(() => props.placeholder === "Email");
const isShieldIconVisible = computed(
  () =>
    props.placeholder === "Password" || props.placeholder === "Confirm Password"
);
</script>

<style scoped>
.input-wrapper {
  @apply flex items-center w-[453px] h-[64px] rounded-lg border bg-[#8098F980] border-[#8098F980];
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
</style>
