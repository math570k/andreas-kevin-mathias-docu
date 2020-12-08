import React from "react";
import * as Template from "../../ui/templates";
import WithSidebar from "../../ui/layout/WithSidebar";
import * as Sidebar from "../sidebars";
import * as Displays from "../displays";

export default function ProjectsOverview() {
    return (
        <WithSidebar sidebar={<Sidebar.ProjectsSidebar/>}>
            <Template.Page>
                <Displays.Projects/>
            </Template.Page>
        </WithSidebar>
    )
}