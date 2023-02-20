const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const resolvers = require('./Schema/Resolvers');
const { typeDefs } = require('./Schema/TypeDefs');

const app = express();

const server =  new ApolloServer({typeDefs, resolvers});

const apolloserver = async () => {
    await server.start();
    server.applyMiddleware({ app});
    app.listen({port: 3001}, () => {
        console.log('server is runnin at port 3001...');
    }) 
}

try {
    apolloserver();
} catch (err) {
    console.log(err.message);
}