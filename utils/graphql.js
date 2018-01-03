import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import 'isomorphic-unfetch';

export const client = new ApolloClient({
  link: new HttpLink({ uri: `http://localhost:3001/graphql` }),
  cache: new InMemoryCache(),
});

export const query = queryString => client.query({ query: gql(queryString) });
