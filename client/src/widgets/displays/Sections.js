import React from "react";
import {usePage} from "../../services/providers/PageProvider";
import Section from "../../ui/section/Section";
import SectionTitle from "../../ui/section/SectionTitle";
import SectionOverview from "../../ui/section/SectionOverview";
import parse from 'html-react-parser';


export default function Sections() {

    const {page} = usePage();

    return (
        <div className="flex justify-between">
            <div className="flex-col content-section pb-32 w-3/4">
                {page.sections.map((section) => {
                    return (
                        <Section key={section.id} markdown={section.content}>
                            <SectionTitle>{section.title}</SectionTitle>
                            {parse(section.html)}
                        </Section>
                    )
                })}
            </div>
            <SectionOverview sections={page.sections} />
        </div>
    )
}