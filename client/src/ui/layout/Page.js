import React from "react";

export default function Page({children}) {
    return (
        <div className={'mx-auto px-12'}>
            {children}
        </div>
    )
}