import { shallow } from 'vue-test-utils';

import PostList from '../../../components/post/PostList.vue';

describe(`PostList`, () => {
  test(`It should render an \`<ul>\`.`, () => {
    const wrapper = shallow(PostList);

    expect(wrapper.is(`ul`)).toBe(true);
  });
});
