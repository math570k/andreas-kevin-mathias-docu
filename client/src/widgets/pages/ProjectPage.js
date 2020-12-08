import React from "react";
import * as Template from "../../ui/templates";
import PageProvider from "../../services/providers/PageProvider";
import * as Displays from "../displays";

export default function ProjectPage() {
    return (
        <Template.Page>
            <Template.DocumentationContent>
                <PageProvider>
                    <Displays.Sections/>
                </PageProvider>
            </Template.DocumentationContent>
        </Template.Page>
    )
}