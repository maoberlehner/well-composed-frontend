const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecachePlugin = require('sw-precache-webpack-plugin');
const magicImporter = require('node-sass-magic-importer');
const path = require('path');

const vueConfig = require('./vue-loader.config');
const base = require('./webpack.base.config');

const config = Object.assign({}, base, {
  plugins: (base.plugins || []).concat([
    // Strip comments in Vue code.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"',
    }),
    // Extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    // Generate output HTML.
    new HTMLPlugin({
      template: 'html/index.template.html',
    }),
  ]),
});

if (process.env.NODE_ENV === 'production') {
  // Use ExtractTextPlugin to extract CSS into a single file
  // so it's applied on initial render.
  // vueConfig is already included in the config via LoaderOptionsPlugin
  // here we overwrite the loader config for <style lang="stylus">
  // so they are extracted.
  vueConfig.loaders = {
    scss: ExtractTextPlugin.extract({
      loader: `css-loader!sass-loader`,
      fallbackLoader: 'vue-style-loader',
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, '../scss')],
          importer: magicImporter(),
        },
      },
    }),
  };

  config.plugins.push(
    new ExtractTextPlugin('styles.[hash].css'),
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    // minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    }),
    new SWPrecachePlugin({
      cacheId: 'holy-grail',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/],
    })
  );
};

module.exports = config;
