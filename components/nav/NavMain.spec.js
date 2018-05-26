import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';

import NavMain from './NavMain.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe(`NavMain`, () => {
  test(`It should render a \`<nav>\`.`, () => {
    const wrapper = shallowMount(NavMain, { localVue, router });

    expect(wrapper.is(`nav`)).toBe(true);
  });
});
