import React from "react";
import {useLoginMutation, useRegisterMutation} from "../../../../graphql/auth";

//todo move this to it's own util
const getToken = () => {
    return window.localStorage.getItem('token');
}

const setToken = (token) => {
    return window.localStorage.setItem('token', token);
}

const removeToken = () => {
    return window.localStorage.removeItem('token');
}

const AuthContext = React.createContext(null);

function AuthProvider(props) {
    const [handleRegister] = useRegisterMutation();
    const [handleLogin] = useLoginMutation();

    const [state, setState] = React.useState({
        status: 'idle',
        error: null,
        user: null,
    })

    const initialAuthorization = () => {
        const authToken = getToken()

        if(authToken) {
            return setState({
                status: 'resolved',
                error: null,
                user: authToken
            })
        }

        return setState({
            status: 'idle',
            error: null,
            user: null,
        })
    }

    React.useEffect(() => {
        initialAuthorization()
    }, [])

    const register = (form) => {
        handleRegister({
            variables: {
                email: form.email,
                password: form.password,
                firstName: form.firstName,
                lastName: form.lastName
            }
        })
            .then(data => console.log(data))
            .catch(error => {
                setState({
                    status: 'rejected',
                    error: error,
                    user: null,
                })
            })
    }

    const login = (form) => {
        handleLogin({
            variables: {
                email: form.email,
                password: form.password,
            }
        })
            .then(({data}) => {
                setToken(data.login.accessToken)
                setState({
                    status: 'resolved',
                    error: null,
                    user: data.login.accessToken
                })
            })
            .catch(error => {
                setState({
                    status: 'rejected',
                    error: error,
                    user: null,
                })
            })
    }

    const logout = () => {
        removeToken()
        setState({
            status: 'idle',
            error: null,
            user: null,
        })
    }

    const authAPI = {
        register,
        login,
        logout,
        user: state.user,
    }

    return <AuthContext.Provider value={authAPI} {...props} />
}

function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
}

export {AuthProvider, useAuth}