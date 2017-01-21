<script>
  export default {
    props: [
      `task`,
    ],
    methods: {
      fullfillTask() {
        this.$store.dispatch(`fullfillTask`, {
          taskId: this.task.id,
          progress: 10,
        });
      },
    },
  };
</script>

<template>
  <div class="c-task-widget">
    <h2>{{ task.title }} ({{ task.progress }})</h2>
    <button v-on:click="fullfillTask">Done</button>
  </div>
</template>
