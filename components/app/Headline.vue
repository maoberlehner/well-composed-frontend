<script>
export default {
  name: `AppHeadline`,
  render(createElement) {
    const size = this.size || this.level;

    return createElement(
      `h${this.level}`,
      {
        class: {
          'c-app-headline': true,
          [`c-app-headline--size${size}`]: true,
        },
      },
      this.$slots.default,
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@avalanche/setting-spacings';
@import '../../assets/scss/settings/generic';

.c-app-headline--size1 {
  font-size: setting-font-size(xxxl);
}

.c-app-headline--size2 {
  font-size: setting-font-size(xxl);
}

.c-app-headline--underlined {
  padding-bottom: setting-spacing(xs, true);
  border-bottom: 1px solid setting-color(a, gray);
}
</style>
