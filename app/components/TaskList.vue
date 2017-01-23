<script>
  import { mapGetters } from 'vuex';
  import TaskWidget from './TaskWidget.vue';

  const validateTask = (task) => {
    if (task.title.length < 1) return false;
    return true;
  };

  export default {
    computed: mapGetters([`tasks`]),
    data() {
      return {
        newTaskTitle: ``,
        newTaskProgress: 0,
      };
    },
    components: {
      TaskWidget,
    },
    methods: {
      addTask() {
        const newTask = {
          title: this.newTaskTitle,
          progress: this.newTaskProgress,
        };
        if (validateTask(newTask)) {
          this.$store.dispatch(`addTask`, newTask);
          this.clearNewTaskData();
        }
      },
      clearNewTaskData() {
        this.newTaskTitle = ``;
        this.newTaskProgress = 0;
      },
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
    <input v-model="newTaskTitle">
    <input v-model="newTaskProgress">
    <button @click="addTask">Add task</button>
  </div>
</template>
