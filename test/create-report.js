const reporter = require(`cucumber-html-reporter`);

const options = {
  theme: `hierarchy`,
  jsonFile: `test/reports/cucumber.json`,
  output: `test/reports/report.html`,
  storeScreenshots: true,
  launchReport: true,
};
reporter.generate(options);
