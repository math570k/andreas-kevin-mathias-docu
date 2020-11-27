import React, { useState } from "react";

export default function MarkdownEditor({markdown}) {
    const [mrkDwn, setMrkDwn] = useState(markdown)

    return (
        <textarea className="w-full" onChange={(e) => setMrkDwn(e.target.value)} value={mrkDwn} rows="10"/>
    )
}
