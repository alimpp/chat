<template>
  <div class="chat-card">

    <div class="user-role" v-if="props.role === 'user'">
      <div class="d-flex" dir="rtl">
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
    </div>

    <div class="d-flex bot-role" v-if="props.role === 'bot'">
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

  </div>
</template>
//:class="{ user_role: props.role === 'user' }"
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
.chat-card {
  display: flex;
  margin: 10px;
  width: 100%;
  .user-role {
    width: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: end;
  }
  .bot-role {
    border-radius: 5px;
    padding-right: 20px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
