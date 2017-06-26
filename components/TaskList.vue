<template>
  <ul class="c-task-list">
    <li class="c-task-list__item" v-for="task in tasks" :task="task" :key="task.id">
      <wcf-task-widget :task="task"></wcf-task-widget>
    </li>
  </ul>
</template>

<script>
import WcfTaskWidget from './TaskWidget.vue';

export default {
  props: [
    `tasks`,
  ],
  components: {
    WcfTaskWidget,
  },
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-colors';
@import '~@avalanche/setting-spacings';
@import '../assets/scss/settings/generic';

.c-task-list {
  padding-left: 0;
  list-style-type: none;
}

.c-task-list__item {
  &:not(:last-child) {
    margin-bottom: setting-spacing(xs);
    padding-bottom: setting-spacing(xs);
    border-bottom: 1px solid setting-color(a, gray);
  }
}
</style>
