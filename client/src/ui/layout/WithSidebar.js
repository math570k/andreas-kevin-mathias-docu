import React from "react";
import Sidebar from "./Sidebar";

export default function WithSidebar({children, sidebar}) {
    return (
        <div className={'content-with-sidebar ml-1/5'}>
            {sidebar}
            {children}
        </div>
    );
}


