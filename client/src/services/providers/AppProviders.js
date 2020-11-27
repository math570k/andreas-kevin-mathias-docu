import React from "react";
import {AuthProvider} from "./AuthProvider";
import { OrganizationProvider } from "./OrganizationProvider";
import ApolloClientProvider from "./ApolloClientProvider";
import {BrowserRouter} from "react-router-dom";

//Primary wrappers like Auth and Router will go in here
export default function AppProviders({children}) {
    return (
        <ApolloClientProvider>
            <AuthProvider>
                <OrganizationProvider>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </OrganizationProvider>
            </AuthProvider>
        </ApolloClientProvider>
    )
}