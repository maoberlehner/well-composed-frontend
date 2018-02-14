import { getField, updateField } from 'vuex-map-fields/dist';

import { Address } from '../../../models/Address';

const mutations = {
  updateField,
};

const getters = {
  getField,
};

const state = () => ({
  rows: [new Address()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};
