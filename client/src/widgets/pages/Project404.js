import React from "react"
import * as Template from "../../ui/templates";
import {Link} from "react-router-dom";

export default function Project404() {
    return (
        <Template.Page>
            <div>
                404 project not Found. Sorry there was no project with the given ID
                <Link className={'button'} to={'/projects'}>Go back to projects</Link>
            </div>
        </Template.Page>
    );
}