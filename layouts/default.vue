<template>
  <div class="c-layout-default">
    <div class="o-grid o-grid--collapsed c-layout-default__grid">
      <div class="o-grid__item u-width-12/12 u-width-3/12@m">
        <wcf-main-nav class="c-layout-default__sidebar"></wcf-main-nav>
      </div>
      <main class="o-grid__item u-width-12/12 u-width-9/12@m">
        <nuxt class="c-layout-default__main"></nuxt>
      </main>
    </div>
  </div>
</template>

<script>
import WcfMainNav from '../components/MainNav.vue';

export default {
  components: {
    WcfMainNav,
  },
};
</script>

<style lang="scss">
@import '~normalize-scss/sass/normalize/_import-now.scss';
@import '~@avalanche/generic-box-sizing-reset';
@import '../assets/scss/generic/reset';
</style>

<style lang="scss" scoped>
@import '~@avalanche/setting-breakpoints';
@import '~@avalanche/setting-spacings';
@import '{
  .o-grid,
  .o-grid--collapsed
} from ~@avalanche/object-grid';
@import '{
  .u-width-12/12,
  .u-width-3/12@m,
  .u-width-9/12@m
} from ~@avalanche/utility-width';

.c-layout-default {
  padding: setting-spacing(m);

  @media (min-width: setting-breakpoint(m)) {
    padding: 0;
  }
}

.c-layout-default__main {
  @media (min-width: setting-breakpoint(m)) {
    padding: setting-spacing(xl) setting-spacing(xxl);
  }
}
</style>
