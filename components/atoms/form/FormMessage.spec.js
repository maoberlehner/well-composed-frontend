import { shallow } from 'vue-test-utils';

import FormMessage from './FormMessage.vue';

describe(`FormMessage`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallow(FormMessage);

    expect(wrapper.is(`div`)).toBe(true);
  });
});
