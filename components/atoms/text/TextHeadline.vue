<script>
export default {
  name: `TextHeadline`,
  props: {
    level: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
    },
  },
  render(createElement) {
    const size = this.size || this.level;

    return createElement(
      `h${this.level}`,
      {
        class: {
          'c-text-headline': true,
          [`c-text-headline--size${size}`]: size,
        },
      },
      this.$slots.default,
    );
  },
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-font-sizes';
@import '~@avalanche/setting-spacings';
@import '../../../assets/scss/settings/generic';

.c-text-headline {
  &--size1 {
    font-size: setting-font-size(xxxl);
  }

  &--size2 {
    font-size: setting-font-size(xxl);
  }

  &--size3 {
    font-size: setting-font-size(xl);
  }
}
</style>
