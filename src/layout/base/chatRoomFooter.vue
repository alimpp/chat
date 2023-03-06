<template>
  <div class="chat-room-header d-flex px-4">
    <baseInput
      style="width: 90%"
      placeholder="Type message..."
      icon="pencil"
      v-model="message"
    />
    <baseButton
      @click="sendMessage"
      class="mx-2"
      name="Send"
      color="primary"
      icon="send"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ErrorNotification } from "@/services/applicationNotification";
import baseInput from "@/components/base/baseInput";
import baseButton from "@/components/base/baseButton";
import { SendMessage } from "@/api/chatApi";
import { BotMessage } from "@/api/chatApi";
import { allMessages } from "@/api/chatApi";

const message = ref("");

const sendMessage = () => {
  if (message.value === "") {
    ErrorNotification(2000, "Please Type Message", "bottom-center");
  } else {
    SendMessage(message.value);
    allMessages();
    message.value = ''
    setTimeout(() => {
      BotMessage();
      allMessages();
    }, 3000);
  }
};
</script>

<style></style>
