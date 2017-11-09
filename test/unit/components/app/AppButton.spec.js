import { shallow } from 'vue-test-utils';

import AppButton from '../../../../components/app/AppButton.vue';

describe(`AppButton`, () => {
  test(`It should render a \`<button>\`.`, () => {
    const wrapper = shallow(AppButton);

    expect(wrapper.is(`button`)).toBeTruthy();
  });
});
