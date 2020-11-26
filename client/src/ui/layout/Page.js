import React from "react";

export default function Page({children}) {
    return (
        <div className={'content mx-auto px-12'}>
            {children}
        </div>
    )
}