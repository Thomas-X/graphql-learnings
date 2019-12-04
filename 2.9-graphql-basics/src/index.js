import {GraphQLServer} from "graphql-yoga";

const typeDefs = `
type Query {
    hello: String!
    name: String!
}
`;

const resolvers = {
    Query: {
        hello() {
            return "hello world"
        },
        name() {
          return "thomas"
        }
    }
}
const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("started")
})