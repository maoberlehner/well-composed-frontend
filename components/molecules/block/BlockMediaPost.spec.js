import { shallowMount } from '@vue/test-utils';

import BlockMediaPost from './BlockMediaPost.vue';

describe(`BlockMediaPost`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallowMount(BlockMediaPost, {
      propsData: { title: `Title`, body: `Body` },
    });

    expect(wrapper.is(`div`)).toBe(true);
  });
});
