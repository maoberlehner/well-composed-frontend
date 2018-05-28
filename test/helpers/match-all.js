module.exports = function matchAll({ regex, string }) {
  const matches = [];
  let match;

  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(string)) !== null) {
    if (match[0] !== `undefined`) matches.push(match);
  }

  return matches;
};
