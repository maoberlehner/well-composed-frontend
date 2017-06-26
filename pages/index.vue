<template>
  <div class="o-vertical-spacing o-vertical-spacing--l">
    <wcf-headline :level="1">To Do</wcf-headline>
    <div class="o-grid">
      <div class="o-grid__item o-vertical-spacing o-vertical-spacing--l u-width-12/12 u-width-6/12@m">
        <wcf-headline :level="2">incomplete Tasks</wcf-headline>
        <wcf-task-list :tasks="incompleteTasks"></wcf-task-list>
        <wcf-task-form></wcf-task-form>
      </div>
      <div class="o-grid__item o-vertical-spacing o-vertical-spacing--l u-width-12/12 u-width-6/12@m">
        <wcf-headline :level="2">completed Tasks</wcf-headline>
        <wcf-task-list :tasks="completedTasks"></wcf-task-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WcfTaskList from '../components/TaskList.vue';
import WcfTaskForm from '../components/TaskForm.vue';
import WcfHeadline from '../components/Headline.vue';

export default {
  computed: mapGetters([
    `completedTasks`,
    `incompleteTasks`,
  ]),
  components: {
    WcfTaskList,
    WcfTaskForm,
    WcfHeadline,
  },
  fetch({ store }) {
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
