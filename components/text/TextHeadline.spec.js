import { shallowMount } from '@vue/test-utils';

import TextHeadline from './TextHeadline.vue';

describe(`TextHeadline`, () => {
  test(`It should render a \`<hN>\` tag of the given level.`, () => {
    const wrapper = shallowMount(TextHeadline, {
      propsData: { level: 1 },
    });

    expect(wrapper.is(`h1`)).toBe(true);
  });

  test(`It should have a size class which matches the level if no size is given.`, () => {
    const wrapper = shallowMount(TextHeadline, {
      propsData: { level: 3 },
    });

    expect(wrapper.classes()).toContain(`TextHeadline--size3`);
  });

  test(`It should have a size class according to the given size.`, () => {
    const wrapper = shallowMount(TextHeadline, {
      propsData: {
        level: 1,
        size: 3,
      },
    });

    expect(wrapper.classes()).toContain(`TextHeadline--size3`);
  });
});
