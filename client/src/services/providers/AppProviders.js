import React from "react";
import {AuthProvider} from "./AuthProvider";
import ApolloClientProvider from "./ApolloClientProvider";
import {BrowserRouter} from "react-router-dom";

//Primary wrappers like Auth and Router will go in here
export default function AppProviders({children}) {
    return (
        <ApolloClientProvider>
            <AuthProvider>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </AuthProvider>
        </ApolloClientProvider>
    )
}