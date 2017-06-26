<template>
  <button class="c-button" @click="handleClickEvent">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    handleClickEvent() {
      this.$emit(`cButtonClick`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/settings/generic';
@import '~@avalanche/component-button';
</style>
