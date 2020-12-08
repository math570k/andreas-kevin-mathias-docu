import React from "react";
import {useGetProjects} from "../../graphql/project";
import {useOrganization} from "./OrganizationProvider";
import {useParams, useLocation} from "react-router-dom";

/**
 * The projectsProvider is a wrapper component whose purpose is
 * to get all the projects from a given OrganizationId, and serve that data to the children.
 * */

const ProjectsContext = React.createContext(null);

export default function ProjectsProvider({children}) {

    // get the projects from the url params.
    let { organizationId } = useParams();
    const {data, loading, error} = useGetProjects(Number(organizationId));

    const location = useLocation();
    console.log('location from projects', location)

    console.log(`%c ProjectsData:`, "color:yellow", data);

    const hasProjects = () => {
        return data.projects.length > 0;
    }

    //While we're fetching the projects...
    if(loading) {
        return (
            <div>..loading</div>
        )
    }

    //If the company has no projects yet..
    if(!hasProjects()) {
       return <div>Hey looks like there's no projects in this company, create your first one here!</div>
    }

    const projectsAPI = {
        projects: data.projects,
        loading,
    }

    return(
        <ProjectsContext.Provider value={projectsAPI}>
            {children}
        </ProjectsContext.Provider>
    )
}

function useProjects() {
    const context = React.useContext(ProjectsContext);
    if (context === undefined) {
        throw new Error(`useProjects must be used within a ProjectsProvider`)
    }
    return context
}

export {useProjects};