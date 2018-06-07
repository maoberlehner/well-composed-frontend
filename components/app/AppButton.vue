<template>
  <button :class="$options.name">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: `AppButton`,
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings/generic';
@import '{ .c-button as .AppButton } from ~@avalanche/component-button';
</style>
