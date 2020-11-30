import React, { useEffect } from "react";
import { useOrganization } from "../../services/providers/OrganizationProvider";
import Sidebar from "../../ui/layout/Sidebar";

export default function DocumentationOverview() {
    const { organization, setActiveProject } = useOrganization();

    const projectList = () => {
        return (
            organization.projects.map((project) => (
                <li className={'px-8 py-6 border-b border-primary-500'} key={project.id}>
                    {project.title}
                </li>
            ))
        )
    }

    return (
        <Sidebar>
            <ul>
                {organization && organization.projects.length > 0 ? 
                    organization.projects.map((project) => (
                        <li className={'px-8 py-6 border-b border-primary-500 w-100'} key={project.id} onClick={() => setActiveProject(project)}>
                            <button>
                                {project.title}
                            </button>
                        </li>
                    ))
                : <p>No projects..</p>}
            </ul>
            {/* OPENS MODAL/FORM */}
            <button>Create project +</button>
        </Sidebar>
    )
}