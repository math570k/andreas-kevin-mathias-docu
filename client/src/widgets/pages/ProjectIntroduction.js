import React from "react";
import * as Template from "../../ui/templates";
import {useProject} from "../../services/providers/ProjectProvider";


export default function ProjectIntroduction() {

    const {project} = useProject();

    return (
        <Template.Page>
                <div>
                    {project.content}
                </div>
        </Template.Page>
    )
}