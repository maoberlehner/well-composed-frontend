<script>
  import Headline from '../components/Headline.vue';

  export default {
    components: {
      Headline,
    },
  };
</script>

<style lang="scss" scoped>
  @import '{
    .o-vertical-spacing,
    .o-vertical-spacing--l
  } from ~@avalanche/object-vertical-spacing';
</style>

<template>
  <div class="c-about o-vertical-spacing o-vertical-spacing--l">
    <headline :level="1" class="c-headline--underlined">About</headline>
    <div class="o-vertical-spacing">
      <p>This is an example app to show how to build a flexible and modular frontend. The main technologies used are <a href="https://vuejs.org">Vue</a> together with <a href="https://vuex.vuejs.org/en/">Vuex</a> and <a href="https://webpack.github.io/">webpack</a> in combination with the <a href="https://www.npmjs.com/package/node-sass-magic-importer">node-sass-magic-importer</a>.</p>
      <p>The two main goals of a well-composed frontend are: a solid user experience and a solid developer experience. The former is achieved by building a fast (instantly) loading site with app like behaviour. The later is solved by building upon a solid framework and using components (custom and ready-made) to keep the code DRY.</p>
      <p>To enable (almost) instant loading, server side rendering is utilized to speed up the first view and a service worker to make it possible to load the app blazing fast on repeated views.</p>
      <p>Vue serves as a very solid framework to build mighty apps upon. Vuex is used to manage the state of the app.</p>
      <p>The combination of webpack and node-sass-magic-importer makes it possible to modularize every aspect of the frontend workflow. Frontend developers are using JavaScript modules for quite some time now and with ES6 it got even more comfortable doing so. Although SASS made it much easier to also modularize your CSS code it is still laking an easy way to load styles from third party modules. For this project node-sass-magic-importer is used to load styles from <a href="https://avalanche.oberlehner.net/">avalanche</a> packages.</p>
      <p><a href="https://github.com/maoberlehner/well-composed-frontend">View the code on GitHub.</a></p>
    </div>
  </div>
</template>
