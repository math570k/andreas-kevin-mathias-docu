import React from "react";
import {AuthProvider} from "./AuthProvider";
import ApolloClientProvider from "./ApolloClientProvider";

//Primary wrappers like Auth and Router will go in here
export default function AppProviders({children}) {
    return (
        <ApolloClientProvider>
            <AuthProvider>

                {children}

            </AuthProvider>
        </ApolloClientProvider>
    )
}