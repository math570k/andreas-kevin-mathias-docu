import React, { useEffect } from "react";
import {useAuth} from "../../services/providers/AuthProvider";
import Header from "../../ui/layout/header/Header";
import * as Pages from "../pages";
import * as Sidebar from "../sidebars";
import WithSidebar from "../../ui/layout/WithSidebar";
import AuthenticatedRoutes from "../../routes/AuthenticatedRoutes";
import { useOrganization } from "../../services/providers/OrganizationProvider";
import { useGetUserOrgs } from "../../graphql/organization";

export default function AuthenticatedApp({children}) {
    const {logout} = useAuth();

    const user_id = 1;

    const { setOrganization } = useOrganization();    
    const { data, error, loading } = useGetUserOrgs(user_id);

    useEffect(() => {
        if(data) {    
            // Default to first organization in query
            setOrganization(data.userOrganizations[0])
        }
    }, [data])

    if(error) {
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
    }
}