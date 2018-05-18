import { shallowMount } from '@vue/test-utils';

import PageAboutIndex from './index.vue';

describe(`PageAboutIndex`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallowMount(PageAboutIndex);

    expect(wrapper.is(`div`)).toBe(true);
  });
});
