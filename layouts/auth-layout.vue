<template>
  <div class="flex justify-center items-center h-screen">
    <slot />
    <div class="bg-[#6172F3] w-full h-screen overflow-hidden">
      <div class="flex flex-col items-center justify-center w-full h-full">
        <div
          class="circle-1 w-[606px] h-[606px] rounded-full flex items-center justify-center relative"
        >
          <div class="circle-2 w-[528px] h-[528px] rounded-full"></div>

          <LoginLayoutIcon v-if="$route.path === '/login'" class="icon" />
          <SignupLayoutIcon
            v-else-if="$route.path === '/signup'"
            class="icon top-24 left-0"
          />
          <OtpLayoutIcon v-if="$route.path === '/otp'" class="icon" />
        </div>
        <div class="text-center">
          <span class="block text-[20px] font-bold text-[#E0EAFF]">{{
            text_t
          }}</span>
          <span class="block text-[#E0EAFF] opacity-75">{{ text_b }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginLayoutIcon from "~/assets/icons/auth/LoginLayoutIcon.vue";
import SignupLayoutIcon from "~/assets/icons/auth/SignupLayoutIcon.vue";
import OtpLayoutIcon from "~/assets/icons/auth/OtpLayoutIcon.vue";

const $route = useRoute();

const text_t = computed(() => {
  if ($route.path === "/login") {
    return "Connect with any device.";
  } else if ($route.path === "/signup") {
    return "Join us!";
  } else if ($route.path === "/otp") {
    return "It's just OTP verification";
  }
  return "";
});

const text_b = computed(() => {
  if ($route.path === "/login") {
    return "Everything you need is an internet connection.";
  } else if ($route.path === "/signup") {
    return "Just go through the boring process of creating an account.";
  } else if ($route.path === "/otp") {
    return "You are one step away from recovering your password.";
  }
  return "";
});
</script>

<style scoped>
.circle-1 {
  background: linear-gradient(
      162.74deg,
      rgba(68, 76, 231, 0.162) 6.85%,
      rgba(0, 0, 0, 0) 89.34%
    ),
    radial-gradient(
      50% 50% at 50% 50%,
      rgba(68, 76, 231, 0.162) 0%,
      rgba(68, 76, 231, 0.058) 100%
    );
}
.circle-2 {
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(68, 76, 231, 0.162) 0%,
      rgba(68, 76, 231, 0.058) 100%
    ),
    linear-gradient(
      173.9deg,
      rgba(164, 188, 253, 0.2) 4.83%,
      rgba(68, 76, 231, 0.162) 91.13%
    );
}
.icon {
  position: absolute;
}
</style>
