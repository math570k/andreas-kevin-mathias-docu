import React from "react";
import classNames from "classnames";

export default function Page({children, backgroundColor, className}) {

    const pageClassNames = classNames('content mx-auto min-w-page px-12',className, backgroundColor)

    return (
        <div className={pageClassNames}>
            {children}
        </div>
    )
}