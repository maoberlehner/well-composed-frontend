import { shallow } from 'vue-test-utils';
import test from 'ava';

import AppButton from '../../../../components/app/AppButton.vue';

test(`It should render a \`<button>\`.`, (t) => {
  const wrapper = shallow(AppButton);

  t.true(wrapper.is(`button`));
});

test(`It should emit an event when clicked.`, (t) => {
  const wrapper = shallow(AppButton);

  wrapper.trigger(`click`);

  t.deepEqual(wrapper.emitted(), { click: [[]] });
});
