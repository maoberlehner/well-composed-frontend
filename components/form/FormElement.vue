<template>
  <div class="c-form-element">
    <slot name="start"></slot>
    <div class="c-form-element__field">
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

.c-form-element {
  &__field:not(:first-child) {
    margin-top: setting-spacing(xs);
  }
}
</style>
