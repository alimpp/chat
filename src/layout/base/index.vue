<template>
  <div class="index-layout">
    <chatRoomList />
    <roomMessages />
  </div>
</template>

<script setup>
import chatRoomList from "@/layout/base/chatRoomList";
import roomMessages from "@/layout/base/roomMessages";
</script>

<style lang="scss" scoped>
.index-layout {
  width: 100%;
  display: flex;
}
</style>
