import React from "react";
import { useParams } from "react-router-dom";
import {useGetProject} from "../../graphql/project";
import * as Page from "../../widgets/pages";
import {useOrganization} from "./OrganizationProvider";

/**
 * The projectProvider is a wrapper component whose purpose is
 * to get a single project from a given ProjectId, and serve that data to the children.
 * */

const ProjectContext = React.createContext(null);

export default function ProjectProvider({children}) {


    let { projectId } = useParams();

    const {data , error, loading} = useGetProject(Number(projectId));

    console.log(`%c ProjectData:`, "color:blue", data);

    const hasPages = () => {
        return data.project.pages.length > 0;
    }

    //While we're fetching the project...
    if(loading) {
        return <div>loading the project...</div>
    }

    //If the project was not found
    if(!data) {
        return <Page.Project404/>
    }

    const projectAPI = {
        project: {
            ...data.project,
            hasPages,
        },
        loading,
        error,
    }

    return(
        <ProjectContext.Provider value={projectAPI}>
            {children}
        </ProjectContext.Provider>
    )
}

function useProject() {
    const context = React.useContext(ProjectContext);
    if (context === undefined) {
        throw new Error(`useProject must be used within a ProjectProvider`)
    }
    return context
}

export {useProject};