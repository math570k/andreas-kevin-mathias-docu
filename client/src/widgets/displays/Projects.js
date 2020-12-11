import ProjectCard from "../../ui/projectOverview/ProjectCard";
import React from "react";
import {useProjects} from "../../services/providers/ProjectsProvider";

export default function Projects(props) {

    const {projects} = useProjects();

    return (
        <div className="container">
            <div className="-mx-4 py-8 flex flex-wrap"> 
                {projects.map((project) => {
                    return <ProjectCard project={project} key={project.id} projectId={project.id}/>
                })}
            </div>
        </div>
    )
}