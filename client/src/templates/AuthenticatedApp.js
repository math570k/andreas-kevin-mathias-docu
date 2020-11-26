import React from "react";
import {useAuth} from "../services/providers/AuthProvider";
import {useByeQuery} from "../graphql/test";
import Header from "../ui/layout/Header";
import * as Pages from "../pages";
import * as Sidebar from "../widgets/sidebars";
import WithSidebar from "../ui/layout/WithSidebar";

export default function AuthenticatedApp(props) {
    const {data, error, refetch} = useByeQuery();
    console.log(data, error)
    const {logout} = useAuth()

    return (
        <React.Fragment>
            {/*Authenticated App*/}
            <Header/>
            <main className={'min-h-full relative pt-16'}>
                <WithSidebar sidebar={<Sidebar.DocumentationOverview/>}>
                    <Pages.Home/>
                </WithSidebar>
            </main>
        </React.Fragment>
    )
}