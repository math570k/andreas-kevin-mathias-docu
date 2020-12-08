import React, { useEffect } from "react";
import Header from "../../ui/layout/header/Header";
import AuthenticatedRoutes from "../../routes/AuthenticatedRoutes";
import {OrganizationProvider} from "../../services/providers/OrganizationProvider";

export default function AuthenticatedApp() {

    return (
        <OrganizationProvider>
            <Header/>
            <main className={'min-h-full relative pt-16'}>
                <AuthenticatedRoutes/>
            </main>
        </OrganizationProvider>
    );

}