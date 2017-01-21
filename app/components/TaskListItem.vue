<script>
  import TaskWidget from './TaskWidget.vue';

  export default {
    props: [
      `task`,
    ],
    components: {
      TaskWidget,
    },
  };
</script>

<template>
  <li class="c-task-list-item">
    <task-widget :task="task"></task-widget>
  </li>
</template>
