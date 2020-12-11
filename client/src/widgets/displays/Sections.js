import React from "react";
import {usePage} from "../../services/providers/PageProvider";
import Section from "../../ui/section/Section";
import SectionTitle from "../../ui/section/SectionTitle";
import parse from 'html-react-parser';


export default function Sections() {

    const {page} = usePage();

    return (
        page.sections.map((section) => {
            return (
                <Section section={section} key={section.id} markdown={section.content}>
                    <SectionTitle>{section.title}</SectionTitle>
                    {parse(section.html)}
                </Section>
            )
        })
    )

}