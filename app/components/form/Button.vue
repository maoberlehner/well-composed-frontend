<script>
  export default {
    methods: {
      handleClickEvent() {
        this.$emit('cButtonClick');
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@avalanche/setting-spacings';
  @import 'settings/generic';

  .c-button {
    padding: setting-spacing(xs);
    outline: none;
    border: none;
    background: setting-color(a);
    color: setting-color(a, contrast);
    cursor: pointer;
  }

  .c-button--negative {
    background: setting-color(negative, alert);
    color: #fff;
  }
</style>

<template>
  <button class="c-button" @click="handleClickEvent">
    <slot></slot>
  </button>
</template>
