import React from "react";
import {useGetPageSections} from "../../graphql/section";
import {useParams} from "react-router-dom";
import * as Loading from "../../ui/loading";
import {useGetPage} from "../../graphql/page";

/**
 * The PageProvider is a wrapper component whose purpose is
 * to get all the sections within a page from a given PageId, and serve that data to the children.
 * */

const PageContext = React.createContext(null);

export default function PageProvider({children}) {

    let { pageId } = useParams();
    const {data, loading: loadingPage, error } = useGetPage(Number(pageId));

    console.log(`%c PageData:`, "color:green", data);

    const hasSections = () => {
        return data.page.sections.length > 0;
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
    if(!hasSections()) {
        return <div>This page is currently empty, try and add some sections to it!</div>
    }

    const pageAPI = {
        page: {
            ...data.page,
        },
        loadingPage,
    }

    return(
        <PageContext.Provider value={pageAPI}>
            {children}
        </PageContext.Provider>
    )
}

function usePage() {
    const context = React.useContext(PageContext);
    if (context === undefined) {
        throw new Error(`usePage must be used within a PageProvider`)
    }
    return context
}

export {usePage};