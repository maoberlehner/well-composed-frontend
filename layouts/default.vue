<template>
  <div
    :class="{
      [$options.name]: true,
      [`t-${theme}`]: theme,
    }"
  >
    <div class="o-grid o-grid--collapsed">
      <div class="o-grid__item u-width-12/12 u-width-3/12@m">
        <nav-main :class="`${$options.name}__sidebar`"></nav-main>
      </div>
      <main class="o-grid__item u-width-12/12 u-width-9/12@m">
        <nuxt :class="`${$options.name}__main`"></nuxt>
      </main>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

import NavMain from '../components/nav/NavMain.vue';

export default {
  name: `LayoutDefault`,
  components: {
    NavMain,
  },
  computed: {
    ...mapFields([`theme`]),
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

.LayoutDefault {
  padding: setting-spacing(m);

  @media (min-width: setting-breakpoint(m)) {
    padding: 0;
  }

  &__main {
    @media (min-width: setting-breakpoint(m)) {
      padding: setting-spacing(xl) setting-spacing(xxl);
    }
  }
}
</style>
