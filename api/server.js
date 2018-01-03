const cors = require(`cors`);
const express = require(`express`);
const bodyParser = require(`body-parser`);
const { graphqlExpress, graphiqlExpress } = require(`apollo-server-express`);
const { makeExecutableSchema } = require(`graphql-tools`);

const queryType = require(`./types/query`);
const postType = require(`./types/post`);

const postResolver = require(`./resolvers/post`);

const PORT = 3001;

const typeDefs = `
  ${queryType}
  ${postType}
`;
const resolvers = {
  Query: {
    ...postResolver,
  },
};
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.options(`*`, cors());

app.use(cors({ origin: `http://localhost:3000` }));
app.use(`/graphql`, bodyParser.json(), graphqlExpress({ schema }));
app.get(`/graphiql`, graphiqlExpress({ endpointURL: `/graphql` }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);
});
