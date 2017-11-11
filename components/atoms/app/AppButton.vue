<template>
  <button class="c-button">
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
// Selector importing does not work because of
// https://github.com/vuejs/vue-loader/issues/673
// as a workaround we're using the `c-button` class above.
@import '{ .c-button as .c-app-button } from ~@avalanche/component-button';
</style>
