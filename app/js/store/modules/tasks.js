import mutationTypes from '../mutation-types';
import tasksApi from '../api/fake-tasks';

const actions = {
  loadTasks(context) {
    tasksApi.then(tasks => context.commit(mutationTypes.LOAD_TASKS, tasks));
  },
  addTask(context, newTask) {
    context.commit(mutationTypes.ADD_TASK, newTask);
  },
  fullfillTask(context, data) {
    context.commit(mutationTypes.FULLFILL_TASK, data);
  },
};

const getters = {
  tasks(state) {
    return state.tasks;
  },
};

const mutations = {
  [mutationTypes.LOAD_TASKS](state, tasks) {
    state.tasks = tasks;
  },
  [mutationTypes.ADD_TASK](state, newTask) {
    state.tasks.push(newTask);
  },
  [mutationTypes.FULLFILL_TASK](state, data) {
    const fullfilledTask = state.tasks.find(task => task.id === data.taskId);
    fullfilledTask.progress += data.progress;
    if (fullfilledTask.progress > 100) fullfilledTask.progress = 100;
  },
};

const state = {
  tasks: [],
};

export default {
  actions,
  getters,
  mutations,
  state,
};
