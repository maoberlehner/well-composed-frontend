<template>
  <form class="c-task-form" @submit.prevent="onSubmit">
    <wcf-input class="c-task-form__input" label="Title" v-model="newTaskTitle"></wcf-input>
    <wcf-button class="c-task-form__button" @cButtonClick="addTask">Add new task</wcf-button>
  </form>
</template>

<script>
import WcfButton from './Button.vue';
import WcfInput from './Input.vue';

export default {
  data() {
    return {
      newTaskTitle: ``,
    };
  },
  components: {
    WcfButton,
    WcfInput,
  },
  methods: {
    validateTask(task) {
      if (task.title.length < 1) return false;
      return true;
    },
    addTask() {
      const newTask = {
        title: this.newTaskTitle,
        progress: 0,
      };
      if (this.validateTask(newTask)) {
        this.$store.dispatch(`ADD_TASK`, newTask);
        this.clearNewTaskData();
      }
    },
    clearNewTaskData() {
      this.newTaskTitle = ``;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-spacings';

.c-task-form {
  display: flex;
}

.c-task-form__input {
  flex-grow: 1;
  margin-right: setting-spacing(xs);
}

.c-task-form__button {
  align-self: flex-end;
}
</style>
