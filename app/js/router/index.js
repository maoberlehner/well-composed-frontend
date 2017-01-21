import Vue from 'vue';
import VueRouter from 'vue-router';

import Rewarder from '../../views/Rewarder.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: `history`,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: `/`, component: Rewarder },
  ],
});
