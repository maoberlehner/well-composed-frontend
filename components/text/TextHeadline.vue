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
          [this.$options.name]: true,
          [`${this.$options.name}--size${size}`]: size,
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
@import '../../assets/scss/settings/generic';

.TextHeadline {
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
