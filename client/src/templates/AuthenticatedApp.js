import React from "react";
import {useAuth} from "../services/providers/AuthProvider";
import {useByeQuery} from "../graphql/test";

export default function AuthenticatedApp(props) {
    const {data, error, refetch} = useByeQuery();
    console.log(data, error)
    const {logout} = useAuth()

    return (
        <div>
            {/*Authenticated App*/}
            <button onClick={() => refetch()}>refetch</button>
            You are currently Authenticated <br/>
            <button onClick={() => logout()}>logout</button>
        </div>
    )
}