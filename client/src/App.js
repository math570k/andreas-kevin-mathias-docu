import React, { useState } from 'react';
import { useGetOrganization } from './graphql/organization';
import {useAuth} from "./services/providers/AuthProvider";
import { useOrganization } from './services/providers/OrganizationProvider';
import AuthenticatedApp from "./widgets/apps/AuthenticatedApp";
import UnauthenticatedApp from "./widgets/apps/UnauthenticatedApp";

const App = () => {
    const { user } = useAuth();

    return (
         user ? <AuthenticatedApp/> : <UnauthenticatedApp/>
    );
};

export default App;