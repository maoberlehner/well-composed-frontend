<script>
  export default {
    props: [
      `label`,
      `value`,
    ],
  }
</script>

<style lang="scss" scoped>
  @import '~@avalanche/setting-spacings';
  @import 'settings/generic';

  .c-text-input__input {
    display: block;
    width: 100%;
    padding: setting-spacing(xs);
    border: none;
    box-shadow: inset 0 0 1px setting-color(c, gray);
  }
</style>

<template>
  <div class="c-text-input">
    <label class="c-text-input__label" :for="_uid" v-if="label">{{ label }}</label>
    <input class="c-text-input__input" :id="_uid" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>
