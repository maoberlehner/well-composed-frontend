export function makePost({ getPost, listPosts, types }) {
  const actions = {
    fetchPosts({ commit }) {
      return listPosts()
        .then(response => commit(types.SET_POSTS, response.data.slice(-20)))
        .catch((error) => {
          throw new Error(error);
        });
    },
    fetchPost({ commit }, id) {
      return getPost(id)
        .then(response => commit(types.SET_POST, response.data))
        .catch((error) => {
          throw new Error(error);
        });
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
    allPosts(state) {
      return state.posts;
    },
    currentPost(state) {
      return state.current;
    },
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
