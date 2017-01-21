const MemoryFs = require(`memory-fs`);
const path = require(`path`);
const webpack = require(`webpack`);
const webpackDevMiddleware = require(`webpack-dev-middleware`);
const webpackHotMiddleware = require(`webpack-hot-middleware`);

const webpackClientConfig = require(`./webpack.client.config`);
const webpackServerConfig = require(`./webpack.server.config`);

module.exports = function setupDevServer(app, options) {
  // Modify the client config to work with hot middleware.
  webpackClientConfig.entry.app = [`webpack-hot-middleware/client`, webpackClientConfig.entry.app];
  webpackClientConfig.output.filename = `[name].js`;
  webpackClientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );

  // Dev middleware.
  const clientCompiler = webpack(webpackClientConfig);
  const devMiddleware = webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false,
    },
  });
  app.use(devMiddleware);

  clientCompiler.plugin(`done`, () => {
    const fs = devMiddleware.fileSystem;
    const filePath = path.join(webpackClientConfig.output.path, `index.html`);

    if (fs.existsSync(filePath)) {
      const index = fs.readFileSync(filePath, `utf-8`);
      options.indexUpdated(index);
    }
  });
  app.use(webpackHotMiddleware(clientCompiler));

  // Watch and update server renderer.
  const serverCompiler = webpack(webpackServerConfig);
  const mfs = new MemoryFs();
  const outputPath = path.join(
    webpackServerConfig.output.path,
    webpackServerConfig.output.filename
  );
  serverCompiler.outputFileSystem = mfs;
  serverCompiler.watch({}, (error, stats) => {
    if (error) throw error;
    // eslint-disable-next-line no-param-reassign
    stats = stats.toJson();
    // eslint-disable-next-line no-console
    stats.errors.forEach(statError => console.error(statError));
    // eslint-disable-next-line no-console
    stats.warnings.forEach(statWarning => console.warn(statWarning));
    options.bundleUpdated(mfs.readFileSync(outputPath, `utf-8`));
  });
};
