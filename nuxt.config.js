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
  build: {
    extend(config) {
      const sassLoader = config.module.rules
        .find(({ test }) => test.test(`.scss`)).oneOf[1].use
        .find(({ loader }) => loader === `sass-loader`);

      sassLoader.options.importer = nodeSassMagicImporter();
    },
    extractCSS: true,
  },
  ignore: [`**/*.spec.js`],
  modules: [
    `@nuxtjs/pwa`,
  ],
};
