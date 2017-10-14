import { shallow } from 'vue-test-utils';
import test from 'ava';

import AppInput from '../../../../components/app/AppInput.vue';

test(`Should render a \`<div>\`.`, (t) => {
  const wrapper = shallow(AppInput);

  t.true(wrapper.is(`div`));
});

test(`Changing the input should emit an \`input\` event.`, (t) => {
  const wrapper = shallow(AppInput, {
    propsData: { value: `test` },
  });

  wrapper.find(`input`).trigger(`input`);

  t.deepEqual(wrapper.emitted(), { input: [[`test`]] });
});
