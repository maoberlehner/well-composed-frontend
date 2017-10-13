<template>
  <div class="c-form-input">
    <slot name="top"></slot>
    <input
      class="c-form-input__input"
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: `AppInput`,
  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
    },
    value: {
      type: [String, Number],
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-spacings';
@import '~@avalanche/setting-colors';
@import '../../assets/scss/settings/generic';

.c-form-input {
  &__input {
    display: block;
    padding: setting-spacing(xs);
    width: 100%;
    border: none;
    box-shadow: inset 0 0 1px setting-color(c, gray);
  }
}
</style>
