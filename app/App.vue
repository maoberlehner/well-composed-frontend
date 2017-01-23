<script>
  import MainNav from './components/MainNav.vue';

  export default {
    components: {
      MainNav,
    },
  };
</script>

<style lang="scss">
  @import '~normalize-scss/sass/normalize/_import-now.scss';
  @import '~@avalanche/generic-box-sizing-reset';
  @import '{ .o-grid } from ~@avalanche/object-grid';
  @import '{
    .u-width-12/12,
    .u-width-4/12@m,
    .u-width-8/12@m
  } from ~@avalanche/utility-width';
</style>

<template>
  <div id="app" class="c-app">
    <div class="o-grid">
      <div class="o-grid__item u-width-12/12 u-width-4/12@m">
        <main-nav></main-nav>
      </div>
      <main class="o-grid__item u-width-12/12 u-width-8/12@m">
        <router-view class="view"></router-view>
      </main>
    </div>
  </div>
</template>
