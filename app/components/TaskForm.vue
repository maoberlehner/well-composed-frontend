<script>
  import CustomButton from '../components/form/Button.vue';
  import TextInput from '../components/form/TextInput.vue';

  const validateTask = (task) => {
    if (task.title.length < 1) return false;
    return true;
  };

  export default {
    data() {
      return {
        newTaskTitle: ``,
      };
    },
    components: {
      CustomButton,
      TextInput,
    },
    methods: {
      addTask() {
        const newTask = {
          title: this.newTaskTitle,
          progress: 0,
        };
        if (validateTask(newTask)) {
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

</style>

<template>
  <div class="c-task-form">
    <text-input v-model="newTaskTitle"></text-input>
    <custom-button @cButtonClick="addTask">Add new task</custom-button>
  </div>
</template>
