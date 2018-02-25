import { client } from '../../utils/graphql';

import {
  SET_POST,
  SET_POSTS,
} from '../mutation-types';

export default {
  namespaced: true,
  actions: {
    fetchPosts({ commit }) {
      return client.request(`
        query Posts {
          posts {
            title
            body
          }
        }
      `).then(response => commit(SET_POSTS, response.posts));
    },
    fetchPost({ commit }, id) {
      return client.request(`
        query Post($id: ID!) {
          post(id: $id) {
            title
            body
          }
        }
      `, { id }).then(response => commit(SET_POST, response.post));
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
