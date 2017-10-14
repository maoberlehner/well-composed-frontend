import { shallow } from 'vue-test-utils';
import test from 'ava';

import AppMessage from '../../../../components/app/AppMessage.vue';

test(`Should render a \`<div>\`.`, (t) => {
  const wrapper = shallow(AppMessage);

  t.true(wrapper.is(`div`));
});
