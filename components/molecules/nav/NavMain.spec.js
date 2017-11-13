import { shallow } from 'vue-test-utils';

import NavMain from './NavMain.vue';

describe(`NavMain`, () => {
  test(`It should render a \`<nav>\`.`, () => {
    const wrapper = shallow(NavMain);

    expect(wrapper.is(`nav`)).toBe(true);
  });
});
