const {GraphQLServer} = require('graphql-yoga');

const typeDefs = `
type Query {
    des: String!
}
`

const resolvers = {
    Query: {
        des: () => "this is working"
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log("server is running "));