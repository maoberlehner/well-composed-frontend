import fetchMock from 'fetch-mock';

function addNetworkStub({
  body,
  endpoint = `graphql`,
  queryType,
  type = `post`,
}) {
  fetchMock[type]((url, options) => {
    if (!new RegExp(`${endpoint}$`).test(url)) return false;

    const query = JSON.parse(options.body).query.trim();

    return new RegExp(`^query ${queryType}`).test(query);
  }, body);
}

// We use the `sessionStorage` in order to make it
// possible to queue stubs in Nightwatch.js
const queuedStubs = sessionStorage.getItem(`NETWORK_STUBS`);

if (queuedStubs) {
  JSON.parse(queuedStubs).forEach(x => addNetworkStub(x));
}

window.addNetworkStub = addNetworkStub;
