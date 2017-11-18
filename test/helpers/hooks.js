const { defineSupportCode } = require(`cucumber`);
const { client } = require(`nightwatch-cucumber`);

const runAfter = [
  // Clear the storage after every test run
  // to provide a clean slate.
  `window.sessionStorage.clear();`,
  `window.localStorage.clear();`,
];

defineSupportCode(({ After }) => {
  After(() => client.execute(runAfter.join(``)));
});
