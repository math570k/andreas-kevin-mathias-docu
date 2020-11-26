import React from "react";
import {AuthProvider} from "./AuthProvider";
import { OrganizationProvider } from "./OrganizationProvider";
import ApolloClientProvider from "./ApolloClientProvider";

//Primary wrappers like Auth and Router will go in here
export default function AppProviders({children}) {
    return (
        <ApolloClientProvider>
            <AuthProvider>
                <OrganizationProvider>

                    {children}
                    
                </OrganizationProvider>
            </AuthProvider>
        </ApolloClientProvider>
    )
}