export function makeGetPost({ api }) {
  return id => api.get(`${id}`);
}

export function makeListPosts({ api }) {
  return params => api.get(``, { params });
}
