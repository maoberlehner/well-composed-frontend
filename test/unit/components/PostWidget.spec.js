import { shallow } from 'vue-test-utils';
import test from 'ava';

import PostWidget from '../../../components/post/PostWidget.vue';

test(`It should render a \`<div>\`.`, (t) => {
  const wrapper = shallow(PostWidget, {
    propsData: { post: { title: `Title` } },
  });

  t.true(wrapper.is(`div`));
});
