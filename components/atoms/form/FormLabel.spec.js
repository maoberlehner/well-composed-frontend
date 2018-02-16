import { shallow } from '@vue/test-utils';

import FormLabel from './FormLabel.vue';

describe(`FormLabel`, () => {
  test(`It should render a \`<label>\`.`, () => {
    const wrapper = shallow(FormLabel);

    expect(wrapper.is(`label`)).toBe(true);
  });
});
