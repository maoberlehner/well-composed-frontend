import Vue from 'vue';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import sinon from 'sinon';
import { shallow } from 'vue-test-utils';
import test from 'ava';

import pageIndex from '../../../pages/index.vue';

Vue.use(Vuex);
Vue.use(VeeValidate);

let modules;
let store;

test.before(() => {
  modules = {
    post: {
      namespaced: true,
      actions: {
        fetchPost: sinon.stub(),
      },
    },
  };

  store = new Vuex.Store({
    state: { },
    modules,
  });
});

test(`Should render a \`<div>\`.`, (t) => {
  const wrapper = shallow(pageIndex, { store });

  t.true(wrapper.is(`div`));
});
