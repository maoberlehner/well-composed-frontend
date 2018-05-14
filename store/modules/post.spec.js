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
    describe(`fetchPosts()`, () => {
      test(`It should commit the \`SET_POSTS\` mutation.`, async () => {
        const commit = jest.fn();

        await post.actions.fetchPosts({ commit });

        expect(commit).toBeCalledWith(`SET_POSTS`, [`foo`, `bar`]);
      });
    });

    describe(`fetchPost()`, () => {
      test(`It should commit the \`SET_POST\` mutation.`, async () => {
        const commit = jest.fn();

        await post.actions.fetchPost({ commit });

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
