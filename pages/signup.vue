<template>
  <div class="flex flex-col items-center justify-center w-full">
    <div class="flex flex-col">
      <div class="flex flex-col w-full mb-6">
        <h1 class="text-[40px] font-bold mb-0 leading-6">
          Create your account
        </h1>
        <span class="text-[20px] text-[#71717A] mt-2"
          >Unlock all Features!</span
        >
      </div>
      <TheInput v-model="authStore.username" placeholder="Username" />
      <TheInput v-model="authStore.email" placeholder="Email" />
      <TheInput
        v-model="authStore.password"
        placeholder="Password"
        type="password"
      />
      <TheInput
        v-model="authStore.confirmPassword"
        placeholder="Confirm Password"
        type="password"
      />
      <div class="mb-5">
        <label class="custom-checkbox">
          <input
            type="checkbox"
            class="hidden-checkbox"
            v-model="authStore.isAccept"
          />
          <span class="checkmark"></span>
        </label>
        <span class="ml-7">
          Accept
          <NuxtLink
            class="text-[#8098F9] hover:text-[#6172F3] transition-colors duration-300 ease-in-out"
            to="https://twitter.com/nuxt_js"
            target="_blank"
            >terms and conditions</NuxtLink
          >
        </span>
      </div>

      <TheButton
        text="SIGN UP"
        :disabled="isSignUpDisabled"
        @click="handleSignup"
        >Sign Up</TheButton
      >
    </div>

    <span class="mt-4"
      >You have account?
      <NuxtLink
        class="text-[#8098F9] font-bold hover:text-[#6172F3] transition-colors duration-300 ease-in-out"
        to="/login"
        >Login now</NuxtLink
      ></span
    >
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.store";
import TheInput from "../components/TheInput.vue";
import TheButton from "../components/TheButton.vue";

const authStore = useAuthStore();

const router = useRouter();
const username = computed(() => authStore.username);
const email = computed(() => authStore.email);
const password = computed(() => authStore.password);
const confirmPassword = computed(() => authStore.confirmPassword);
const isAccept = computed(() => authStore.isAccept);

definePageMeta({
  layout: "auth-layout",
});

const isSignUpDisabled = computed(() => {
  return !(
    username.value.length &&
    email.value.length &&
    password.value.length &&
    confirmPassword.value === password.value &&
    isAccept.value
  );
});

const hasFormChanges = computed(() => {
  return (
    username.value.length > 0 ||
    email.value.length > 0 ||
    password.value.length > 0 ||
    confirmPassword.value.length > 0 ||
    isAccept.value
  );
});

onBeforeRouteLeave((to, from, next) => {
  if (
    to.path === "/login" &&
    hasFormChanges.value &&
    !window.confirm(
      "Вы уверены, что хотите покинуть страницу? Все несохранённые данные будут потеряны."
    )
  ) {
    next(false);
  } else {
    next();
    if (to.path === "/login") {
      authStore.username = "";
      authStore.email = "";
      authStore.password = "";
      authStore.confirmPassword = "";
      authStore.isAccept = false;
    } else {
      authStore.password = "";
      authStore.confirmPassword = "";
    }
  }
});

const handleSignup = async () => {
  const isSuccess = await authStore.signUp();
  if (isSuccess) {
    router.push({ path: "/otp", query: { email: email.value } });
  } else {
    // Здесь можно обработать ошибки
  }
};
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
  transition: border-color 0.3s;
}

.custom-checkbox .checkmark:hover:not(:checked) {
  border-color: #6172f3;
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
