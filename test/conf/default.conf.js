const nightwatchCucumber = require(`nightwatch-cucumber`);

// Enable development mode for easier debugging
// when working with a TDD appraoch. Running tests
// in development mode is not as fast.
const devMode = false;

const runInHeadlessMode = !devMode;
// Warning! Although enabling parallelization makes
// tests faster, it sometimes leads to false positive
// breaking tests. Use with caution.
const runInParallelMode = !devMode;

const chromeArgs = [`artifacts-dir=./test/reports/screenshots`];
if (runInHeadlessMode) chromeArgs.push(`--headless`);

nightwatchCucumber({
  cucumberArgs: [
    `--require`, `test/features/step-definitions`,
    `--require`, `test/helpers/hooks.js`,
    `--format`, `node_modules/cucumber-pretty`,
    `--format`, `json:./test/reports/cucumber.json`,
    `test/features`,
  ],
});

module.exports = {
  output_folder: `test/reports`,
  globals_path: `test/helpers/globals.js`,
  selenium: {
    start_process: false,
  },
  test_workers: runInParallelMode,
  test_settings: {
    default: {
      selenium_port: 9515,
      selenium_host: `localhost`,
      default_path_prefix: ``,
      globals: {
        url: `http://127.0.0.1:3000`,
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: `test/reports/screenshots`,
      },
      desiredCapabilities: {
        browserName: `chrome`,
        chromeOptions: {
          args: chromeArgs,
        },
        acceptSslCerts: true,
      },
    },
  },
};
