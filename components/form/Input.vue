<template>
  <div class="c-form-input">
    <label class="c-form-input__label" :for="_uid" v-if="label">{{ label }}</label>
    <input class="c-form-input__input" :id="_uid" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: `FormInput`,
  props: [
    `label`,
    `value`,
  ],
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-spacings';
@import '~@avalanche/setting-colors';
@import '../../assets/scss/settings/generic';

.c-form-input__input {
  display: block;
  padding: setting-spacing(xs);
  width: 100%;
  border: none;
  box-shadow: inset 0 0 1px setting-color(c, gray);
}
</style>
