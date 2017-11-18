const { client } = require(`nightwatch-cucumber`);
const { defineSupportCode } = require(`cucumber`);

const nestedSelector = require(`../../helpers/nested-selector`);
const routes = require(`../../helpers/routes`);
const deviceSizes = require(`../../helpers/device-sizes`);

defineSupportCode(({ defineStep }) => {
  defineStep(/^I (?:browse|open|visit).*? `(.*?)`$/, routeName =>
    client.url(routes[routeName]));

  defineStep(/^I (?:view).*? `(.*?)`.*?$/, deviceSize =>
    client.resizeWindow(...deviceSizes[deviceSize]));

  defineStep(/^I (?:find|identify|see|spot).*? (`.*`).*?$/, selectorChain =>
    client.expect.element(nestedSelector(selectorChain)).to.be.visible);

  defineStep(/^I (?:can|don)'t (?:find|identify|see|spot).*? (`.*`).*?$/, selectorChain =>
    client.expect.element(nestedSelector(selectorChain)).to.not.be.visible);

  defineStep(/^I (?:expect).*? (`.*`).*? to be present$/, selectorChain =>
    client.expect.element(nestedSelector(selectorChain)).to.be.present);

  defineStep(/^I (?:expect).*? (`.*`).*? to not be present$/, selectorChain =>
    client.expect.element(nestedSelector(selectorChain)).to.not.be.present);

  defineStep(/^I (?:enter|input|supply|type).*? "(.*?)" in.*? (`.*`)$/, (value, selectorChain) =>
    client.setValue(nestedSelector(selectorChain), value));

  defineStep(/^I (?:activate|click).*? (`.*`)$/, selectorChain =>
    client.click(nestedSelector(selectorChain)));

  defineStep(/^I (?:expect).*? (`.*`) (?:in|with) "(.*?)" (?:modifier|variant|status)$/, (selectorChain, variant) =>
    client.expect
      .element(`
                ${nestedSelector(selectorChain)}[class*="--${variant}"],
                ${nestedSelector(selectorChain)}[class*="is-${variant}"]
            `)
      .to.be.present);

  defineStep(/^I (?:expect).*? (`.*`) (?:with) "(.*?)" (?:state)$/, (selectorChain, state) =>
    client.expect
      .element(`${nestedSelector(selectorChain)}:${state}`)
      .to.be.present);

  defineStep(/^I (?:expect).*? `(.*?)`.*? opens$/, routeName =>
    client.assert.urlEquals(routes[routeName]));
});
