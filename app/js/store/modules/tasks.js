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
  FULFILL_TASK({ commit }, payload) {
    // @TODO: Query API to update task.
    commit(`FULFILL_TASK`, payload);
  },
};

const mutations = {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  ADD_TASK(state, newTask) {
    newTask.id = newTask.id || Date.now();
    state.tasks.push(newTask);
  },
  UPDATE_TASK(state, updateTask) {
    let taskToUpdate = state.tasks.find(task => task.id === updateTask.id);
    taskToUpdate = updateTask;
  },
  FULFILL_TASK(state, payload) {
    const taskToFulfill = state.tasks.find(task => task.id === payload.taskId);
    taskToFulfill.progress += payload.progress;
    if (taskToFulfill.progress > 100) taskToFulfill.progress = 100;
  },
};

const getters = {
  allTasks(state) {
    return state.tasks;
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
