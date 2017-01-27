<script>
  import TaskWidget from './TaskWidget.vue';

  export default {
    props: [
      `tasks`,
    ],
    components: {
      TaskWidget,
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@avalanche/setting-spacings';
  @import 'settings/generic';

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

<template>
  <ul class="c-task-list">
    <li class="c-task-list__item" v-for="task in tasks">
      <task-widget :task="task"></task-widget>
    </li>
  </ul>
</template>
