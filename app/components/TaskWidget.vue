<script>
  import CustomButton from './Button.vue';

  export default {
    props: [
      `task`,
    ],
    components: {
      CustomButton,
    },
    methods: {
      fulfillTask() {
        this.$store.dispatch(`FULFILL_TASK`, {
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
    <custom-button @cButtonClick="fulfillTask">Done</custom-button>
  </div>
</template>
