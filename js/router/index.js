import Vue from 'vue';
import VueRouter from 'vue-router';

import Bar from '../views/bar.vue';
import Foo from '../views/foo.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: `history`,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: `/foo`, component: Foo },
    { path: `/bar`, component: Bar },
  ],
});
