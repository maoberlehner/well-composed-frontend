import { shallowMount } from '@vue/test-utils';

import AppButton from './AppButton.vue';

describe(`AppButton`, () => {
  test(`It should render a \`<button>\`.`, () => {
    const wrapper = shallowMount(AppButton);

    expect(wrapper.is(`button`)).toBe(true);
  });
});
