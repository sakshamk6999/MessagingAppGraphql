const {GraphQLServer} = require('graphql-yoga');
const { PrismaClient } = require("@prisma/client");
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const Message = require('./resolvers/Message');
const User = require('./resolvers/User');
const Subscription = require('./resolvers/Subscription')
const { PubSub } = require('graphql-yoga');

const pubsub = new PubSub();
const prisma = new PrismaClient();

const resolvers = {
    Query,
    Mutation,
    User,
    Message,
    Subscription
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return{
            ...request,
            prisma,
            pubsub
            }
        }
})

server.start(() => console.log("server is running "));