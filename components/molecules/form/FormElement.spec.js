import { shallow } from '@vue/test-utils';

import FormElement from './FormElement.vue';

describe(`FormElement`, () => {
  test(`It should render a \`<div>\`.`, () => {
    const wrapper = shallow(FormElement);

    expect(wrapper.is(`div`)).toBe(true);
  });
});
