import { shallow } from 'vue-test-utils';
import test from 'ava';

import pageAboutIndex from '../../../../pages/about/index.vue';

test(`Should render a \`<div>\`.`, (t) => {
  const wrapper = shallow(pageAboutIndex);

  t.true(wrapper.is(`div`));
});
