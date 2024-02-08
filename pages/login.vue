<template>
  <div class="login">
    <form @submit.prevent="login">
      <TheInput v-model="email" placeholder="Email" />
      <TheInput v-model="password" placeholder="Password" type="password" />
      <TheButton :disabled="!email || !password">Log In</TheButton>
    </form>
    <span
      >Don’t have account? <NuxtLink to="/signup">Create an account</NuxtLink>
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
