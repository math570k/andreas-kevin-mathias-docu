import React from "react";
import {AuthProvider} from "./AuthProvider";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
});

//Primary wrappers like Auth and Router will go in here
export default function AppProviders({children}) {
    return (
        <ApolloProvider client={client}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </ApolloProvider>
    )
}