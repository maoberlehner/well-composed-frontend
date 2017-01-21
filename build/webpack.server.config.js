const webpack = require(`webpack`);

const baseConfig = require(`./webpack.base.config`);
const packageJson = require(`../package.json`);

module.exports = Object.assign({}, baseConfig, {
  target: `node`,
  devtool: false,
  entry: `./app/js/entry-server.js`,
  output: Object.assign({}, baseConfig.output, {
    filename: `server-bundle.js`,
    libraryTarget: `commonjs2`,
  }),
  externals: Object.keys(packageJson.dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || `development`),
      'process.env.VUE_ENV': `"server"`,
    }),
  ],
});
