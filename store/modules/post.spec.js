import { FETCH_POST, FETCH_POSTS } from '../../store/action-types';

import post from './post';

jest.mock(`../../utils/graphql`, () => ({
  client: {
    request: () => Promise.resolve({
      post: { foo: `bar` },
      posts: [`foo`, `bar`],
    }),
  },
}));

describe(`post`, () => {
  describe(`actions`, () => {
    describe(`FETCH_POSTS()`, () => {
      test(`It should commit the \`SET_POSTS\` mutation.`, async () => {
        const commit = jest.fn();

        await post.actions[FETCH_POSTS]({ commit });

        expect(commit).toBeCalledWith(`SET_POSTS`, [`foo`, `bar`]);
      });
    });

    describe(`FETCH_POST()`, () => {
      test(`It should commit the \`SET_POST\` mutation.`, async () => {
        const commit = jest.fn();

        await post.actions[FETCH_POST]({ commit });

        expect(commit).toBeCalledWith(`SET_POST`, { foo: `bar` });
      });
    });
  });

  describe(`mutations`, () => {
    describe(`SET_POSTS`, () => {
      test(`It should set the posts state.`, () => {
        const mockState = { posts: [] };

        post.mutations.SET_POSTS(mockState, [{ foo: `bar` }]);

        expect(mockState).toEqual({ posts: [{ foo: `bar` }] });
      });
    });

    describe(`SET_POST`, () => {
      test(`It should set the current post state.`, () => {
        const mockState = { current: {} };

        post.mutations.SET_POST(mockState, { foo: `bar` });

        expect(mockState).toEqual({ current: { foo: `bar` } });
      });
    });
  });
});
