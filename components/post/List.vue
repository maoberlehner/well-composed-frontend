<template>
  <ul class="c-post-list">
    <li class="c-post-list__item" v-for="post in posts" :key="post.id">
      <post-widget :post="post"></post-widget>
    </li>
  </ul>
</template>

<script>
import PostWidget from './Widget.vue';

export default {
  name: `PostList`,
  props: [
    `posts`,
  ],
  components: {
    PostWidget,
  },
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-colors';
@import '~@avalanche/setting-spacings';
@import '../../assets/scss/settings/generic';

.c-post-list {
  padding-left: 0;
  list-style-type: none;
}

.c-post-list__item {
  &:not(:last-child) {
    margin-bottom: setting-spacing(xs);
    padding-bottom: setting-spacing(xs);
    border-bottom: 1px solid setting-color(a, gray);
  }
}
</style>
