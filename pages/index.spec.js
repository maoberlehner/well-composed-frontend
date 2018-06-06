import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';

import PageIndex from './index.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

let modules;
let store;

beforeEach(() => {
  modules = {
    post: {
      namespaced: true,
      actions: {
        fetchPost: jest.fn(),
      },
      state: {
        posts: [],
        current: {
          title: `Title`,
          body: `Body`,
        },
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
    const wrapper = shallowMount(PageIndex, { store, localVue });

    expect(wrapper.is(`div`)).toBe(true);
  });

  test(`It should fetch data from the store.`, () => {
    const wrapper = shallowMount(PageIndex, { store, localVue });
    const mockDispatch = jest.fn();
    store.dispatch = mockDispatch;

    wrapper.vm.$options.fetch({ store });

    expect(mockDispatch).toBeCalledWith(`post/fetchPosts`);
    expect(mockDispatch).toBeCalledWith(`post/fetchPost`, 1);
  });
});
