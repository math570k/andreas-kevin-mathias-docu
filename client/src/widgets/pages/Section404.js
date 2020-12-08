import React from "react"
import * as Template from "../../ui/templates";

export default function Section404() {
    return (
        <Template.Page>
            <div>
                No Sections was currently found in this page. Would you like to add a new Section?
                <button className={'button'}>Add new Section</button>
            </div>
        </Template.Page>
    );
}