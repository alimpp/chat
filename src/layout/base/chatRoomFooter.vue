<template>
  <div class="chat-room-header d-flex px-4">
    <baseInput style="width:90%;" placeholder="Type message..." icon="pencil" />
    <baseButton class="mx-2" name="Send" color="primary" icon="send" />
  </div>
</template>

<script setup>
import baseInput from "@/components/base/baseInput";
import baseButton from "@/components/base/baseButton";
</script>

<style></style>
