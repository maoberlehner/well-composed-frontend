const path = require(`path`);

module.exports = function resolveMockFile({ queryType, name }) {
  const mockDirectory = path.resolve(__dirname, `..`, `mocks`);
  const mockPath = path.join(mockDirectory, queryType, name.replace(/ /g, `-`));

  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(mockPath);
};
