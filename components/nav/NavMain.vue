<template>
  <nav :class="$options.name">
    <ul :class="`${$options.name}__list`">
      <li :class="`${$options.name}__item`">
        <router-link
          :class="`${$options.name}__link`"
          to="/"
        >
          Posts
        </router-link>
      </li>
      <li :class="`${$options.name}__item`">
        <router-link
          :class="`${$options.name}__link`"
          to="/about"
        >
          About
        </router-link>
      </li>
      <li :class="`${$options.name}__item`">
        <router-link
          :class="`${$options.name}__link`"
          to="/settings"
        >
          Settings
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: `NavMain`,
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-breakpoints';
@import '~@avalanche/setting-spacings';
@import '~@avalanche/setting-colors';
@import '../../assets/scss/settings/generic';

.NavMain {
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

        .t-dark & {
          background-color: rgba(#444, 0.1);
        }
      }
    }

    &,
    &:visited {
      color: setting-color(a);

      .t-dark & {
        color: #444;
      }
    }
  }
}
</style>
