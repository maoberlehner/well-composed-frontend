import { client } from '../../utils/graphql';
import { FETCH_POST, FETCH_POSTS } from '../../store/action-types';

import {
  SET_POST,
  SET_POSTS,
} from '../mutation-types';

export default {
  namespaced: true,
  actions: {
    async [FETCH_POSTS]({ commit }) {
      const { posts } = await client.request(`
        query Posts {
          posts {
            title
            body
          }
        }
      `);

      commit(SET_POSTS, posts);
    },
    async [FETCH_POST]({ commit }, id) {
      const { post } = await client.request(`
        query Post($id: ID!) {
          post(id: $id) {
            title
            body
          }
        }
      `, { id });

      commit(SET_POST, post);
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
