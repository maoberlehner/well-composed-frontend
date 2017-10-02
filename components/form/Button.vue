<template>
  <button class="c-button" @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: `FormButton`,
  methods: {
    click() {
      this.$emit(`click`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings/generic';
// Selector importing does not work because of
// https://github.com/vuejs/vue-loader/issues/673
// as a workaround we're using the `c-button` class above.
@import '{ .c-button as .c-form-button } from ~@avalanche/component-button';
</style>
