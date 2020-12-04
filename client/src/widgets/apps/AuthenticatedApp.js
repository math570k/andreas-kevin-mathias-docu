import React, { useEffect } from "react";
import {useAuth} from "../../services/providers/AuthProvider";
import Header from "../../ui/layout/header/Header";
import * as Pages from "../pages";
import * as Sidebar from "../sidebars";
import WithSidebar from "../../ui/layout/WithSidebar";
import AuthenticatedRoutes from "../../routes/AuthenticatedRoutes";
import {OrganizationProvider} from "../../services/providers/OrganizationProvider";
import { useGetUserOrgs } from "../../graphql/organization";


export default function AuthenticatedApp({children}) {
    const {logout} = useAuth();

    return (
        <OrganizationProvider>
            <Header/>
            <main className={'min-h-full relative pt-16'}>
                <AuthenticatedRoutes/>
            </main>
        </OrganizationProvider>
    );

 /*   if(error) {
        return <p>Error</p>
    } else if(loading) {
        return <p>Loading</p>
    } else if (data) {
            return (
                <React.Fragment>
                    <Header/>
                    <main className={'min-h-full relative pt-16'}>
                        <AuthenticatedRoutes/>
                    </main>
                </React.Fragment>
            )
    }*/
}