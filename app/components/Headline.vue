<script>
  export default {
    render: function(createElement) {
      const size = this.size || this.level;
      const headline = createElement(
        'h' + this.level,
        {
          class: {
            'c-headline': true,
          },
        },
        this.$slots.default
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
