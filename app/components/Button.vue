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
    background: setting-color(a);
    border: none;
    color: setting-color(a, contrast);
    cursor: pointer;
    outline: none;
  }

  .c-button--negative {
    background: setting-color(negative, alert);
    color: #fff;
  }
</style>

<template>
  <button class="c-button" @click="handleClickEvent">
    <span class="c-button__icon c-button__icon--before" v-if="this.$slots['icon-before']">
      <slot name="icon-before"></slot>
    </span>
    <slot></slot>
    <span class="c-button__icon c-button__icon--after" v-if="this.$slots['icon-after']">
      <slot name="icon-after"></slot>
    </span>
  </button>
</template>
