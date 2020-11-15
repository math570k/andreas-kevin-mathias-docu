import React, { useState } from 'react';
import {useAuth} from "../resources/js/services/providers/AuthProvider";
import AuthenticatedApp from "../resources/js/templates/AuthenticatedApp";
import Header from '../resources/js/templates/Header';
import UnauthenticatedApp from "../resources/js/templates/UnauthenticatedApp";

const App = () => {
    const {user} = useAuth();

    return (
         user ? <AuthenticatedApp/> : <UnauthenticatedApp/>
    /*    <Header />*/
    );
};

export default App;