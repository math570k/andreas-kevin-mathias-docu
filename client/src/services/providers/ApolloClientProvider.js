import React from "react";
import {ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, ApolloLink} from "@apollo/client";
import {getAccessToken, refreshAccessToken} from "../utils/accessToken";
import jwt_decode from "jwt-decode";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: '/graphql',
})

const authLink = setContext( async(_, {headers}) => {
    const accessToken = getAccessToken();

    if(accessToken) {
        const { exp } = jwt_decode(accessToken)
        const expirationTime = (exp * 1000) - (60000 * 10);

        //Check if the 15min Token has expired. if it has refresh that token and use the refreshed token in the header.
        if(Date.now() >= expirationTime) {
            const UpdatedAccessToken = await refreshAccessToken();

            return {
                headers: {
                    authorization: `bearer ${UpdatedAccessToken}`
                }
            }
        }

        return {
            headers: {
                authorization: accessToken ? `bearer ${accessToken}` : ''
            }
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    credentials: "include",
});

export default function ApolloClientProvider({children}) {

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}