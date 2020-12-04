import React from "react";

const MarkdownContext = React.createContext(null);

export default function MarkdownProvider({children, markdown}) {

    //get markdown from the currently clicked edit section
    const [editedMarkdown, setEditedMarkdown] = React.useState(markdown);

    const originalMarkdown = markdown;

    //add function to suggest markdown and save it to the db.

    function SuggestEditedMarkdown() {
        const payload = editedMarkdown;
        // send some request with the edited markdown to the db.
    }


    const markdownAPI = {
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