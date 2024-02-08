<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col">
      <TheInput v-model="username" placeholder="Username" />
      <TheInput v-model="email" placeholder="Email" />
      <TheInput v-model="password" placeholder="Password" type="password" />
      <TheInput
        v-model="confirmPassword"
        placeholder="Confirm Password"
        type="password"
      />
      <div class="mb-6">
        <label class="custom-checkbox">
          <input type="checkbox" class="hidden-checkbox" />
          <span class="checkmark"></span>
        </label>
        <span class="ml-7">
          Accept
          <NuxtLink
            class="text-[#8098F9] font-bold hover:text-[#6b82d6] transition-colors duration-300 ease-in-out"
            to="https://twitter.com/nuxt_js"
            target="_blank"
            >terms and conditions</NuxtLink
          >
        </span>
      </div>

      <TheButton text="SIGN UP" :disabled="isSignUpDisabled" @click="signUp"
        >Sign Up</TheButton
      >
    </div>

    <span
      >You have account?
      <NuxtLink
        class="text-[#8098F9] font-bold hover:text-[#6b82d6] transition-colors duration-300 ease-in-out"
        to="/login"
        >Login now</NuxtLink
      ></span
    >
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
  return (
    !username.value || !email.value || !password.value || !confirmPassword.value
  );
});
watch(isSignUpDisabled, (newVal, oldVal) => {
  console.log("isSignUpDisabled changed from", oldVal, "to", newVal);
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

<style scoped>
.custom-checkbox {
  position: relative;
  cursor: pointer;
}

.hidden-checkbox {
  position: absolute;
  opacity: 0;
}

.custom-checkbox .checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 2px solid #8098f9;
  border-radius: 2px;
  transition: background-color 0.3s, border-color 0.3s;
}

.custom-checkbox .checkmark:hover:not(:checked) {
  border-color: #6b82d6;
}

.hidden-checkbox:checked + .checkmark:hover {
  border-color: #8098f9;
}

.hidden-checkbox:checked + .checkmark {
  background-color: #8098f9;
}

.custom-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.hidden-checkbox:checked + .checkmark:after {
  display: block;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>
