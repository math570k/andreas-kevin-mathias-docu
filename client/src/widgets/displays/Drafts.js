import React from "react";
import { useDrafts } from "../../services/providers/DraftsProvider";
import Draft from "../../ui/drafts/Draft";

export default function Drafts() {
    const {drafts} = useDrafts();

    return (
        <div className="container py-8 flex flex-wrap">
            {drafts.map(draft => (
                <Draft key={draft._id} draft={draft} />
            ))}
        </div>
    )
}