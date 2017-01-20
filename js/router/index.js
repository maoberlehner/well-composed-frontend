import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Foo from '../views/foo.vue'
import Bar from '../views/bar.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
  ],
});
