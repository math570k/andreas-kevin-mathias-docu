import marked, { Renderer } from "marked";
import hljs from 'highlight.js';
import DOMPurify from "dompurify";

export class Markdown {
    
    constructor() {
        const renderer = new Renderer();

        renderer.code = (code: string, language: string) => {
            const validLang = !!(language && hljs.getLanguage(language));
        
            const highlighted = validLang
                ? hljs.highlight(language, code).value
                : DOMPurify.sanitize(code);
        
            return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
        }

        marked.setOptions({
            renderer,
            highlight: function(code: string) {
                return hljs.highlightAuto(code).value;
            }
        });
    }

    public parseMarkdown(markdown: string) : string {
        return marked(markdown);
    }

}