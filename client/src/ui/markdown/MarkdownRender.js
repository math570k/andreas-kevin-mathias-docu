import React, { useEffect, useState } from "react";
import marked, { Renderer } from "marked";
import hljs from "highlight.js";
import DOMPurify from "dompurify";
import {useMarkdown} from "../../services/providers/MarkdownProvider";

const renderer = new Renderer();

renderer.code = (code, language) => {
    const validLang = !!(language && hljs.getLanguage(language));

    const highlighted = validLang
        ? hljs.highlight(language, code).value
        : DOMPurify.sanitize(code);

    return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
}



marked.setOptions({
    renderer,
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
    }
});

export default function MarkdownRender(props) {
    const [clean, setClean] = useState();
    const {editedMarkdown} = useMarkdown();

    useEffect(() => {
        setClean(DOMPurify.sanitize(marked(editedMarkdown)));
    }, [editedMarkdown]);

    return (
        <div className="markdown-render prose max-w-none" dangerouslySetInnerHTML={{__html: clean}}></div>
    )
}
