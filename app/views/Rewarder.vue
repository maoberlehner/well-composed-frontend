<script>
  import TaskList from '../components/TaskList.vue';

  export default {
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
    <task-list></task-list>
  </div>
</template>
