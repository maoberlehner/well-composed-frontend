import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from '../App.vue';
import router from './router';
import store from './store';

// Sync the router with the vuex store.
// This registers `store.state.route`.
sync(store, router);

// Create the app instance.
// Here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
  router,
  store,
  ...App,
});

// Expose the app, the router and the store.
// Note: we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store };
