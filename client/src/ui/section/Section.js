import React, {useState} from "react";
import { PencilAlt } from "heroicons-react";

export default function Section({children}) {
    const [hover, setHover] = useState(true);

    return (
        <div className={"relative"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover ? (<button className={"absolute top-2 right-0 bg-transparent border-0 cursor-pointer block text-gray-500 focus:outline-none"}><PencilAlt size={20} /></button>) : ''}
            {children}
        </div>
    )
}
