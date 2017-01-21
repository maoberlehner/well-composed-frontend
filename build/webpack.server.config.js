const webpack = require(`webpack`);

const base = require(`./webpack.base.config`);
const packageJson = require(`../package.json`);

module.exports = Object.assign({}, base, {
  target: `node`,
  devtool: false,
  entry: `./js/entry-server.js`,
  output: Object.assign({}, base.output, {
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
