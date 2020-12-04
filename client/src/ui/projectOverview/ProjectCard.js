import React from "react";
import Folder from "../icons/Folder";

export default function ProjectCard({project}) {
    return (
        <div className="w-1/3 border rounded border-primary-500 h-56" tabIndex="0">
            <div className="p-8">
                
                {/* Project title */}
                <div className={'folder flex items-center'}>
                    <Folder color={project.color} />
                    <h2 className="ml-4 font-bold">
                        {project.title}
                    </h2>
                </div>

                {/* Project description */}
                <div className="mt-4 font-we">
                    {/* Erstat med project description */}
                    <p className="text-black-400">{project.content}</p>
                </div>

            </div>
        </div>
    )
}