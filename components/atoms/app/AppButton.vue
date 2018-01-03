<template>
  <button class="c-app-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: `AppButton`,
};
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/settings/generic';
@import '{ .c-button as .c-app-button } from ~@avalanche/component-button';
</style>
