<script>
  import { mapGetters } from 'vuex';
  import TaskList from '../components/TaskList.vue';
  import TaskForm from '../components/TaskForm.vue';
  import Headline from '../components/Headline.vue';

  export default {
    computed: mapGetters([
      `completedTasks`,
      `incompleteTasks`,
    ]),
    components: {
      TaskList,
      TaskForm,
      Headline,
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
          <task-form></task-form>
        </div>
        <div class="o-grid__item o-vertical-spacing o-vertical-spacing--l u-width-12/12 u-width-6/12@m">
          <headline :level="2">completed Tasks</headline>
          <task-list :tasks="completedTasks"></task-list>
        </div>
      </div>
    </div>
  </div>
</template>
