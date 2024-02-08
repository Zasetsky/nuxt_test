<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex flex-col items-center">
      <h1 class="text-[40px] font-bold mb-5">Login to your Account</h1>
      <div class="flex w-full items-center justify-between mb-6">
        <div class="w-[120px] h-[1px] bg-[#71717A]"></div>
        <span class="text-[15px]">with email</span>
        <div class="w-[120px] h-[1px] bg-[#71717A]"></div>
      </div>
      <TheInput v-model="authStore.email" placeholder="Email" />
      <TheInput
        v-model="authStore.password"
        placeholder="Password"
        type="password"
      />
      <TheButton
        class="mt-4"
        text="LOG IN"
        @click="authStore.login()"
        :disabled="email.length === 0 || password.length === 0"
        >Log In</TheButton
      >
      <span class="mt-4"
        >Don’t have account?
        <NuxtLink
          class="text-[#8098F9] font-bold hover:text-[#6172F3] transition-colors duration-300 ease-in-out"
          to="/signup"
          @click="resetFields"
          >Create an account</NuxtLink
        >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheInput from "../components/TheInput.vue";
import TheButton from "../components/TheButton.vue";
import { useAuthStore } from "~/stores/auth.store";

definePageMeta({
  layout: "auth-layout",
});

const authStore = useAuthStore();
const email = computed(() => authStore.email);
const password = computed(() => authStore.password);

const resetFields = () => {
  authStore.email = "";
  authStore.password = "";
};
</script>
