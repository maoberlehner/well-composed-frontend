import tasksApi from '../api/fake-tasks';

const actions = {
  FETCH_TASKS({ commit }) {
    return tasksApi.then(tasks => commit(`SET_TASKS`, tasks));
  },
  ADD_TASK({ commit }, newTask) {
    // @TODO: Query API to save new task.
    commit(`ADD_TASK`, newTask);
  },
  UPDATE_TASK({ commit }, updateTask) {
    // @TODO: Query API to update task.
    commit(`UPDATE_TASK`, updateTask);
  },
};

const mutations = {
  SET_TASKS(state, tasks) {
    // eslint-disable-next-line no-param-reassign
    state.tasks = tasks;
  },
  ADD_TASK(state, newTask) {
    // eslint-disable-next-line no-param-reassign
    newTask.id = newTask.id || Date.now();
    state.tasks.push(newTask);
  },
  UPDATE_TASK(state, updatedTask) {
    const taskToUpdate = state.tasks.find(task => task.id === updatedTask.id);
    Object.assign(taskToUpdate, updatedTask);
  },
};

const getters = {
  allTasks(state) {
    return state.tasks;
  },
  completedTasks(state) {
    return state.tasks.filter(task => task.progress === 100);
  },
  incompleteTasks(state) {
    return state.tasks.filter(task => task.progress < 100);
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
