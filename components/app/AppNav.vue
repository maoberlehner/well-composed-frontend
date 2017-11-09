<template>
  <nav class="c-app-nav">
    <ul class="c-app-nav__list">
      <li class="c-app-nav__item">
        <router-link
          class="c-app-nav__link"
          active-class="is-active"
          to="/"
          exact>
          Posts
        </router-link>
      </li>
      <li class="c-app-nav__item">
        <router-link
          class="c-app-nav__link"
          active-class="is-active"
          to="/about"
          exact>
          About
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: `AppNav`,
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-breakpoints';
@import '~@avalanche/setting-spacings';
@import '~@avalanche/setting-colors';
@import '../../assets/scss/settings/generic';

.c-app-nav {
  &__list {
    padding-left: 0;
    list-style-type: none;
    text-align: center;

    @media (min-width: setting-breakpoint(m)) {
      text-align: left;
    }
  }

  &__item {
    display: inline-block;

    @media (min-width: setting-breakpoint(m)) {
      display: block;
    }
  }

  &__link {
    padding-right: setting-spacing(m);
    padding-left: setting-spacing(m);
    text-decoration: none;

    @media (min-width: setting-breakpoint(m)) {
      display: block;
      padding: setting-spacing(m);
      border-bottom: 1px solid setting-color(a, gray);
      transition: background-color 0.2s;

      &:hover,
      &:focus {
        background-color: rgba(setting-color(a), 0.1);
      }
    }

    &,
    &:visited {
      color: setting-color(a);
    }
  }
}
</style>
