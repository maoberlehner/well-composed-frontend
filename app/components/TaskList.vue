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
  .c-task-list {
    padding-left: 0;
    list-style-type: none;
  }
</style>

<template>
  <ul class="c-task-list">
    <li v-for="task in tasks">
      <task-widget :task="task"></task-widget>
    </li>
  </ul>
</template>
