import React from "react";
import { useQuery, gql } from '@apollo/client';

const sleep = time => new Promise(resolve => setTimeout(resolve, time))


const AuthContext = React.createContext(null);
function AuthProvider({children}) {
    const [state, setState] = React.useState({
        status: 'pending',
        error: null,
        user: null,
    })


    //Run GetUser()
    React.useEffect(() => {

    }, [])

    const login = () => {}

    const register = () => {}

    const logout = () => {}

    return (
        <AuthContext.Provider value={{login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
}

export {AuthProvider, useAuth}