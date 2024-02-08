<template>
  <div>
    <form>
      <TheInput v-model="username" placeholder="Username" />
      <TheInput v-model="email" placeholder="Email" />
      <TheInput v-model="password" placeholder="Password" type="password" />
      <TheInput
        v-model="confirmPassword"
        placeholder="Confirm Password"
        type="password"
      />
      <TheButton :disabled="isSignUpDisabled" @click="signUp"
        >Sign Up</TheButton
      >
      <input type="checkbox" />
      <span
        >Accept
        <NuxtLink to="https://twitter.com/nuxt_js" target="_blank">
          terms and conditions
        </NuxtLink>
      </span>
    </form>

    <span>You have account? <NuxtLink to="/login">Login now</NuxtLink></span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import TheInput from "../components/TheInput.vue";
import TheButton from "../components/TheButton.vue";

definePageMeta({
  layout: "auth-layout",
});

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const isSignUpDisabled = computed(() => {
  return !email.value || !password.value || !confirmPassword.value;
});

const hasFormChanges = computed(() => {
  return (
    username.value.length > 0 ||
    email.value.length > 0 ||
    password.value.length > 0 ||
    confirmPassword.value.length > 0
  );
});

onBeforeRouteLeave((to, from, next) => {
  console.log(username.value);

  if (
    hasFormChanges.value &&
    !window.confirm(
      "Вы уверены, что хотите покинуть страницу? Все несохранённые данные будут потеряны."
    )
  ) {
    next(false);
  } else {
    next();
  }
});

function signUp() {
  // Функция регистрации
}
</script>
