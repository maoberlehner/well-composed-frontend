import { shallowMount } from '@vue/test-utils';

import ListMedia from './ListMedia.vue';

describe(`ListMedia`, () => {
  test(`It should render an \`<ul>\`.`, () => {
    const wrapper = shallowMount(ListMedia, {
      propsData: {
        items: [],
      },
    });

    expect(wrapper.is(`ul`)).toBe(true);
  });
});
