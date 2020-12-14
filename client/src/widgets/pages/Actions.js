import React from "react";
import * as Template from "../../ui/templates";
import WithSidebar from "../../ui/layout/WithSidebar";
import * as Sidebar from "../sidebars";
import * as Displays from "../displays";
import ProjectsProvider from "../../services/providers/ProjectsProvider";
import DraftProvider from "../../services/providers/DraftsProvider";

export default function Actions() {
    return (
        <ProjectsProvider>
            <WithSidebar sidebar={<Sidebar.ProjectsSidebar/>}>
                <Template.Page>
                    <DraftProvider>
                        <Displays.Drafts/>
                    </DraftProvider>
                </Template.Page>
            </WithSidebar>
        </ProjectsProvider>
    );
}