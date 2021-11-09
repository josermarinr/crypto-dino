import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({});

export const AClient = new ApolloClient({
    cache,
    connectToDevTools:
        process.env.NODE_ENV === "development" ||
        process.env.REACT_APP_FRONTEND_DEBUG === "True",
    uri: process.env.BACKEND_GRAPHQL,
});
