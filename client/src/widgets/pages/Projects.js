import React from "react";
import * as Template from "../../ui/templates";
import ProjectsProvider from "../../services/providers/ProjectsProvider";
import * as Page from "./index";
import {Switch, Route, Redirect, useRouteMatch} from "react-router-dom"

export default function Projects() {

    let {url} = useRouteMatch();

    return (
        <ProjectsProvider>
            <Switch>
                <Route exact path={`${url}`}>
                    <Page.ProjectsOverview/>
                </Route>

                <Route path={`${url}/:projectId`}>
                    <Page.Project/>
                </Route>
            </Switch>
        </ProjectsProvider>
    );
}