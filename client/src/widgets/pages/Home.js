import React from "react";
import * as Template from "../../ui/templates";
import SectionTitle from "../../ui/section/SectionTitle";
import Section from "../../ui/section/Section";

export default function Home() {
    return (
        <Template.Page>
            <div>
                <div className={'col-span-10'}>
                    This is home
                </div>
                <Section markdown={"## hej verden"}>
                    <SectionTitle>Phasellus vestibulum</SectionTitle>
                    <p>Suspendisse ac mi dui. Etiam pretium sodales urna, iaculis consequat ipsum suscipit nec. Suspendisse iaculis est a ornare semper. Aliquam erat volutpat. Aliquam laoreet congue scelerisque. Mauris semper pellentesque ante. Nam vel ipsum vel nisi congue accumsan. Etiam a elit vitae mauris ultricies sodales ut at ligula. Nam et ante sed erat facilisis vestibulum in a augue. Praesent consequat finibus neque, et pellentesque nibh ullamcorper sed.</p>
                    <pre><code className="hljs hljs-javascript">
                    {`function myFunction() { // Declare a function
    document.getElementById("demo").innerHTML = "Hello World!";
}

myFunction(); // Call the function`}
                    </code></pre>
                </Section>
                <Section markdown={"## hej verden"}>
                    <SectionTitle>Phasellus vestibulum</SectionTitle>
                    <p>Suspendisse ac mi dui. Etiam pretium sodales urna, iaculis consequat ipsum suscipit nec. Suspendisse iaculis est a ornare semper. Aliquam erat volutpat. Aliquam laoreet congue scelerisque. Mauris semper pellentesque ante. Nam vel ipsum vel nisi congue accumsan. Etiam a elit vitae mauris ultricies sodales ut at ligula. Nam et ante sed erat facilisis vestibulum in a augue. Praesent consequat finibus neque, et pellentesque nibh ullamcorper sed.</p>
                    <pre><code className="hljs hljs-javascript">
                    {`function myFunction() { // Declare a function
    document.getElementById("demo").innerHTML = "Hello World!";
}

myFunction(); // Call the function`}
                    </code></pre>
                </Section>
            </div>
        </Template.Page>
    );
}