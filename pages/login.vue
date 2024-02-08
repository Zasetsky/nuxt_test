<template>
  <div class="flex flex-col items-center">
    <h1 class="text-[40px] font-bold mb-5">Login to your Account</h1>
    <div class="flex w-full items-center text-[#71717A] justify-between mb-6">
      <div class="w-[120px] h-[1px] bg-[#71717A]"></div>
      <span class="text-[15px]">with email</span>
      <div class="w-[120px] h-[1px] bg-[#71717A]"></div>
    </div>
    <TheInput v-model="email" placeholder="Email" />
    <TheInput v-model="password" placeholder="Password" type="password" />
    <TheButton class="mt-4" text="LOG IN">Log In</TheButton>
    <span class="mt-4"
      >Don’t have account?
      <NuxtLink
        class="text-[#8098F9] font-bold hover:text-[#6172F3] transition-colors duration-300 ease-in-out"
        to="/signup"
        >Create an account</NuxtLink
      >
    </span>
  </div>
</template>

<script setup lang="ts">
import TheInput from "../components/TheInput.vue";
import TheButton from "../components/TheButton.vue";
import { ref } from "vue";

definePageMeta({
  layout: "auth-layout",
});

const email = ref("");
const password = ref("");

function login() {
  // Логика входа
}
</script>

<style scoped>
/* Стилизация страницы входа */
</style>
