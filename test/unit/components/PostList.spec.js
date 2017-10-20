import { shallow } from 'vue-test-utils';
import test from 'ava';

import PostList from '../../../components/post/PostList.vue';

test(`It should render an \`<ul>\`.`, (t) => {
  const wrapper = shallow(PostList);

  t.true(wrapper.is(`ul`));
});
