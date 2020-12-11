import React, {useEffect} from "react";
import {useOrganization} from "../../services/providers/OrganizationProvider";
import * as Template from "../../ui/templates";
import SectionTitle from "../../ui/section/SectionTitle";
import Section from "../../ui/section/Section";
import ProjectOverview from "../../ui/projectOverview/ProjectOverview";
import SectionProvider, {useSections} from "../../services/providers/PageProvider";
import Sections from "../displays/Sections";
import SectionOverview from "../../ui/section/SectionOverview";

export default function Home() {
    const {activeProject} = useOrganization();
    const [activeSection, setActiveSection] = React.useState();

    return (
        <Template.Page>
            {activeProject ?
                <Template.DocumentationContent>
                    <Sections/>
                </Template.DocumentationContent>
                : <ProjectOverview/>}
        </Template.Page>
    );
}