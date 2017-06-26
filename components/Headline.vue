<script>
export default {
  render: function render(createElement) {
    const size = this.size || this.level;
    const headline = createElement(
      `h${this.level}`,
      {
        class: {
          'c-headline': true,
        },
      },
      this.$slots.default,
    );
    headline.data.class[`c-headline--size${size}`] = true;
    return headline;
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
@import '../assets/scss/settings/generic';

.c-headline--size1 {
  font-size: setting-font-size(xxxl);
}

.c-headline--size2 {
  font-size: setting-font-size(xxl);
}

.c-headline--underlined {
  padding-bottom: setting-spacing(xs, true);
  border-bottom: 1px solid setting-color(a, gray);
}
</style>
