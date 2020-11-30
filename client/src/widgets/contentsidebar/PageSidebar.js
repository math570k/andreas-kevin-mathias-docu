import React, { useEffect } from "react";

export default function PageSidebar({pages}) {

    useEffect(() => {
        console.log(pages)
    })

    return (
        <div>
            <ul>
                {pages.length > 0 && pages.map(((item, index) => {
                    return <li key={index}>{item.title}</li>
                }))}
            </ul>
        </div>
    )
}