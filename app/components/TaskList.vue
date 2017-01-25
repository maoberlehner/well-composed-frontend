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

<template>
  <div class="c-task-list">
    <h1>TaskList</h1>
    <ul>
      <li v-for="task in tasks">
        <task-widget :task="task"></task-widget>
      </li>
    </ul>
  </div>
</template>
