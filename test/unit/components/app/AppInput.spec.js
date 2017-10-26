import { shallow } from 'vue-test-utils';

import AppInput from '../../../../components/app/AppInput.vue';

describe(`AppInput`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallow(AppInput);

    expect(wrapper.is(`div`)).toBeTruthy();
  });

  test(`It should emit an event when the input is changed.`, () => {
    const wrapper = shallow(AppInput, {
      propsData: { value: `test` },
    });

    wrapper.find(`input`).trigger(`input`);

    expect(wrapper.emitted()).toEqual({ input: [[`test`]] });
  });
});
