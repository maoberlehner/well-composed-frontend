import { shallow } from 'vue-test-utils';

import AppMessage from '../../../../components/app/AppMessage.vue';

describe(`AppMessage`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallow(AppMessage);

    expect(wrapper.is(`div`)).toBe(true);
  });
});
