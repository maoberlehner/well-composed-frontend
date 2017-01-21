<script>
  import { mapGetters } from 'vuex';
  import TaskListItem from './TaskListItem.vue';

  export default {
    computed: mapGetters([`tasks`]),
    data() {
      return {
        newTaskTitle: ``,
        newTaskProgress: 0,
      };
    },
    components: {
      TaskListItem,
    },
    methods: {
      addTask() {
        if (this.newTaskTitle.length) {
          this.$store.dispatch(`addTask`, {
            title: this.newTaskTitle,
            progress: this.newTaskProgress,
          });

          this.newTaskTitle = ``;
          this.newTaskProgress = 0;
        }
      },
    },
  };
</script>

<template>
  <div class="c-task-list">
    <h1>TaskList</h1>
    <ul>
      <task-list-item v-for="task in tasks" :task="task"></task-list-item>
    </ul>
    <input v-model="newTaskTitle">
    <input v-model="newTaskProgress">
    <button @click="addTask">Add task</button>
  </div>
</template>
