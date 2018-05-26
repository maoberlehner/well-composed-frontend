<template>
  <div
    :class="{
      [`c-form-message--${type}`]: type,
    }"
    class="c-form-message"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: `FormMessage`,
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
