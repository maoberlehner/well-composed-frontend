const { defineStep } = require(`cucumber`);

const stepDefinitions = [];

function register(pattern, callback) {
  stepDefinitions.push({ callback, pattern });

  return defineStep(pattern, callback);
}

function run(stepDescription) {
  stepDefinitions.some(({ callback, pattern }) => {
    const match = stepDescription
      .replace(/^(Given|When|Then|And) /, ``)
      .match(pattern);

    if (!match) return false;

    const parameters = match.slice(1);
    callback(...parameters);

    return true;
  });
}

module.exports = {
  Given: register,
  When: register,
  Then: register,
  register,
  run,
};
