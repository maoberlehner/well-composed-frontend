import { shallowMount } from '@vue/test-utils';

import LayoutDefault from './default.vue';

describe(`LayoutDefault`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallowMount(LayoutDefault, { stubs: { nuxt: true } });

    expect(wrapper.is(`div`)).toBe(true);
  });
});
