import { shallow } from 'vue-test-utils';
import test from 'ava';

import AppHeadline from '../../../../components/app/AppHeadline.vue';

test(`It should render a \`<hN>\` tag of the given level.`, (t) => {
  const wrapper = shallow(AppHeadline, {
    propsData: { level: 1 },
  });

  t.true(wrapper.is(`h1`));
});

test(`It should have a size class which matches the level if no size is given.`, (t) => {
  const wrapper = shallow(AppHeadline, {
    propsData: { level: 3 },
  });

  t.true(wrapper.hasClass(`c-app-headline--size3`));
});

test(`It should have a size class according to the given size.`, (t) => {
  const wrapper = shallow(AppHeadline, {
    propsData: {
      level: 1,
      size: 3,
    },
  });

  t.true(wrapper.hasClass(`c-app-headline--size3`));
});
