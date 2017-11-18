const prefixRegEx = /` in.*? (`.*`)/;

function parseSelectorChain(selectorChain) {
  return selectorChain
    .split(`\` \``)
    .map(x => x.replace(/`/g, ``));
}

function extractPrefixSelectors(selectorChain) {
  const prefixMatch = selectorChain.match(prefixRegEx);

  return prefixMatch ? parseSelectorChain(prefixMatch[1]) : [];
}

module.exports = function nestedSelector(selectorChain) {
  const prefixSelectors = extractPrefixSelectors(selectorChain);
  const selectors = parseSelectorChain(selectorChain.replace(prefixRegEx, `\``));

  return prefixSelectors
    .concat(selectors)
    .map(x => `[data-qa="${x.replace(/`/g, ``)}"]`)
    .join(` `);
};
