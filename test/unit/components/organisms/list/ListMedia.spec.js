import { shallow } from 'vue-test-utils';

import ListMedia from '../../../../../components/organisms/list/ListMedia.vue';

describe(`ListMedia`, () => {
  test(`It should render an \`<ul>\`.`, () => {
    const wrapper = shallow(ListMedia, {
      propsData: {
        items: [],
      },
    });

    expect(wrapper.is(`ul`)).toBe(true);
  });
});
