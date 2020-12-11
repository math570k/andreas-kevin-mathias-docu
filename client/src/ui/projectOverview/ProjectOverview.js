import React, { useEffect } from "react";
import classNames from "classnames";
import { useOrganization } from "../../services/providers/OrganizationProvider";
import ProjectCard from "./ProjectCard";

export default function ProjectOverview() {

    const { activeOrganization } = useOrganization();

    return (
        <div className="min-w-full py-8 flex flex-wrap">
            <div className="">
                {activeOrganization && activeOrganization.projects.map((project) => {
                    return <ProjectCard project={project} key={project.id} projectId={project.id} />
                })}
            </div>
        </div>
    )
}