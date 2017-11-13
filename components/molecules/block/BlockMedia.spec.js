import { shallow } from 'vue-test-utils';

import BlockMedia from './BlockMedia.vue';

describe(`BlockMedia`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallow(BlockMedia);

    expect(wrapper.is(`div`)).toBe(true);
  });
});
