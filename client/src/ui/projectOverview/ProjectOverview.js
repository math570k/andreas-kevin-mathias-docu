import React, { useEffect } from "react";
import classNames from "classnames";
import { useOrganization } from "../../services/providers/OrganizationProvider";
import ProjectCard from "./ProjectCard";

export default function ProjectOverview(props) {

    const { activeOrganization } = useOrganization();

    // Check på om der er projekter eller ej

    return (
        <div className="container py-8 flex">
            {activeOrganization && activeOrganization.projects.map((project) => {
                return <ProjectCard project={project} key={project.id} />
            })}
        </div>
    )
}