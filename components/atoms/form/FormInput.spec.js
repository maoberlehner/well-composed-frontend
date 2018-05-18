import { shallowMount } from '@vue/test-utils';

import FormInput from './FormInput.vue';

describe(`FormInput`, () => {
  test(`It should render an \`<input>\`.`, () => {
    const wrapper = shallowMount(FormInput);

    expect(wrapper.is(`input`)).toBe(true);
  });

  test(`It should emit an event when the input is changed.`, () => {
    const wrapper = shallowMount(FormInput);

    wrapper.vm.$el.value = `foo`;
    wrapper.trigger(`input`);

    expect(wrapper.emitted()).toEqual({ input: [[`foo`]] });
  });
});
