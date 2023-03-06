<template>
  <div
    class="chat-room-list d-flex flex-column py-2 px-3"
    :class="{
      chat_room_list_dark_mode_theme: watchTheme === 'dark',
      chat_room_list_light_mode_theme: watchTheme === 'light',
    }"
  >
    <span class="size_v_m primary_color">CHAT ROOMS</span>
    <roomCard :name="roomList.name" :image="roomList.image" :text="roomList.text" />
  </div>
</template>

<script setup>
import { computed, watch, onMounted, ref } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
import baseInput from "@/components/base/baseInput";
import roomCard from "@/components/card/roomCard";
const theme = applicationTheme();

const roomList = ref(
  {
    name: "Chat Bot",
    text: "Hello i am chat bot",
    image:
      "https://www.mundodeportivo.com/urbantecno/hero/2018/06/Bots-Twitter.jpg?width=1200",
  },
);

const watchTheme = computed(() => {
  return theme.themeStatus;
});
</script>

<style lang="scss" scoped>
.chat-room-list {
  width: 30%;
  height: 100vh;
}
</style>
