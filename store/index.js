import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

export default () => new Vuex.Store({
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
  state: {
    theme: `default`,
  },
});
