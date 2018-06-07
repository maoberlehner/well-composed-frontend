<template>
  <input
    :class="$options.name"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: `FormInput`,
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-spacings';
@import '~@avalanche/setting-colors';
@import '../../assets/scss/settings/generic';

.FormInput {
  display: block;
  padding: setting-spacing(xs);
  width: 100%;
  border: none;
  box-shadow: inset 0 0 1px setting-color(c, gray);
}
</style>
