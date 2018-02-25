const nodeSassMagicImporter = require(`node-sass-magic-importer`);
const VueLoaderOptionsPlugin = require(`vue-loader-options-plugin`);

module.exports = {
  head: {
    title: `A well-composed frontend`,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
    ],
  },
  loading: { color: `#00acc1` },
  build: {
    extend(config, { isClient }) {
      // Override sass-loader options with the VueLoaderOptionsPlugin
      // until it is possible to provide functions as options in vue-loader.
      // See: https://github.com/vuejs/vue-loader/issues/673
      if (process.env.NODE_ENV !== `development`) {
        config.plugins.push(new VueLoaderOptionsPlugin({
          sass: {
            importer: nodeSassMagicImporter(),
          },
        }));
      }

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
  ignore: [`**/*.spec.js`],
  modules: [
    `@nuxtjs/pwa`,
  ],
};
