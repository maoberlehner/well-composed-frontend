export function makePost({ getPost, listPosts, types }) {
  const actions = {
    fetchPosts({ commit }) {
      return listPosts()
        .then(response => commit(types.SET_POSTS, response.data.slice(-20)));
    },
    fetchPost({ commit }, id) {
      return getPost(id)
        .then(response => commit(types.SET_POST, response.data));
    },
  };

  const mutations = {
    [types.SET_POSTS](state, posts) {
      // eslint-disable-next-line no-param-reassign
      state.posts = posts;
    },
    [types.SET_POST](state, post) {
      // eslint-disable-next-line no-param-reassign
      state.current = post;
    },
  };

  const getters = {
    allPosts: state => state.posts,
    currentPost: state => state.current,
  };

  const state = {
    posts: Array,
    current: Object,
  };

  return {
    namespaced: true,
    actions,
    mutations,
    getters,
    state,
  };
}
