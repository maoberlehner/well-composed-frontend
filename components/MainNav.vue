<template>
  <nav class="c-main-nav">
    <ul class="c-main-nav__list">
      <li class="c-main-nav__item">
        <router-link class="c-main-nav__link" active-class="c-main-nav__link--active" to="/" exact>To Do</router-link>
      </li>
      <li class="c-main-nav__item">
        <router-link class="c-main-nav__link" active-class="c-main-nav__link--active" to="/about" exact>About</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '~@avalanche/setting-breakpoints';
@import '~@avalanche/setting-spacings';
@import '~@avalanche/setting-colors';
@import '../assets/scss/settings/generic';

.c-main-nav__list {
  padding-left: 0;
  list-style-type: none;
  text-align: center;

  @media (min-width: setting-breakpoint(m)) {
    text-align: left;
  }
}

.c-main-nav__item {
  display: inline-block;

  @media (min-width: setting-breakpoint(m)) {
    display: block;
  }
}

.c-main-nav__link {
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
</style>
