import React from "react";
import { useQuery, gql } from '@apollo/client';

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

    const register = (form) => {
        const userRegister = gql`
        mutation {
            register(email: "test1@email.com", password: "test123")
            }
        `
    }

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