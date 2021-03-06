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
  router: {
    linkExactActiveClass: `is-active`,
  },
  build: {
    extend(config, { isClient }) {
      if (isClient && process.env.NODE_ENV === `test`) {
        // eslint-disable-next-line no-param-reassign
        config.entry = Array.isArray(config.entry) ? config.entry : [config.entry];
        config.entry.unshift(`./test/scripts/network-stubs.js`);
      }

      const sassLoader = config.module.rules
        .find(({ test }) => test.test(`.scss`)).oneOf[1].use
        .find(({ loader }) => loader === `sass-loader`);

      sassLoader.options.importer = nodeSassMagicImporter();
    },
    extractCSS: true,
  },
  ignore: [`**/*.spec.js`],
  modules: [
    `@nuxtjs/dotenv`,
    `@nuxtjs/pwa`,
  ],
};
