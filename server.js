const compression = require(`compression`);
const express = require(`express`);
// const favicon = require('serve-favicon');
const fs = require(`fs`);
const path = require(`path`);
const serialize = require(`serialize-javascript`);
const VueServerRenderer = require(`vue-server-renderer`);
const LRU = require(`lru-cache`);

const setupDevServer = require(`./build/setup-dev-server`);

const resolve = file => path.resolve(__dirname, file);

const isProduction = process.env.NODE_ENV === `production`;

const app = express();

let indexHTML;
let renderer;

function createRenderer(bundle) {
  return VueServerRenderer.createBundleRenderer(bundle, {
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15,
    }),
  });
}

function parseIndex(template) {
  const contentMarker = `<!-- APP -->`;
  const i = template.indexOf(contentMarker);
  return {
    head: template.slice(0, i),
    tail: template.slice(i + contentMarker.length),
  };
}

if (isProduction) {
  // in production: create server renderer and index HTML from real fs
  renderer = createRenderer(fs.readFileSync(resolve(`./dist/server-bundle.js`), `utf-8`));
  indexHTML = parseIndex(fs.readFileSync(resolve(`./dist/index.html`), `utf-8`));
} else {
  // in development: setup the dev server with watch and hot-reload,
  // and update renderer / index HTML on file change.
  setupDevServer(app, {
    bundleUpdated: (bundle) => {
      renderer = createRenderer(bundle);
    },
    indexUpdated: (index) => {
      indexHTML = parseIndex(index);
    },
  });
}

const serve = (url, cache) => express.static(resolve(url), {
  maxAge: cache && isProduction ? 60 * 60 * 24 * 30 : 0,
});

app.use(compression({ threshold: 0 }));
// app.use(favicon('./public/logo-48.png'))
app.use(`/service-worker.js`, serve(`./dist/service-worker.js`));
// app.use('/manifest.json', serve('./manifest.json'))
app.use(`/dist`, serve(`./dist`));
// app.use('/public', serve('./public'))

// eslint-disable-next-line consistent-return
app.get(`*`, (request, response) => {
  if (!renderer) return response.end(`waiting for compilation... refresh in a moment.`);

  response.setHeader(`Content-Type`, `text/html`);

  const s = Date.now();
  const context = { url: request.url };
  const renderStream = renderer.renderToStream(context);

  renderStream.once(`data`, () => {
    response.write(indexHTML.head);
  });

  renderStream.on(`data`, (chunk) => {
    response.write(chunk);
  });

  renderStream.on(`end`, () => {
    // embed initial store state
    if (context.initialState) {
      response.write(
        `<script>window.VUE_APP_INITIAL_STATE=${
          serialize(context.initialState, { isJSON: true })
        }</script>`
      );
    }
    response.end(indexHTML.tail);
    // eslint-disable-next-line no-console
    console.log(`whole request: ${Date.now() - s}ms`);
  });

  renderStream.on(`error`, (error) => {
    if (error && error.code === `404`) return response.status(404).end(`404 | Page Not Found`);
    // Render Error Page or Redirect.
    // eslint-disable-next-line no-console
    console.error(`error during render : ${request.url}`);
    // eslint-disable-next-line no-console
    console.error(error);
    return response.status(500).end(`Internal Error 500`);
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at localhost:${port}`);
});
