<template>
  <ul :class="$options.name">
    <li v-for="item in items" :key="item.id" :class="`${$options.name}__item`">
      <slot v-bind="item" name="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: `ListMedia`,
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-colors';
@import '~@avalanche/setting-spacings';
@import '../../assets/scss/settings/generic';

.ListMedia {
  padding-left: 0;
  list-style-type: none;

  &__item {
    &:not(:last-child) {
      margin-bottom: setting-spacing(xs);
      padding-bottom: setting-spacing(xs);
      border-bottom: 1px solid setting-color(a, gray);
    }
  }
}
</style>
