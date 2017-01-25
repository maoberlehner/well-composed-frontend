<script>
  import { mapGetters } from 'vuex';
  import TaskList from '../components/TaskList.vue';

  export default {
    computed: mapGetters([`allTasks`]),
    components: {
      TaskList,
    },
    prefetch(store) {
      return store.dispatch(`FETCH_TASKS`);
    },
  };
</script>

<template>
  <div class="c-rewarder">
    <task-list :tasks="allTasks"></task-list>
  </div>
</template>
