export function makeApiEndpoint({ axios, baseUrl }) {
  return endpoint => axios.create({ baseURL: `${baseUrl}${endpoint}` });
}
