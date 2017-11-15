import { makeGetPost, makeListPosts } from './post';

describe(`getPost()`, () => {
  test(`It should call the API \`get\` method with the given ID as string.`, () => {
    const mockApi = { get: jest.fn() };
    const getPost = makeGetPost({ api: mockApi });

    getPost(1);

    expect(mockApi.get).toBeCalledWith(`1`);
  });
});

describe(`listPosts()`, () => {
  test(`It should call the API \`get\` method with the given params.`, () => {
    const mockApi = { get: jest.fn() };
    const listPosts = makeListPosts({ api: mockApi });
    const params = { foo: `bar` };

    listPosts(params);

    expect(mockApi.get).toBeCalledWith(``, { params });
  });
});
