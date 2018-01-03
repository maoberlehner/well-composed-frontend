module.exports = `
  type Query {
    post(id: ID!): Post,
    posts: [Post],
  }
`;
