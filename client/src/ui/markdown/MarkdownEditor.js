import React, { useState } from "react";
import {useMarkdown} from "../../services/providers/MarkdownProvider";

export default function MarkdownEditor() {
    const {editedMarkdown, setEditedMarkdown} = useMarkdown();

    return (
        <textarea style={{resize:'none'}} className="w-full border border-primary-500 bg-primary rounded outline-none shadow-inner px-6 py-4" onChange={(e) => setEditedMarkdown(e.target.value)} value={editedMarkdown} rows="10"/>
    )
}
