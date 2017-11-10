import { shallow } from 'vue-test-utils';

import AppLabel from '../../../../components/app/AppLabel.vue';

describe(`AppLabel`, () => {
  test(`It should render a \`<label>\`.`, () => {
    const wrapper = shallow(AppLabel);

    expect(wrapper.is(`label`)).toBe(true);
  });
});
