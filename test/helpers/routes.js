const { url } = require(`../conf/default.conf`).test_settings.default.globals;

module.exports = {
  'home page': url,
  'about page': `${url}/about`,
};
