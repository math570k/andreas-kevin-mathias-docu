import React from "react";
import Sidebar from "../../ui/layout/Sidebar";

export default function DocumentationOverview() {

    //Get all the documentation from the current company and render them in the sidebar.
    const documentations = [
        {id: 1, title: 'Guide to JavaScript'},
        {id: 2, title: 'Guide to PHP'},
        {id: 3, title: 'Guide to Node'}
    ]

    return (
        <Sidebar>
            <ul>
                {documentations.map((documentation) => (
                    <li className={'px-8 py-6 border-b border-primary-500'} key={documentation.id}>
                        {documentation.title}
                    </li>
                ))}
            </ul>
        </Sidebar>
    )
}