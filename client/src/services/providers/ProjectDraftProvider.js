import React, { useState } from "react";
import { useAddDraftMutation } from "../../graphql/draft";

const ProjectDraftContext = React.createContext(null);

export default function ProjectDraftProvider({children}) {
    const [form, setForm] = useState({title: "", color: "#2a323e", description: "", content: ""});
    const [handleFormSubmit] = useAddDraftMutation();

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
                    userId: 3,
                    organizationId: 2
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
