<template>
  <div class="base-input-container">
    <i
      class="dark_color bi"
      :class="{
        'bi-person': username,
        'bi-eye-slash': password,
        'bi-person-lines-fill': name,
        'bi-gender-ambiguous': gender,
        'bi-envelope-at': email,
        'bi-pencil': pencil,
      }"
    ></i>
    <input
      ref="input"
      class="form-control px-4 size_v_s pt-2"
      :class="{ error: hasError }"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="hasError" class="text-error">{{ textError }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
const username = computed(() => {
  if (props.icon === "username") {
    return true;
  }
});
const password = computed(() => {
  if (props.icon === "password") {
    return true;
  }
});
const name = computed(() => {
  if (props.icon === "name") {
    return true;
  }
});
const gender = computed(() => {
  if (props.icon === "gender") {
    return true;
  }
});
const email = computed(() => {
  if (props.icon === "email") {
    return true;
  }
});
const pencil = computed(() => {
  if (props.icon === "pencil") {
    return true;
  }
});
const props = defineProps({
  type: {
    type: String,
    default: "",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  hasError: {
    type: Boolean,
    default: false,
    required: false,
  },
  textError: {
    type: String,
    default: "",
    required: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.base-input-container {
  display: flex;
  flex-direction: column;
  i {
    font-size: 12px;
    position: absolute;
    z-index: 1;
    margin: 7px 6px;
  }
  .error {
    border: 1px solid #ff4d4f;
  }
  .text-error {
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 21px;
    color: #ff4d4f;
  }
}
</style>
