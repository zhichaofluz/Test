const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
    type Query{
      "A simple type for getting started!"
      hello: String
    }
`;

//A map of functions which return data fro the schema.
const resolvers = {
  Query: {
    hello: () => 'world'
  }
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`)
});

// test for revert