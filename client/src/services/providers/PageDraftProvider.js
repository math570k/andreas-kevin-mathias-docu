import React, { createContext, useState } from "react";
import jwtDecode from "jwt-decode";
import { useAddDraftMutation } from "../../graphql/draft";
import { getAccessToken } from "../utils/accessToken";
import { useOrganization } from "./OrganizationProvider";

const PageDraftContext = createContext(null);

export default function PageDraftProvider({children}) {

    const [form, setForm] = useState({title: "", color: "#2a323e", description: "", content: ""});
    const [handleFormSubmit] = useAddDraftMutation();
    const {activeOrganization} = useOrganization();
    const {userId} = jwtDecode(getAccessToken())

    const createPageDraft = (data) => {
        handleFormSubmit({
            variables: {
                draft: {
                    type: "page",
                    action: "new",
                    content: {
                        page: {
                            title: data.title,
                            content: data.content,
                            order: data.order || 0
                        },
                        projectId: 2
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
        createPageDraft
    }

    return (
        <PageDraftContext.Provider value={projectDraftApi}>
            {children}
        </PageDraftContext.Provider>
    )
}

export function usePageDraft() {
    const context = React.useContext(PageDraftContext);
    if (context === undefined) {
        throw new Error(`usePageDraft must be used within a PageDraftContext`)
    }
    return context
}
