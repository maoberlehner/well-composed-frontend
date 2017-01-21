import 'es6-promise/auto';
import { app, store } from './app';

// Prime the store with server-initialized state.
// The state is determined during SSR and inlined in the page markup.
store.replaceState(window.VUE_APP_INITIAL_STATE);

// Mount to DOM.
app.$mount(`#app`);

// Add service worker.
if (process.env.NODE_ENV === `production` && `serviceWorker` in navigator) {
  navigator.serviceWorker.register(`/service-worker.js`);
}
