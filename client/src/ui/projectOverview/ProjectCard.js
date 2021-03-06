import React from "react";
import Folder from "../icons/Folder";
import {Link, useRouteMatch} from "react-router-dom";

export default function ProjectCard({project, projectId}) {

    let {url} = useRouteMatch();

    return (

        <div className="w-1/3" tabIndex="0" >
            <Link to={`${url}/${project.id}`}>
                <div className="m-4 border rounded border-primary-500 mh-56">
                    <div className="p-8 flex-col justify-between">

                        {/* Project title */}
                        <div className={'folder flex items-center'}>
                            <Folder color={project.color}/>
                            <h2 className="ml-4 font-bold">
                                {project.title}
                            </h2>
                        </div>

                        {/* Project description */}
                        <div className="mt-4 font-we">
                            <p className="text-black-400">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap">
                            {project.tags.length > 0 && project.tags.map((tag) => {
                                return (
                                    <div className="p-2 mr-2 mb-2 rounded-full text-white text-xs" key={tag.id}
                                         style={{backgroundColor: project.color}}>
                                        {tag.title}
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </Link>
        </div>

    )
}