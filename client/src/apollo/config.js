import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
    uri: 'http://localhost:9000/graphql',
});

export default client;