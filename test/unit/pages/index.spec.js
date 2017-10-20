import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import sinon from 'sinon';
import { createLocalVue, shallow } from 'vue-test-utils';
import test from 'ava';

import pageIndex from '../../../pages/index.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VeeValidate);

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

test(`It should render a \`<div>\`.`, (t) => {
  const wrapper = shallow(pageIndex, { store, localVue });

  t.true(wrapper.is(`div`));
});
