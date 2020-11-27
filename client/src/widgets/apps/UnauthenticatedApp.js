import React from "react";
import Register from "../pages/Register";
import Login from "../pages/Login";
import {useByeQuery} from "../../graphql/test";
import {Route, Link, Switch} from "react-router-dom";
import UnauthenticatedRoutes from "../../routes/UnauthenticatedRoutes";

export default function UnauthenticatedApp(props) {
    return (
        <div>
            {/*Unauthenticated App*/}
            <main className={'min-h-full relative pt-16'}>
                <span>You are currently not Authenticated</span>
                <ul>
                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                        <Link to={'/register'}>Register</Link>
                    </li>
                </ul>
               <UnauthenticatedRoutes/>
            </main>
        </div>
    )
}