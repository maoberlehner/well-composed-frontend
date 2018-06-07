<template>
  <div
    :class="{
      [$options.name]: true,
      [`${$options.name}--${type}`]: type,
    }"
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
.FormMessage {
  &--error {
    color: red;
  }
}
</style>
