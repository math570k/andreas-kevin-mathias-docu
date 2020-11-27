import React from "react";
import {useAuth} from "../../services/providers/AuthProvider";
import * as Template from "../../ui/templates";

export default function Register() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const {register} = useAuth();

    return (
        <Template.Page>
            Register Form
            <form onSubmit={e => {
                e.preventDefault()
                console.log(email, password, firstName, lastName)
                register({email, password, firstName, lastName});
            }}>
                <input value={email} type="text" onChange={e => setEmail(e.target.value)}/>
                <input value={password} type={'password'} onChange={e => setPassword(e.target.value)}/>
                <input value={firstName} type="text" onChange={e => setFirstName(e.target.value)}/>
                <input value={lastName} type={'text'} onChange={e => setLastName(e.target.value)}/>
                <button type={'submit'}>Submit</button>
            </form>
        </Template.Page>
    )
}