<template>
  <div
    :class="{
      'c-form-message': true,
      'c-form-message--success': isSuccess,
      'c-form-message--error': isError,
      'c-form-message--warning': isWarning,
      'c-form-message--info': isInfo,
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: `AppMessage`,
  computed: {
    isSuccess() { return this.type === `success`; },
    isError() { return this.type === `error`; },
    isWarning() { return this.type === `warning`; },
    isInfo() { return this.type === `info`; },
  },
  props: {
    type: {
      type: String,
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
