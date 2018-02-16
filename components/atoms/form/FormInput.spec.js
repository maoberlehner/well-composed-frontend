import { shallow } from '@vue/test-utils';

import FormInput from './FormInput.vue';

describe(`FormInput`, () => {
  test(`It should render an \`<input>\`.`, () => {
    const wrapper = shallow(FormInput);

    expect(wrapper.is(`input`)).toBe(true);
  });

  test(`It should emit an event when the input is changed.`, () => {
    const wrapper = shallow(FormInput);

    wrapper.vm.$el.value = `foo`;
    wrapper.trigger(`input`);

    expect(wrapper.emitted()).toEqual({ input: [[`foo`]] });
  });
});
