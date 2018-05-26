import { shallowMount } from '@vue/test-utils';

import FormElement from './FormElement.vue';

describe(`FormElement`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallowMount(FormElement);

    expect(wrapper.is(`div`)).toBe(true);
  });
});
