import React from "react";
import {useOrganization} from "../../services/providers/OrganizationProvider";
import Sidebar from "../../ui/layout/Sidebar";
import Folder from "../../ui/icons/Folder"
import {useProjects} from "../../services/providers/ProjectsProvider";
import {Link, useRouteMatch, useLocation} from "react-router-dom";

export default function DocumentationOverview() {

    const {projects} = useProjects();
    let {url} = useRouteMatch();

    return (
        <Sidebar>
            <ul>
                { projects.map((project) => (
                    <li className={'px-8 py-6 border-b border-primary-500 w-100'} key={project.id}>
                        <Link to={`${url}/${project.id}`}>
                            <div className={'folder flex items-center'}>
                                <Folder color={project.color}/>
                                <h2 className="ml-4">
                                    {project.title}
                                </h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="p-8">
                <button className={"button-blue"}>Create project +</button>
            </div>
        </Sidebar>
    )
}