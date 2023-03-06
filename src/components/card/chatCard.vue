<template>
  <baseCard>
    <template #cardContent>
      <div class="d-flex" :class="{ user_role: props.role === 'user' }">
        <img
          v-if="props.role === 'user'"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
          alt="image"
          class="mt-2 mx-3"
        />
        <img
          v-else
          src="https://www.mundodeportivo.com/urbantecno/hero/2018/06/Bots-Twitter.jpg?width=1200"
          alt="image"
          class="mt-2 mx-3"
        />
        <div class="d-flex flex-column pt-3">
          <span class="size_v_s primary_color">{{ name }}</span>
          <p class="size_v_s">{{ message }}</p>
        </div>
      </div>
    </template>
  </baseCard>
</template>

<script setup>
import baseCard from "@/components/base/baseCard";

const props = defineProps({
  id: {
    type: Number,
    default: 0,
    required: true,
  },
  role: {
    type: String,
    default: "",
    required: true,
  },
  name: {
    type: String,
    default: "",
    required: true,
  },
  message: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<style scoped lang="scss">
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user_role {
  direction: rtl;
}
</style>
