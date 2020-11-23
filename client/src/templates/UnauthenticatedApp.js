import React from "react";
import Register from "../pages/Register";
import Login from "../pages/Login";
import {useByeQuery} from "../graphql/test";
import {Route, Link, Switch} from "react-router-dom";

export default function UnauthenticatedApp(props) {
    return (
        <div>
            {/*Unauthenticated App*/}
            You are currently not Authenticated
            <ul>
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
                <li>
                    <Link to={'/register'}>Register</Link>
                </li>
            </ul>

            <Switch>
                <Route path={'/login'} >
                    <Login/>
                </Route>
                <Route path={'/register'} >
                    <Register/>
                </Route>
            </Switch>
        </div>
    )
}