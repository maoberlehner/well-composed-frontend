import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
import modules from './modules';

const createStore = () => new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules,
});

export default createStore;
