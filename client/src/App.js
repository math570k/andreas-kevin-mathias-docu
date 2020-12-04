import React from 'react';
import {useAuth} from "./services/providers/AuthProvider";
import AuthenticatedApp from "./widgets/apps/AuthenticatedApp";
import UnauthenticatedApp from "./widgets/apps/UnauthenticatedApp";

const App = () => {
    const { user } = useAuth();

    return (
         user ? <AuthenticatedApp/> : <UnauthenticatedApp/>
    );
};

export default App;