const postDb = require(`../db/post`);

function all() {
  return postDb;
}

function getById(id) {
  return postDb.find(post => post.id === id);
}

module.exports = {
  all,
  getById,
};
