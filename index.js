require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');

const { db } = require('./config');
const PORT = process.env.PORT || 7777;
const { resolvers } = require('./src');

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
});

if (db) {
    console.log(`Connected to database`);
    server.start({ PORT }, () =>
        console.log(`The server is running on port ${PORT}`)
    );
}
