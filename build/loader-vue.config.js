const autoprefixer = require(`autoprefixer`);

module.exports = {
  preserveWhitespace: false,
  postcss: [
    autoprefixer(),
  ],
};
