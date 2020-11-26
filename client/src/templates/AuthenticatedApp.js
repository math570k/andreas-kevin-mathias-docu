import React from "react";
import {useAuth} from "../services/providers/AuthProvider";
import {useByeQuery} from "../graphql/test";
import Header from "./Header";
import Home from "../pages/Home";

export default function AuthenticatedApp(props) {
    const {data, error, refetch} = useByeQuery();
    console.log(data, error)
    const {logout} = useAuth()

    return (
        <React.Fragment>
            {/*Authenticated App*/}
            <Header/>
            <main className={'grid grid-cols-12 min-h-full'}>
                <div className={'col-span-2'}>
                    sidebar
                    <button onClick={() => logout()}>logout</button>
                </div>
                <div className={'col-span-10'}>
                    <Home />
                </div>
            </main>
        </React.Fragment>
    )
}