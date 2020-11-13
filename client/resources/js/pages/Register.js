import {useAuth} from "../services/contexts/AuthenticationContext";

export default function Register() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {register} = useAuth();

    return (
        <div>
            this is the register page
            <form onSubmit={e => {
                e.preventDefault()
            }}>
                <input value={email} type="text" onChange={e => setEmail(e.target)}/>
                <input value={password} type={'password'} onChange={e => setPassword(e.target)}/>
                <button type={'submit'}>Submit</button>
            </form>
        </div>
    )
}