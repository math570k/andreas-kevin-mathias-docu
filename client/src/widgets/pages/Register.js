import React from "react";
import {useAuth} from "../../services/providers/AuthProvider";
import * as Template from "../../ui/templates";
import {Link} from "react-router-dom";

export default function Register() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const {register} = useAuth();

    return (
        <Template.Page>
            <div className={'flex items-center justify-center h-full '}>
                <div className={'flex flex-col border border-primary-500 w-2/5 bg-white rounded'}>
                    <form
                        className={'flex flex-col space-y-8 p-10'}
                        onSubmit={e => {
                        e.preventDefault()
                        console.log(email, password, firstName, lastName)
                        register({email, password, firstName, lastName});
                    }}>
                        <label className={'flex flex-col space-y-2'}>
                            <span>Email</span>
                            <input className={'input'} value={email} type="text" onChange={e => setEmail(e.target.value)}/>
                        </label>

                        <label className={'flex flex-col space-y-2'}>
                            <span>Password</span>
                            <input className={'input'} value={password} type={'password'} onChange={e => setPassword(e.target.value)}/>
                        </label>

                        <label className={'flex flex-col space-y-2'}>
                            <span>First Name</span>
                            <input className={'input'} value={firstName} type="text" onChange={e => setFirstName(e.target.value)}/>
                        </label>

                        <label className={'flex flex-col space-y-2'}>
                            <span>Last Name</span>
                            <input className={'input'} value={lastName} type={'text'} onChange={e => setLastName(e.target.value)}/>
                        </label>

                        <button className={'button'} type={'submit'}>
                            Register Account
                        </button>
                    </form>
                    <div className={'border-t border-primary-500 p-10 bg-primary'}>
                        <Link to={'/login'}>Back to login</Link>
                    </div>
                </div>
            </div>
        </Template.Page>
    )
}