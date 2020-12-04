import React from "react";
import {useAuth} from "../services/providers/AuthProvider";
import {useByeQuery} from "../graphql/test";
import Header from "../ui/layout/Header";
import Section from "../ui/section/Section";
import SectionTitle from "../ui/section/SectionTitle";
import AuthenticatedRoutes from "../routes/AuthenticatedRoutes";

export default function AuthenticatedApp({children}) {
    const {data, error, refetch} = useByeQuery();
    console.log(data, error)
    const {logout} = useAuth()

    return (
        <React.Fragment>
            {/*Authenticated App*/}
            <button onClick={() => refetch()}>refetch</button>
            You are currently Authenticated <br/>
            <button onClick={() => logout()}>logout</button>

            <Header/>

            <main className={'min-h-full relative pt-16'}>
                <AuthenticatedRoutes/>
            </main>
        </React.Fragment>
    )
}