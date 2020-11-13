import React from 'react';
import {useAuth} from "../resources/js/services/contexts/AuthenticationContext";
import AuthenticatedApp from "../resources/js/templates/AuthenticatedApp";
import UnauthenticatedApp from "../resources/js/templates/UnauthenticatedApp";

const App = () => {
    const {user} = useAuth();
    return (
        user ? <AuthenticatedApp/> : <UnauthenticatedApp/>
    );
};

export default App;