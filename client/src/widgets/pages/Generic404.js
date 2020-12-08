import React from "react"
import * as Template from "../../ui/templates";
import {Link} from "react-router-dom";

export default function Generic404() {
    return (
        <Template.Page>
            <div>
                404 not Found. Sorry there was no page with the given URL
                <Link className={'button'} to={'/projects'}>Go to Home</Link>
            </div>
        </Template.Page>
    );
}