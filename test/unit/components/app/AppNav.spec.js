import { shallow } from 'vue-test-utils';

import AppNav from '../../../../components/app/AppNav.vue';

describe(`AppNav`, () => {
  test(`It should render a \`<nav>\`.`, () => {
    const wrapper = shallow(AppNav);

    expect(wrapper.is(`nav`)).toBeTruthy();
  });
});
