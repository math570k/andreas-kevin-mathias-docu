import React from "react";
import {useAuth} from "../../services/providers/AuthProvider";
import * as Template from "../../ui/templates";
import {Link} from "react-router-dom";
import * as Icon from "../../ui/icons";


export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {login} = useAuth();

    return (
        <Template.Page>
            <div className={'flex flex-col items-center justify-center h-full space-y-10'}>
                <Icon.Logo/>
                <div className={'flex flex-col border border-primary-500 w-2/5 bg-white rounded'}>
                    <form
                        className={'flex flex-col space-y-8 p-10'}
                        onSubmit={e => {
                            e.preventDefault()
                            login({email, password})
                        }}>
                        <label className={'flex flex-col space-y-2'}>
                            <span>Email</span>
                            <input
                                className={'input'}
                                value={email}
                                type="text"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </label>

                        <label className={'flex flex-col space-y-2'}>
                            <span>Password</span>
                            <input
                                className={'input'}
                                value={password}
                                type={'password'}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </label>
                        <button className={'button'} type={'submit'}>
                            Login
                        </button>
                    </form>
                    <div className={'border-t border-primary-500 p-10 bg-primary'}>
                        <Link className={'text-purple-500'} to={'/register'}>
                            <span className={'text-black-500 mr-1'}>
                                New user?
                            </span>
                            Register here
                        </Link>
                    </div>
                </div>
            </div>
        </Template.Page>
    );
}