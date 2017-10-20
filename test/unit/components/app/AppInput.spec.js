import { shallow } from 'vue-test-utils';
import test from 'ava';

import AppInput from '../../../../components/app/AppInput.vue';

test(`It should render a \`<div>\`.`, (t) => {
  const wrapper = shallow(AppInput);

  t.true(wrapper.is(`div`));
});

test(`It should emit an event when the input is changed.`, (t) => {
  const wrapper = shallow(AppInput, {
    propsData: { value: `test` },
  });

  wrapper.find(`input`).trigger(`input`);

  t.deepEqual(wrapper.emitted(), { input: [[`test`]] });
});
