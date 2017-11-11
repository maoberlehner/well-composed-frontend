<template>
  <ul class="c-list-media">
    <li class="c-list-media__item" v-for="item in items" :key="item.id">
      <slot name="item" v-bind="item"></slot>
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
@import '../../../assets/scss/settings/generic';

.c-list-media {
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
