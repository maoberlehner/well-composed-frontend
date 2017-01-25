<script>
  import { mapGetters } from 'vuex';
  import CustomButton from '../components/Button.vue';
  import TaskList from '../components/TaskList.vue';

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
      TaskList,
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
    prefetch(store) {
      return store.dispatch(`FETCH_TASKS`);
    },
  };
</script>

<template>
  <div class="c-rewarder">
    <task-list :tasks="allTasks"></task-list>
    <input v-model="newTaskTitle">
    <input v-model="newTaskProgress">
    <custom-button @cButtonClick="addTask">Add task</custom-button>
  </div>
</template>
