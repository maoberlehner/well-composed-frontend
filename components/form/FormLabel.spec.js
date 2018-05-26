import { shallowMount } from '@vue/test-utils';

import FormLabel from './FormLabel.vue';

describe(`FormLabel`, () => {
  test(`It should render a \`<label>\`.`, () => {
    const wrapper = shallowMount(FormLabel);

    expect(wrapper.is(`label`)).toBe(true);
  });
});
