import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { useAddDraftMutation } from "../../graphql/draft";
import { getAccessToken } from "../utils/accessToken";
import { useOrganization } from "./OrganizationProvider";

const ProjectDraftContext = React.createContext(null);

export default function ProjectDraftProvider({children}) {
    const [form, setForm] = useState({title: "", color: "#2a323e", description: "", content: ""});
    const [handleFormSubmit] = useAddDraftMutation();
    const {activeOrganization} = useOrganization();
    const {userId} = jwtDecode(getAccessToken())

    const createProjectDraft = (data) => {
        console.log(data);

        handleFormSubmit({
            variables: {
                draft: {
                    type: "project",
                    action: "new",
                    content: {
                        title: data.title,
                        color: data.color,
                        description: data.description,
                        content: data.content
                    },
                    userId: userId,
                    organizationId: activeOrganization.id
                }
            }
        });
    }

    const projectDraftApi = {
        form,
        setForm,
        createProjectDraft
    }

    return (
        <ProjectDraftContext.Provider value={projectDraftApi}>
            {children}
        </ProjectDraftContext.Provider>
    )
}

export function useProjectDraft() {
    const context = React.useContext(ProjectDraftContext);
    if (context === undefined) {
        throw new Error(`useProjectDraft must be used within a ProjectDraftContext`)
    }
    return context
}
