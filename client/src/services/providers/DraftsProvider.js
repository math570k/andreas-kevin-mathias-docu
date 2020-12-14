import React from "react";
import { useGetDrafts, useApplydraft, useRemoveDraft } from "../../graphql/draft";
import * as Loading from "../../ui/loading";

const DraftContext = React.createContext(null);

export default function DraftProvider({children}) {

    const {data, loading: loadingPage, error } = useGetDrafts();
    const [handleApproveDraft] = useApplydraft();
    const [handleRemoveDraft] = useRemoveDraft();

    console.log(`%c draftdata:`, "color:blue", data);

    const hasDrafts = () => {
        return data.drafts.length > 0;
    }

    //While we're fetching Pages...
    if(loadingPage) {
        return <Loading.Section/>;
        }

    //If there's no data, the page doesn't exist!
    if(!data) {
        return <div>This page does not exist</div>
    }

    //If the page has no sections, it means the page is currently empty.
    if(!hasDrafts()) {
        return <div>No drafts available</div>
    }

    const approveDraft = (id) => {
        handleApproveDraft({
            variables: {
                id
            }
        })
    }

    const removeDraft = id => {
        handleRemoveDraft({
            variables: {
                id
            }
        })
    }

    const draftAPI = {
        drafts: data.drafts,
        approveDraft,
        removeDraft
    }

    return(
        <DraftContext.Provider value={draftAPI}>
            {children}
        </DraftContext.Provider>
    )
}

export function useDrafts() {
    const context = React.useContext(DraftContext);
    if (context === undefined) {
        throw new Error(`useDrafts must be used within a DraftContext`)
    }
    return context
}
