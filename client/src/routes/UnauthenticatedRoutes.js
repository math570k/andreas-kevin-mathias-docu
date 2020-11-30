import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import AuthenticatedApp from "../widgets/apps/AuthenticatedApp";
import * as Page from "../widgets/pages";
import WithSidebar from "../ui/layout/WithSidebar";
import * as Sidebar from "../widgets/sidebars";

export default function UnauthenticatedRoutes() {
    return (
        <Switch>
            <Route path={'/login'}>
                <Page.Login/>
            </Route>

            <Route path={'/register'}>
                <Page.Register/>
            </Route>

            <Route path={'/'}>
                <Redirect to={'/login'}/>
            </Route>

            <Route path="*">
                <Page.NoMatch404/>
            </Route>
        </Switch>
    );
}