import React from "react";
import {useAuth} from "../services/providers/AuthProvider";
import {useByeQuery} from "../graphql/test";
import Header from "../ui/layout/Header";

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
        </div>
    )
}