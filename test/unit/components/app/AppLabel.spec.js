import { shallow } from 'vue-test-utils';
import test from 'ava';

import AppLabel from '../../../../components/app/AppLabel.vue';

test(`Should render a \`<label>\`.`, (t) => {
  const wrapper = shallow(AppLabel);

  t.true(wrapper.is(`label`));
});
