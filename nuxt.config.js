const nodeSassMagicImporter = require(`node-sass-magic-importer`);

module.exports = {
  head: {
    title: `A well-composed frontend`,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
    ],
  },
  loading: { color: `#00acc1` },
  plugins: [`~/plugins/vee-validate`],
  build: {
    extend(config, { isClient }) {
      const vueLoader = config.module.rules.find(rule => rule.loader === `vue-loader`);

      vueLoader.options.loaders.scss = [
        { loader: `vue-style-loader`, options: { sourceMap: true } },
        {
          loader: `css-loader`,
          options: {
            minimize: true,
            importLoaders: 1,
            sourceMap: true,
          },
        },
        {
          loader: `sass-loader`,
          options: {
            // This does not work because of:
            // https://github.com/vuejs/vue-loader/issues/673
            importer: nodeSassMagicImporter(),
            sourceMap: true,
          },
        },
      ];

      // Run ESLint on save.
      if (isClient) {
        config.module.rules.push({
          enforce: `pre`,
          test: /\.(js|vue)$/,
          loader: `eslint-loader`,
          exclude: /(node_modules)/,
        });
      }
    },
    extractCSS: true,
  },
};
