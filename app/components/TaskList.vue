<script>
  import { mapGetters } from 'vuex';
  import CustomButton from './Button.vue';
  import TaskWidget from './TaskWidget.vue';

  const validateTask = (task) => {
    if (task.title.length < 1) return false;
    return true;
  };

  export default {
    computed: mapGetters([`allTasks`]),
    data() {
      return {
        newTaskTitle: ``,
        newTaskProgress: 0,
      };
    },
    components: {
      CustomButton,
      TaskWidget,
    },
    methods: {
      addTask() {
        const newTask = {
          title: this.newTaskTitle,
          progress: this.newTaskProgress,
        };
        if (validateTask(newTask)) {
          this.$store.dispatch(`ADD_TASK`, newTask);
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
      <li v-for="task in allTasks">
        <task-widget :task="task"></task-widget>
      </li>
    </ul>
    <input v-model="newTaskTitle">
    <input v-model="newTaskProgress">
    <custom-button @buttonClick="addTask">Add task</custom-button>
  </div>
</template>
