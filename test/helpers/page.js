let currentUrl = null;

function loaded() {
  return currentUrl !== null;
}

function reset() {
  currentUrl = null;
}

function set(url) {
  currentUrl = url;
}

module.exports = {
  loaded,
  reset,
  set,
};
