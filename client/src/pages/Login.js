import React from "react";
import {useAuth} from "../services/providers/AuthProvider";
import Register from "./Register";
import {useByeQuery} from "../graphql/test";

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {login} = useAuth();

    return (
        <React.Fragment>
            <div>
                Login Form
                <form onSubmit={e => {
                    e.preventDefault()
                    console.log(email, password)
                    login({email, password})
                }}>
                    <input value={email} type="text" onChange={e => setEmail(e.target.value)}/>
                    <input value={password} type={'password'} onChange={e => setPassword(e.target.value)}/>
                    <button type={'submit'}>Submit</button>
                </form>
            </div>
            <Register/>
        </React.Fragment>
    );
}