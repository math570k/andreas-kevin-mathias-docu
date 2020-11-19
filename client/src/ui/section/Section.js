import React, { useEffect, useState } from "react";
import MarkdownEditor from "../markdown/MarkdownEditor";
import MarkdownRender from "../markdown/MarkdownRender";
import { PencilAlt, CheckCircle } from "heroicons-react";

export default function Section(props) {
    const [editing, setEditing] = useState(false);
    const [markdown, setMarkdown] = useState(props.markdown);
    const [title, setTitle] = useState(props.title);

    const headerStyle = "text-3xl font-bold";

    const edit = () => {
        return (
            <>
                <div className="section-title">
                    <input className={headerStyle} value={title} onChange={() => setTitle(event.target.value)} type="text"/>
                </div>
                <div className="section-action">
                    <button onClick={() => setEditing(!editing)}><CheckCircle size={32} /></button>
                </div>
                <div className="section-content">
                    <MarkdownEditor onChange={(value) => setMarkdown(value)} markdown={markdown}/>
                </div>
            </>
        )
    }

    const render = () => {
        return (
            <>
                <div className="section-title">
                    <h2 className={headerStyle} >{title}</h2>
                </div>
                <div className="section-action">
                    <button onClick={() => setEditing(!editing)}><PencilAlt size={32} /></button>
                </div>
                <div className="section-content">
                <MarkdownRender markdown={markdown}/>
                </div>
            </>
        )
    }

    return editing ? edit() : render();
}
