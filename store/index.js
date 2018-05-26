import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import modules from './modules';
import mutations from './mutations';
import state from './state';

const createStore = () => new Vuex.Store({
  actions,
  getters,
  modules,
  mutations,
  state,
});

export default createStore;
