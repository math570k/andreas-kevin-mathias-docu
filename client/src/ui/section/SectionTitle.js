import React from "react";

export default function SectionTitle({children}) {
    return (
        <div className="relative">
            <a href="#" className={"absolute text-indigo-600 -left-6 h-full flex items-center text-lg"}>#</a>
            <h2 className={"text-3xl font-bold mb-6 mt-0"}>{children}</h2>
        </div>
    )
}