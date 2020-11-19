import React, { useState } from 'react';
import {useAuth} from "./services/providers/AuthProvider";
import AuthenticatedApp from "./templates/AuthenticatedApp";
import Header from './templates/Header';
import UnauthenticatedApp from "./templates/UnauthenticatedApp";

const App = () => {
    const {user} = useAuth();

    return (
         user ? <AuthenticatedApp/> : <UnauthenticatedApp/>
    /*    <Header />*/
    );
};

export default App;