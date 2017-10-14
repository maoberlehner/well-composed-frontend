import { shallow } from 'vue-test-utils';
import test from 'ava';

import AppButton from '../../../../components/app/AppButton.vue';

test(`Should render a \`<button>\`.`, (t) => {
  const wrapper = shallow(AppButton);

  t.true(wrapper.is(`button`));
});

test(`Clicking the button should emit a \`click\` event.`, (t) => {
  const wrapper = shallow(AppButton);

  wrapper.trigger(`click`);

  t.deepEqual(wrapper.emitted(), { click: [[]] });
});
