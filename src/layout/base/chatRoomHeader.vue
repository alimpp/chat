<template>
  <div
    class="chat-room-header d-flex px-2 pt-1 mx-4"
    :class="{
      chat_room_header_dark_mode_theme: watchTheme === 'dark',
      chat_room_header_light_mode_theme: watchTheme === 'light',
    }"
  >
    <div class="d-flex w-50">
      <img :src="roomList.image" alt="image" />
      <span class="primary_color size_s px-2 pt-3">{{ roomList.name }}</span>
    </div>
    <div class="w-50 d-flex align-items-center justify-content-end">
      <themeSwitcher />
    </div>
  </div>
</template>

<script setup>
import { computed, watch, onMounted, ref } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
import themeSwitcher from "@/components/themeSwitcher";
const theme = applicationTheme();

const roomList = ref({
  name: "Chat Bot",
  text: "Hello i am chat bot",
  image:
    "https://www.mundodeportivo.com/urbantecno/hero/2018/06/Bots-Twitter.jpg?width=1200",
});

const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>
.chat-room-header {
  width: 96%;
  height: 10vh;
  border-radius: 0 0 10px 10px;
  box-shadow: 1px 1px 1px 1px rgba(104, 82, 228, 0.37);
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
</style>
