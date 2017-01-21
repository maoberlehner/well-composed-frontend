const MFS = require(`memory-fs`);
const path = require(`path`);
const webpack = require(`webpack`);
const webpackDevMiddleware = require(`webpack-dev-middleware`);
const webpackHotMiddleware = require(`webpack-hot-middleware`);

const clientConfig = require(`./webpack.client.config`);
const serverConfig = require(`./webpack.server.config`);

module.exports = function setupDevServer(app, opts) {
  // modify client config to work with hot middleware
  clientConfig.entry.app = [`webpack-hot-middleware/client`, clientConfig.entry.app];
  clientConfig.output.filename = `[name].js`;
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );

  // dev middleware
  const clientCompiler = webpack(clientConfig);
  const devMiddleware = webpackDevMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false,
    },
  });
  app.use(devMiddleware);
  clientCompiler.plugin(`done`, () => {
    const fs = devMiddleware.fileSystem;
    const filePath = path.join(clientConfig.output.path, `index.html`);
    if (fs.existsSync(filePath)) {
      const index = fs.readFileSync(filePath, `utf-8`);
      opts.indexUpdated(index);
    }
  });

  // hot middleware
  app.use(webpackHotMiddleware(clientCompiler));

  // watch and update server renderer
  const serverCompiler = webpack(serverConfig);
  const mfs = new MFS();
  const outputPath = path.join(serverConfig.output.path, serverConfig.output.filename);
  serverCompiler.outputFileSystem = mfs;
  serverCompiler.watch({}, (error, stats) => {
    if (error) throw error;
    // eslint-disable-next-line no-param-reassign
    stats = stats.toJson();
    // eslint-disable-next-line no-console
    stats.errors.forEach(statError => console.error(statError));
    // eslint-disable-next-line no-console
    stats.warnings.forEach(statWarning => console.warn(statWarning));
    opts.bundleUpdated(mfs.readFileSync(outputPath, `utf-8`));
  });
};
