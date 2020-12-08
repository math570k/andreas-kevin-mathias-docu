import React from "react";
import {useRouteMatch, Switch, Route, Redirect, useLocation} from "react-router-dom";
import WithSidebar from "../../ui/layout/WithSidebar";
import * as Sidebars from "../sidebars";
import ProjectProvider from "../../services/providers/ProjectProvider";
import * as Page from "../../widgets/pages";

export default function Project() {

    let {url} = useRouteMatch();

    return (
        <ProjectProvider>
            <WithSidebar sidebar={<Sidebars.ProjectSidebar/>}> {/* currently this is wrapped here because both projectIntro and display section uses it. fix bug if moved down to individual component*/}
                <Switch>
                    <Route exact path={`${url}`}>
                        <Page.ProjectIntroduction/>
                    </Route>

                    <Route path={`${url}/:pageId`}>
                        <Page.ProjectPage/>
                    </Route>
                </Switch>
            </WithSidebar>
        </ProjectProvider>
    )
}
