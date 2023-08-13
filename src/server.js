const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema')
const { Query, Mutation } = require('./graphql/resolvers/_index')




module.exports = async function RunServer() {
    const resolvers = {
        Query,
        Mutation
    };
    const server = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    await server.start()
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );

}