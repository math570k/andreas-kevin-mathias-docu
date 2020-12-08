import React from "react";
import classNames from "classnames";

export default function FullPage({children, backgroundColor, className}) {

    const fullPageClassNames = classNames('min-h-screen relative bg-primary flex mx-auto', className, backgroundColor)

    return (
        <div className={fullPageClassNames}>
            {children}
        </div>
    )
}