import React from "react";
import {Switch, Route, Redirect, Link, useRouteMatch, useLocation} from "react-router-dom";
import * as Page from "../widgets/pages";

export default function AuthenticatedRoutes() {

    return (
        <Switch>
            <Route path={'/:organizationId/actions'}>
                <Page.Actions />
            </Route>

            <Route path={'/:organizationId/projects'}>
                <Page.Projects/>
            </Route>

            <Route path={'/:organizationId/home'}>
                <div>this is home</div>
            </Route>

            <Route path={'/:organizationId'} render={({match}) => (
                <Redirect to={`/${match.params.organizationId}/home`}/>
            )}/>

            <Route exact path="*">
                <Page.Generic404/>
            </Route>
        </Switch>
    );
}