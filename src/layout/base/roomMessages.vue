<template>
  <div class="room-messages">
    <div class="chat-room-header">
      <chatRoomHeader />
    </div>
    <div class="messages px-4 py-2">
      <chatCard
        v-for="data in dataSource"
        :key="data.id"
        :id="data.id"
        :name="data.name"
        :role="data.role"
        :message="data.message"
      />
    </div>
    <div class="chat-room-footer">
      <chatRoomFooter />
    </div>
  </div>
</template>

<script setup>
import { computed, watch, onMounted, ref } from "vue";
import chatRoomHeader from "@/layout/base/chatRoomHeader";
import chatRoomFooter from "@/layout/base/chatRoomFooter";
import { chatDataStore } from "@/stores/chatDataStore";
import { allMessages } from "@/api/chatApi";
import chatCard from "@/components/card/chatCard";

const chatDataStoreModule = chatDataStore();

const dataSource = computed(() => {
  return chatDataStoreModule.messages;
});

onMounted(() => {
  allMessages();
});
</script>

<style scoped lang="scss">
.room-messages {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .chat-room-header {
    height: 10vh;
  }
  .messages {
    height: 90vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .chat-room-footer {
    height: 10vh;
  }
}
</style>
