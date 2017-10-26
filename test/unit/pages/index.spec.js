import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import sinon from 'sinon';
import { createLocalVue, shallow } from 'vue-test-utils';

import PageIndex from '../../../pages/index.vue';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VeeValidate);

let modules;
let store;

beforeEach(() => {
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

describe(`PageIndex`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallow(PageIndex, { store, localVue });

    expect(wrapper.is(`div`)).toBeTruthy();
  });
});
