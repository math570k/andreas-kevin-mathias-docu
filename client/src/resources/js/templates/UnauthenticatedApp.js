import React from "react";
import Register from "../pages/Register";
import Login from "../pages/Login";

export default function UnauthenticatedApp(props) {
    return (
        <div>
            {/*Unauthenticated App*/}
            You are currently not Authenticated
            <Login/>
        </div>
    )
}