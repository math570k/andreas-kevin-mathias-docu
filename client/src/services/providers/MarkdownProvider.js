import React from "react";
import {useAddDraftMutation} from "../../graphql/draft";
import {useOrganization} from "./OrganizationProvider";
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../utils/accessToken";

const MarkdownContext = React.createContext(null);

export default function MarkdownProvider({children, markdown, section}) {

    //get markdown from the currently clicked edit section
    const {userId} = jwtDecode(getAccessToken())
    const {activeOrganization} = useOrganization()
    const [editedMarkdown, setEditedMarkdown] = React.useState(markdown);
    const [createDraft] = useAddDraftMutation();

    const originalMarkdown = markdown;

    //add function to suggest markdown and save it to the db.

    function suggestEditedMarkdown() {
        createDraft({
            variables: {
                draft: {
                    type: "section",
                    action: "edit",
                    content: {
                        sectionId: section.id,
                        title: section.title,
                        content: editedMarkdown,
                        order: section.order,
                    },
                    userId: userId,
                    organizationId: activeOrganization.id
                }
            }
        }).then(() => {
            console.log('Successfully created Draft')
        }).catch((e) => {
            console.log(e)
        })
    }


    const markdownAPI = {
        suggestEditedMarkdown,
        originalMarkdown,
        editedMarkdown,
        setEditedMarkdown,
    };

    return (
        <MarkdownContext.Provider value={markdownAPI}>
            {children}
        </MarkdownContext.Provider>
    );

}

function useMarkdown() {
    const context = React.useContext(MarkdownContext);
    if (context === undefined) {
        throw new Error(`useMarkdown must be used within a MarkdownEditorProvider`)
    }
    return context
}

export {useMarkdown}