import React from "react";
import {useAuth} from "../../services/providers/AuthProvider";
import {useByeQuery} from "../../graphql/test";
import Header from "../../ui/layout/Header";
import * as Pages from "../pages";
import * as Sidebar from "../sidebars";
import WithSidebar from "../../ui/layout/WithSidebar";
import AuthenticatedRoutes from "../../routes/AuthenticatedRoutes";

export default function AuthenticatedApp({children}) {
    const {data, error, refetch} = useByeQuery();
    console.log(data, error)
    const {logout} = useAuth()

    return (
        <React.Fragment>
            <Header/>
            <main className={'min-h-full relative pt-16'}>
                <AuthenticatedRoutes/>
            </main>
        </React.Fragment>
    )
}