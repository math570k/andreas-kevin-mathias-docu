import React, { useState } from 'react';
import {useAuth} from "./services/providers/AuthProvider";
import AuthenticatedApp from "./templates/AuthenticatedApp";
import UnauthenticatedApp from "./templates/UnauthenticatedApp";

const App = () => {
    const {user} = useAuth();

    return (
         user ? <AuthenticatedApp/> : <UnauthenticatedApp/>
    );
};

export default App;