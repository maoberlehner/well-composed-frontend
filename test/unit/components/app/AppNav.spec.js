import { shallow } from 'vue-test-utils';
import test from 'ava';

import AppNav from '../../../../components/app/AppNav.vue';

test(`Should render a \`<nav>\`.`, (t) => {
  const wrapper = shallow(AppNav);

  t.true(wrapper.is(`nav`));
});
