import { shallow } from 'vue-test-utils';

import AppInput from '../../../../components/app/AppInput.vue';

describe(`AppInput`, () => {
  test(`It should render an \`<input>\`.`, () => {
    const wrapper = shallow(AppInput);

    expect(wrapper.is(`input`)).toBeTruthy();
  });

  test(`It should emit an event when the input is changed.`, () => {
    const wrapper = shallow(AppInput, {
      propsData: { value: `foo` },
    });

    wrapper.trigger(`input`);

    expect(wrapper.emitted()).toEqual({ input: [[`foo`]] });
  });
});
