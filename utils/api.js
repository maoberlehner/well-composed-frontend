export function makeApi({ axios, baseUrl }) {
  return endpoint => axios.create({ baseURL: `${baseUrl}${endpoint}` });
}
