import { shallow } from 'vue-test-utils';

import PostWidget from '../../../components/post/PostWidget.vue';

describe(`PostWidget`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallow(PostWidget, {
      propsData: { post: { title: `Title` } },
    });

    expect(wrapper.is(`div`)).toBe(true);
  });
});
