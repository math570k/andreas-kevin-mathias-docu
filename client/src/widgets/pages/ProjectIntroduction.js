import React from "react";
import * as Template from "../../ui/templates";
import {useProject} from "../../services/providers/ProjectProvider";
import parse from 'html-react-parser';

export default function ProjectIntroduction() {

    const {project} = useProject();

    return (
        <Template.Page>
                <div>
                    {parse(project.html)}
                </div>
        </Template.Page>
    )
}