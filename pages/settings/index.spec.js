import { shallowMount } from '@vue/test-utils';

import PageSettingsIndex from './index.vue';

describe(`PageSettingsIndex`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallowMount(PageSettingsIndex);

    expect(wrapper.is(`div`)).toBe(true);
  });
});
