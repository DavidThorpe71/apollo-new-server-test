const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { createStore } = require("./_utils");
const resolvers = require("./resolvers");
const LaunchAPI = require("./datasources/launch");
const UserAPI = require("./datasources/user");

// Creates the SQL DB
const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
  })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
