import React, { useEffect } from "react";
import { useOrganization } from "../../services/providers/OrganizationProvider";
import * as Template from "../../ui/templates";
import SectionTitle from "../../ui/section/SectionTitle";
import Section from "../../ui/section/Section";

export default function Home() {
    const { activeProject } = useOrganization();
    const [ activeSection, setActiveSection ] = React.useState();

    let mockMarkdown = "## Beautiful typography for beginners \nSuspendisse ac mi dui. Etiam pretium sodales urna, iaculis consequat ipsum suscipit nec. Suspendisse iaculis est a ornare semper. Aliquam erat volutpat. Aliquam laoreet congue scelerisque. Mauris semper pellentesque ante. Nam vel ipsum vel nisi congue accumsan. Etiam a elit vitae mauris ultricies sodales ut at ligula. Nam et ante sed erat facilisis vestibulum in a augue. Praesent consequat finibus neque, et pellentesque nibh ullamcorper sed."

    return (
        <Template.Page>
            <Template.DocumentationContent>
                <Section markdown={mockMarkdown}>
                    <SectionTitle>Phasellus vestibulum</SectionTitle>
                    <p>Suspendisse ac mi dui. Etiam pretium sodales urna, iaculis consequat ipsum suscipit nec.
                        Suspendisse iaculis est a ornare semper. Aliquam erat volutpat. Aliquam laoreet congue
                        scelerisque. Mauris semper pellentesque ante. Nam vel ipsum vel nisi congue accumsan. Etiam a
                        elit vitae mauris ultricies sodales ut at ligula. Nam et ante sed erat facilisis vestibulum in a
                        augue. Praesent consequat finibus neque, et pellentesque nibh ullamcorper sed.</p>
                    <pre><code className="hljs hljs-javascript">
                    {`function myFunction() { 
// Declare a function document.getElementById("demo").innerHTML = "Hello World!";
}

// Call the function
myFunction(); 
                    `}
                    </code></pre>
                </Section>
                <Section markdown={mockMarkdown}>
                    <SectionTitle>Phasellus vestibulum</SectionTitle>
                    <p>Suspendisse ac mi dui. Etiam pretium sodales urna, iaculis consequat ipsum suscipit nec.
                        Suspendisse iaculis est a ornare semper. Aliquam erat volutpat. Aliquam laoreet congue
                        scelerisque. Mauris semper pellentesque ante. Nam vel ipsum vel nisi congue accumsan. Etiam a
                        elit vitae mauris ultricies sodales ut at ligula. Nam et ante sed erat facilisis vestibulum in a
                        augue. Praesent consequat finibus neque, et pellentesque nibh ullamcorper sed.</p>
                    <pre><code className="hljs hljs-javascript">
                    {`function myFunction() { // Declare a function
    document.getElementById("demo").innerHTML = "Hello World!";
}

myFunction(); // Call the function`}
                    </code></pre>
                </Section>
            </Template.DocumentationContent>
        </Template.Page>
    );
}