import React from "react";
import {useAuth} from "../services/providers/AuthProvider";
import {useByeQuery} from "../graphql/test";
import Header from "../ui/layout/Header";
import Section from "../ui/section/Section";
import SectionTitle from "../ui/section/SectionTitle";

export default function AuthenticatedApp(props) {
    const {data, error, refetch} = useByeQuery();
    console.log(data, error)
    const {logout} = useAuth()

    return (
        <div>
            <Header />
            {/*Authenticated App*/}
            <button onClick={() => refetch()}>refetch</button>
            You are currently Authenticated <br/>
            <button onClick={() => logout()}>logout</button>

            <Section>
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
    )
}