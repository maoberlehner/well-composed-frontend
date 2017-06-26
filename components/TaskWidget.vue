<template>
  <div class="c-task-widget">
    <wcf-headline class="c-task-widget__headline" :level="2" :size="3">{{ task.title }} ({{ task.progress }}%)</wcf-headline>
    <wcf-button v-if="task.progress < 100" @cButtonClick="fulfillTask">Add progress</wcf-button>
    <wcf-button v-else class="c-button--negative" @cButtonClick="resetTask">Reset</wcf-button>
  </div>
</template>

<script>
import WcfButton from './Button.vue';
import WcfHeadline from './Headline.vue';

export default {
  props: [
    `task`,
  ],
  components: {
    WcfButton,
    WcfHeadline,
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
  align-items: center;
}
</style>
