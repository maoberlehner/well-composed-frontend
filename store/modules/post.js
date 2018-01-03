import { query } from '../../utils/graphql';

import {
  SET_POST,
  SET_POSTS,
} from '../mutation-types';

export default {
  namespaced: true,
  actions: {
    fetchPosts({ commit }) {
      return query(`
        query {
          posts {
            title
            body
          }
        }
      `).then(response => commit(SET_POSTS, response.data.posts));
    },
    fetchPost({ commit }, id) {
      return query(`
        query {
          post(id: ${id}) {
            title
            body
          }
        }
      `).then(response => commit(SET_POST, response.data.post));
    },
  },
  mutations: {
    [SET_POSTS](state, posts) {
      // eslint-disable-next-line no-param-reassign
      state.posts = posts;
    },
    [SET_POST](state, post) {
      // eslint-disable-next-line no-param-reassign
      state.current = post;
    },
  },
  state: {
    posts: Array,
    current: Object,
  },
};
