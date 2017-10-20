import { shallow } from 'vue-test-utils';
import test from 'ava';

import layoutDefault from '../../../layouts/default.vue';

test(`It should render a \`<div>\`.`, (t) => {
  const wrapper = shallow(layoutDefault);

  t.true(wrapper.is(`div`));
});
