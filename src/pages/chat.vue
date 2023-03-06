<template>
  <div
    class="home-page d-flex flex-column justify-content-center align-items-center pt-5 px-5 application_animation"
  >
    <h3 class="primary_color size_v_me">{{ $t("message") }}</h3>
    <p class="size_v_s">{{ $t("lorem") }}</p>
  </div>
</template>

<script setup>
import { computed , onMounted } from "vue";
import { randomString } from "@/plugins/randomString";
import { randomNumber } from "@/utils/randomNumber";
import {SuccessNotification} from '@/services/applicationNotification'
const RandomString = computed(() => {
  return randomString(1000);
});

const RandomNumber = computed(() => {
  return randomNumber(100000000);
});

onMounted(() => {
  console.log("jhghg");
  SuccessNotification(3000 , 'Welcome to vue app...!' , 'bottom-center')
})
</script>

<style lang="scss" scoped></style>
