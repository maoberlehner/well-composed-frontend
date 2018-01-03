const postService = require(`../services/post`);

function post(object, args) {
  return postService.getById(args.id);
}

function posts() {
  return postService.all();
}

module.exports = {
  post,
  posts,
};
