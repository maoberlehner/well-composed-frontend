#!/usr/bin/env node
const browserstack = require(`browserstack-local`);
const Nightwatch = require(`nightwatch`);

try {
  // Code to start browserstack local before start of test.
  console.log(`Connecting local`); // eslint-disable-line no-console

  Nightwatch.bs_local = new browserstack.Local();
  Nightwatch.bs_local.start({ key: process.env.BROWSERSTACK_ACCESS_KEY }, (error) => {
    if (error) throw error;

    // eslint-disable-next-line no-console
    console.log(`Connected. Now testing...`);

    Nightwatch.cli((argv) => {
      Nightwatch.CliRunner(argv)
        .setup(null, () => {
          // Code to stop browserstack local after end of parallel test.
          Nightwatch.bs_local.stop(() => {});
        })
        .runTests(() => {
          // Code to stop browserstack local after end of single test.
          Nightwatch.bs_local.stop(() => {});
        });
    });
  });
} catch (error) {
  // eslint-disable-next-line no-console
  console.log(`There was an error while starting the test runner:\n\n`);

  process.stderr.write(`${error.stack}\n`);
  process.exit(2);
}
