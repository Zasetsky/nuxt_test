<template>
  <div>Поздравляю вы авторизовались!</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth-middleware"],
  layout: "auth-layout",
});
</script>
