const { After } = require(`cucumber`);
const { client } = require(`nightwatch-cucumber`);
const page = require(`./page`);

const runAfter = [
  // Clear the storage after every test run
  // to provide a clean slate.
  `window.sessionStorage.clear();`,
  `window.localStorage.clear();`,
];

After(() => {
  page.reset();
  client.execute(runAfter.join(``));
});
