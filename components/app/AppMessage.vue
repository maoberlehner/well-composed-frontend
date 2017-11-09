<template>
  <div
    class="c-form-message"
    :class="{
      [`c-form-message--${type}`]: type,
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: `AppMessage`,
  props: {
    type: {
      type: String,
      default: `info`,
    },
  },
};
</script>

<style lang="scss" scoped>
.c-form-message {
  &--error {
    color: red;
  }
}
</style>
