import React from "react";
import {useLoginMutation, useRegisterMutation} from "../../graphql/auth";
import {refreshAccessToken, removeToken, setAccessToken} from "../utils/accessToken";

const AuthContext = React.createContext(null);

function AuthProvider(props) {
    const [handleRegister] = useRegisterMutation();
    const [handleLogin] = useLoginMutation();

    const [state, setState] = React.useState({
        status: 'idle',
        error: null,
        user: null,
    })

    const fetchInitialAccessToken = () => {
        console.log('i ran')
        setState({
            status: 'pending',
            error: null,
            user: null,
        })

        refreshAccessToken()
            .then(accessToken => {
                console.log('got in here')
                setState({
                    status: 'resolved',
                    error: null,
                    user: accessToken,
                })
            })
    }

    React.useEffect(() => {
        fetchInitialAccessToken()
    }, [])

    //Display loading until we have determined whether or not there's an available access token
    if(state.status === 'pending' || state.status === 'idle') {
        return <div>...loading</div>
    }

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
                setAccessToken(data.login.accessToken)
                setState({
                    status: 'resolved',
                    error: null,
                    user: data.login.accessToken
                })
            })
            .catch(error => {
                setState({
                    status: 'rejected',
                    error: error.message,
                    user: null,
                })
            })
    }

    const logout = () => {
        removeToken();
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
        error: state.error,
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