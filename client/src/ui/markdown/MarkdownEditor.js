import React, { useState } from "react";

export default function MarkdownEditor(props) {
    const [markdown, setMarkdown] = useState(props.markdown);

    const onChange = value => {
        setMarkdown(value);
        props.onChange(markdown);
    }

    return (
        <textarea rows="4" cols="100" value={markdown} onChange={() => onChange(event.target.value)} rows="10"></textarea>
    )
}
