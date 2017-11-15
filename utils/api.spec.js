import { makeApi } from './api';

describe(`api()`, () => {
  test(`It should call the axios \`create\` method.`, () => {
    const mockAxios = { create: jest.fn() };
    const api = makeApi({ axios: mockAxios, baseUrl: `https://some.url/` });

    api(`foo/bar`);

    expect(mockAxios.create).toBeCalledWith({ baseURL: `https://some.url/foo/bar` });
  });
});
