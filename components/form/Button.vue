<template>
  <button class="c-form-button" @click="click">
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
@import '{ .c-button as .c-form-button } from ~@avalanche/component-button';
</style>
