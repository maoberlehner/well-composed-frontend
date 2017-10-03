<template>
  <div :class="{ 'c-form-message': true, 'c-form-message--error': type === 'error' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: `FormMessage`,
  props: [
    `type`,
  ],
};
</script>

<style lang="scss" scoped>
.c-form-message--error {
  color: red;
}
</style>
