const compression = require(`compression`);
const express = require(`express`);
const fs = require(`fs`);
const LRU = require(`lru-cache`);
const path = require(`path`);
const serialize = require(`serialize-javascript`);
const VueServerRenderer = require(`vue-server-renderer`);

const setupDevServer = require(`./build/setup-dev-server`);

const resolve = file => path.resolve(__dirname, file);
const isProduction = process.env.NODE_ENV === `production`;
const app = express();

let indexHtml;
let renderer;

function createRenderer(bundle) {
  const fifteenMinutesInMilliseconds = 1000 * 60 * 15;
  return VueServerRenderer.createBundleRenderer(bundle, {
    cache: LRU({
      max: 1000,
      maxAge: fifteenMinutesInMilliseconds,
    }),
  });
}

function parseIndex(template) {
  const contentMarker = `<!-- APP -->`;
  const contentMarkerIndex = template.indexOf(contentMarker);
  return {
    head: template.slice(0, contentMarkerIndex),
    tail: template.slice(contentMarkerIndex + contentMarker.length),
  };
}

if (isProduction) {
  // In production: create server renderer and index HTML from real fs.
  renderer = createRenderer(fs.readFileSync(resolve(`./dist/server-bundle.js`), `utf-8`));
  indexHtml = parseIndex(fs.readFileSync(resolve(`./dist/index.html`), `utf-8`));
} else {
  // In development: setup the dev server with watch and hot-reload,
  // and update renderer / index HTML on file change.
  setupDevServer(app, {
    bundleUpdated: (bundle) => {
      renderer = createRenderer(bundle);
    },
    indexUpdated: (index) => {
      indexHtml = parseIndex(index);
    },
  });
}

const oneMonthInSeconds = 60 * 60 * 24 * 30;
const serve = (url, cache) => express.static(resolve(url), {
  maxAge: cache && isProduction ? oneMonthInSeconds : 0,
});

app.use(compression({ threshold: 0 }));
app.use(`/service-worker.js`, serve(`./dist/service-worker.js`));
app.use(`/dist`, serve(`./dist`));

// eslint-disable-next-line consistent-return
app.get(`*`, (request, response) => {
  if (!renderer) return response.end(`Waiting for compilation, refresh in a moment.`);

  response.setHeader(`Content-Type`, `text/html`);

  const context = { url: request.url };
  const renderStream = renderer.renderToStream(context);

  renderStream.once(`data`, () => {
    response.write(indexHtml.head);
  });

  renderStream.on(`data`, (chunk) => {
    response.write(chunk);
  });

  renderStream.on(`end`, () => {
    // Embed initial store state.
    if (context.initialState) {
      response.write(
        `<script>window.VUE_APP_INITIAL_STATE=${
          serialize(context.initialState, { isJSON: true })
        }</script>`
      );
    }
    response.end(indexHtml.tail);
  });

  renderStream.on(`error`, (error) => {
    if (error && error.code === `404`) return response.status(404).end(`404 | Page Not Found`);
    // eslint-disable-next-line no-console
    console.error(`Error during render: ${request.url}`);
    // eslint-disable-next-line no-console
    console.error(error);
    return response.status(500).end(`Internal Error 500`);
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at localhost:${port}`);
});
