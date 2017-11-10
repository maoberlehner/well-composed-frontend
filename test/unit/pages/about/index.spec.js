import { shallow } from 'vue-test-utils';

import PageAboutIndex from '../../../../pages/about/index.vue';

describe(`PageAboutIndex`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallow(PageAboutIndex);

    expect(wrapper.is(`div`)).toBe(true);
  });
});
