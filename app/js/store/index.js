import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

import moduleTasks from './modules/tasks';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    moduleTasks,
  },
});

export default store;
