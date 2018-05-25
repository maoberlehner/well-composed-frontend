import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env.API_URL);
