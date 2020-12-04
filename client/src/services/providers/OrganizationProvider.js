import React from "react";
import { useGetUserOrgs} from "../../graphql/organization.js";
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../utils/accessToken";

const OrganizationContext = React.createContext(null);

function OrganizationProvider(props) {

    const { userId } = jwtDecode(getAccessToken());

    const { data, error, loading } = useGetUserOrgs(userId);
    const [ organizations, setOrganizations ] = React.useState();
    const [ activeOrganization, setActiveOrganization ] = React.useState();
    const [ activeProject, setActiveProject ] = React.useState();

    React.useEffect(() => {
        if(data) {
            setOrganizations(data.userOrganizations);
            setActiveOrganization(data.userOrganizations[0]);
        }
    }, [data])


    if(error || loading) {
        return <div>Loading...</div>
    }

    const OrganizationAPI = {
        setOrganizations,
        organizations,
        setActiveOrganization,
        activeOrganization,
        activeProject,
        setActiveProject
    }

    return <OrganizationContext.Provider value={OrganizationAPI} {...props} />
}

function useOrganization() {
    const context = React.useContext(OrganizationContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a AuthProvider`)
    }
    return context
}

export {OrganizationProvider, useOrganization}
