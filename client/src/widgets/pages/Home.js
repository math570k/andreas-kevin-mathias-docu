import React, { useEffect } from "react";
import { useOrganization } from "../../services/providers/OrganizationProvider";
import * as Template from "../../ui/templates";
import PageSidebar from "../contentsidebar/PageSidebar";

export default function Home() {
    // Data for content section and pages overview
    const { activeProject } = useOrganization();
    const [ activeSection, setActiveSection ] = React.useState();

    return (
        <Template.Page>
            <div>
                {activeProject ? (
                    <div className={'col-span-10'}>
                        <PageSidebar pages={activeProject.pages} />
                    </div>  
                ) : (
                    <div className={'col-span-10'}>
                        <p>No project selected</p>
                    </div>
                )}
            </div>
        </Template.Page>
    );
}