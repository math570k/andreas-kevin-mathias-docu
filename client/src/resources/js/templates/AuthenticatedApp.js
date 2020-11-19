import React from "react";
import {useAuth} from "../services/providers/AuthProvider";

export default function AuthenticatedApp(props) {

    const {logout} = useAuth()

    return (
        <div>
            {/*Authenticated App*/}
            You are currently Authenticated <br/>
            <button onClick={() => logout()}>logout</button>
        </div>
    )
}