<template>
  <div
    class="base-card-container"
    :class="{
      base_card_dark_mode_theme: watchTheme === 'dark',
      base_card_light_mode_theme: watchTheme === 'light',
    }"
  >
    <slot name="cardContent"></slot>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { applicationTheme } from "@/services/applicationTheme";
const theme = applicationTheme();
const watchTheme = computed(() => {
  return theme.themeStatus;
});
const props = defineProps({
  width: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.base-card-container {
  transition: 1s;
  border-radius: 5px;
  margin: 10px 0;
  overflow: hidden;
  box-shadow: 1px 1px 1px 1px rgba(104, 82, 228, 0.37);
}
</style>
