<script>
  import { mapGetters } from 'vuex';
  import CustomButton from '../components/Button.vue';
  import TaskList from '../components/TaskList.vue';
  import Headline from '../components/Headline.vue';

  const validateTask = (task) => {
    if (task.title.length < 1) return false;
    return true;
  };

  export default {
    computed: mapGetters([
      `completedTasks`,
      `incompleteTasks`,
    ]),
    data() {
      return {
        newTaskTitle: ``,
        newTaskProgress: 0,
      };
    },
    components: {
      CustomButton,
      TaskList,
      Headline,
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

<style lang="scss" scoped>
  @import '{ .o-grid } from ~@avalanche/object-grid';
  @import '{
    .o-vertical-spacing,
    .o-vertical-spacing--l
  } from ~@avalanche/object-vertical-spacing';
  @import '{
    .u-width-12/12,
    .u-width-6/12@m
  } from ~@avalanche/utility-width';
</style>

<template>
  <div class="c-rewarder o-vertical-spacing o-vertical-spacing--l">
    <headline :level="1" class="c-headline--underlined">Rewarder</headline>
    <div class="c-rewarder__content">
      <div class="o-grid">
        <div class="o-grid__item o-vertical-spacing o-vertical-spacing--l u-width-12/12 u-width-6/12@m">
          <headline :level="2">incomplete Tasks</headline>
          <task-list :tasks="incompleteTasks"></task-list>
        </div>
        <div class="o-grid__item o-vertical-spacing o-vertical-spacing--l u-width-12/12 u-width-6/12@m">
          <headline :level="2">completed Tasks</headline>
          <task-list :tasks="completedTasks"></task-list>
        </div>
      </div>
    </div>
    <input v-model="newTaskTitle">
    <input v-model="newTaskProgress">
    <custom-button @cButtonClick="addTask">Add task</custom-button>
  </div>
</template>
