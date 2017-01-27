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
  @import 'generic/reset';
  @import '~@avalanche/generic-box-sizing-reset';
</style>

<style lang="scss" scoped>
  @import '~@avalanche/setting-breakpoints';
  @import '~@avalanche/setting-spacings';
  @import '{
    .o-grid,
    .o-grid--xxl-horizontal
  } from ~@avalanche/object-grid';
  @import '{
    .u-width-12/12,
    .u-width-3/12@m,
    .u-width-9/12@m
  } from ~@avalanche/utility-width';

  .c-app {
    padding: setting-spacing(m);

    @media (min-width: setting-breakpoint(m)) {
      padding: 0;
    }
  }
</style>

<template>
  <div id="app" class="c-app">
    <div class="o-grid o-grid--xxl-horizontal c-app__grid">
      <div class="o-grid__item c-app__sidebar u-width-12/12 u-width-3/12@m">
        <main-nav></main-nav>
      </div>
      <main class="o-grid__item c-app__main u-width-12/12 u-width-9/12@m">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
