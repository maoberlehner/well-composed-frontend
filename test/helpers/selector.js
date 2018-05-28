const matchAll = require(`./match-all`);

const PREFIXES = [
  `in a`,
  `in the`,
  `in`,
];
const SUFFIXES = [
  `area`,
  `section`,
];

function fromRawSelector(rawSelector) {
  const [name, n] = rawSelector.split(/(\d+)(?:st|nd|rd|th) /).reverse();
  const selector = `[data-qa="${name}"]`;

  if (n) return `${selector}:nth-child(${n})`;

  return selector;
}

function fromString({ matcher, string }) {
  return matchAll({ regex: matcher, string })
    .map(x => x[1])
    .map(x => fromRawSelector(x))
    .reverse()
    .join(` `);
}

function makeMatcher({ prefixes = PREFIXES, suffixes = SUFFIXES } = {}) {
  return new RegExp(`(?:${prefixes.join(`|`)}) ?(.+?) ?(?:${suffixes.join(`|`)})`, `g`);
}

module.exports = {
  PREFIXES,
  SUFFIXES,
  fromRawSelector,
  fromString,
  makeMatcher,
};
