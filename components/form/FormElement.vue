<template>
  <div :class="$options.name">
    <slot name="start"></slot>
    <div :class="`${$options.name}__field`">
      <slot></slot>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<script>
export default {
  name: `FormElement`,
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-spacings';
@import '../../assets/scss/settings/generic';

.FormElement {
  &__field:not(:first-child) {
    margin-top: setting-spacing(xs);
  }
}
</style>
