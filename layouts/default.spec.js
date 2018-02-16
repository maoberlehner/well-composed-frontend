import { shallow } from '@vue/test-utils';

import LayoutDefault from './default.vue';

describe(`LayoutDefault`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallow(LayoutDefault);

    expect(wrapper.is(`div`)).toBe(true);
  });
});
