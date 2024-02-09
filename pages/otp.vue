<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex flex-col items-center">
      <div class="flex flex-col w-full mb-6">
        <h1 class="text-[40px] font-bold mb-0 leading-6">Enter OTP</h1>
        <span class="text-[20px] text-[#71717A] mt-2"
          >Sent OTP on
          <span class="text-[#8098F9] font-bold">{{ email }}</span></span
        >
        <span
          @click="handleBackToSignup"
          class="text-[#8098F9] font-bold hover:text-[#6172F3] transition-colors duration-300 ease-in-out cursor-pointer"
          >Change email</span
        >
      </div>
      <div class="flex gap-5 mb-6">
        <input
          v-for="index in 6"
          :key="index"
          class="otp-input"
          type="text"
          maxlength="1"
          placeholder="-"
          v-model="otp[index - 1]"
          @input="handleInput(index)"
          @paste.prevent="handlePaste"
          ref="otpInput"
        />
      </div>
      <TheButton
        text="SUBMIT"
        @click="handleConfirmed"
        :disabled="isSubmitDisabled"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth-layout",
});

const otp = reactive(["", "", "", "", "", ""]);
const otpInput = ref([]);
const route = useRoute();
const email = route.query.email;
const router = useRouter();

const isSubmitDisabled = computed(() => {
  return otp.some((value) => value.length !== 1);
});

const focusNextInput = (index) => {
  nextTick(() => {
    if (index < 6 && otpInput.value[index]) {
      otpInput.value[index].focus();
    }
  });
};

const handleInput = (index) => {
  if (otp[index - 1].length === 1) {
    focusNextInput(index);
  }
};

const handlePaste = (event) => {
  const pasteData = event.clipboardData.getData("text").slice(0, 6);
  pasteData.split("").forEach((char, index) => {
    otp[index] = char;
  });
  focusNextInput(pasteData.length);
};

const handleConfirmed = () => {
  localStorage.setItem("isConfirmed", true);
  router.push("/");
};

const handleBackToSignup = () => {
  localStorage.clear("authToken");
  router.push("/signup");
};
</script>

<style scoped>
.otp-input {
  @apply w-16 h-16 text-center text-2xl rounded-lg border-2 outline-0 text-[#2D31A633] placeholder-[#2D31A633];
  --tw-border-opacity: 0.5;
  border-color: rgba(128, 152, 249, var(--tw-border-opacity));
  --tw-bg-opacity: 0.1;
  background-color: rgba(128, 152, 249, var(--tw-bg-opacity));
}

.otp-input:hover {
  --tw-border-opacity: 0.6;
  --tw-bg-opacity: 0.2;
}

.otp-input:focus-within {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 0.2;
}
</style>
