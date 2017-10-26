import { shallow } from 'vue-test-utils';

import AppHeadline from '../../../../components/app/AppHeadline.vue';

describe(`AppHeadline`, () => {
  test(`It should render a \`<hN>\` tag of the given level.`, () => {
    const wrapper = shallow(AppHeadline, {
      propsData: { level: 1 },
    });

    expect(wrapper.is(`h1`)).toBeTruthy();
  });

  test(`It should have a size class which matches the level if no size is given.`, () => {
    const wrapper = shallow(AppHeadline, {
      propsData: { level: 3 },
    });

    expect(wrapper.hasClass(`c-app-headline--size3`)).toBeTruthy();
  });

  test(`It should have a size class according to the given size.`, () => {
    const wrapper = shallow(AppHeadline, {
      propsData: {
        level: 1,
        size: 3,
      },
    });

    expect(wrapper.hasClass(`c-app-headline--size3`)).toBeTruthy();
  });
});
