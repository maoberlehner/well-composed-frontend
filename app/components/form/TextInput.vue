<script>
  export default {
    props: [
      `value`
    ],
  }
</script>

<style lang="scss" scoped>
  @import '~@avalanche/setting-spacings';
  @import 'settings/generic';

  .c-text-input {
    padding: setting-spacing(xs);
    border: none;
    box-shadow: inset 0 0 1px setting-color(c, gray);
  }
</style>

<template>
  <input class="c-text-input" :value="value" @input="$emit('input', $event.target.value)">
</template>
