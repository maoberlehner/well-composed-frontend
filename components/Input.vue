<template>
  <div class="c-text-input">
    <label class="c-text-input__label" :for="_uid" v-if="label">{{ label }}</label>
    <input class="c-text-input__input" :id="_uid" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: [
    `label`,
    `value`,
  ],
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-spacings';
@import '~@avalanche/setting-colors';
@import '../assets/scss/settings/generic';

.c-text-input__input {
  display: block;
  padding: setting-spacing(xs);
  width: 100%;
  border: none;
  box-shadow: inset 0 0 1px setting-color(c, gray);
}
</style>
