import React, { useEffect, useState } from "react";
import marked, { Renderer } from "marked";
import hljs from "highlight.js";
import DOMPurify from "dompurify";

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

    useEffect(() => {
        setClean(DOMPurify.sanitize(marked(props.markdown)));
    }, [props.markdown]);

    return (
        <div className="markdown-render" dangerouslySetInnerHTML={{__html: clean}}></div>
    )
}
