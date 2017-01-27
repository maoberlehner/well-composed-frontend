<script>
  import CustomButton from './Button.vue';
  import Headline from './Headline.vue';

  export default {
    props: [
      `task`,
    ],
    components: {
      CustomButton,
      Headline,
    },
    methods: {
      fulfillTask() {
        this.$store.dispatch(`UPDATE_TASK`, {
          id: this.task.id,
          progress: this.task.progress + 10,
        });
      },
      resetTask() {
        this.$store.dispatch(`UPDATE_TASK`, {
          id: this.task.id,
          progress: 0,
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .c-task-widget {
    display: flex;
    justify-content: space-between;
  }
</style>

<template>
  <div class="c-task-widget">
    <headline class="c-task-widget__headline" :level="2" :size="3">{{ task.title }} ({{ task.progress }}%)</headline>
    <custom-button v-if="task.progress < 100" @cButtonClick="fulfillTask">Add progress</custom-button>
    <custom-button v-else @cButtonClick="resetTask">Reset</custom-button>
  </div>
</template>
