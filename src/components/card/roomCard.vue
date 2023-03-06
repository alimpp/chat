<template>
  <baseCard>
    <template #cardContent>
        <div class="d-flex py-2 px-2">
            <img :src="image" alt="image">
            <div class="d-flex flex-column pt-2 px-3">
                <span class="size_s primary_color">{{ name }}</span>
                <p class="size_v_s gray_color">{{ text }}</p>
            </div>
        </div>
    </template>
  </baseCard>
</template>

<script setup>
import baseCard from "@/components/base/baseCard";

const props = defineProps({
    name: {
      type: String,
      default: "",
      required: true,
    },
    text: {
      type: String,
      default: "",
      required: true,
    },
    image: {
      type: String,
      default: "",
      required: true,
    },
  });
</script>

<style scoped lang="scss">
img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
</style>
