const nodeSassMagicImporter = require(`node-sass-magic-importer`);

module.exports = {
  /**
   * Headers of the page.
   */
  head: {
    title: `A well-composed frontend`,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
    ],
  },
  /**
   * Customize the progress-bar color.
   */
  loading: { color: `#00acc1` },
  /**
   * Build configuration.
   */
  build: {
    /**
     * Run ESLint on save.
     */
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(rule => rule.loader === `vue-loader`);

      vueLoader.query.loaders.scss = [
        { loader: `vue-style-loader?sourceMap` },
        { loader: `css-loader?sourceMap` },
        {
          loader: `sass-loader?sourceMap`,
          options: { importer: nodeSassMagicImporter() },
        },
      ];

      if (ctx.isClient) {
        config.module.rules.push({
          enforce: `pre`,
          test: /\.(js|vue)$/,
          loader: `eslint-loader`,
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
