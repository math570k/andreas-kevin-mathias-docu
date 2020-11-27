import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import AuthenticatedApp from "../templates/AuthenticatedApp";
import * as Page from "../widgets/pages";
import WithSidebar from "../ui/layout/WithSidebar";
import * as Sidebar from "../widgets/sidebars";

export default function AuthenticatedRoutes() {
    return (
        <Switch>
            <Route path={'/home'}>
                <WithSidebar sidebar={<Sidebar.DocumentationOverview/>}>
                    <Page.Home/>
                </WithSidebar>
            </Route>

            <Route path={'/'} exact={true}>
                <Redirect to={'/home'}/>
            </Route>

            <Route path="*">
                <Page.NoMatch404/>
            </Route>
        </Switch>
    );
}