import React, { useEffect } from "react";
import { GET_ORGANIZATION, useGetOrganization, useGetOrgUsers, useGetPages, useGetProjects, useGetSections, useGetUserOrgs, useRegisterOrg } from "../../graphql/organization.js";
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../utils/accessToken";

const OrganizationContext = React.createContext(null);

function OrganizationProvider(props) {

    const {userId} = jwtDecode(getAccessToken());

    const { data, error, loading } = useGetUserOrgs(userId);
    const [ organizations, setOrganizations ] = React.useState();
    const [ activeOrganization, setActiveOrganization ] = React.useState();
    const [ activeProject, setActiveProject ] = React.useState();

/*    const [state, setState] = React.useState({
        status: 'idle',
        error: null,
        user: null,
    })
*/

    React.useEffect(() => {
        if(data) {
            setOrganizations(data.userOrganizations);
            setActiveOrganization(data.userOrganizations[0]);
        }
    }, [data])

/*    const createOrg = ({name, logo}) => {
        handleRegisterOrg({
            variables: {
                name: name,
                logo: logo,
                // Get user id from user context
                user_id: user_id
            }
        })
            .then(res => console.log(res))
            .catch(error => {
                setState({
                    status: 'rejected',
                    error: error,
                    user: null,
                })
            })
    }*/



/*    const getOrg = async (id) => {
        const { data, error, loading } = await useGetOrganization();
        if(data) {
            setOrganization(data)
        }
    }*/

    if(error || loading) {
        return <div>Loading...</div>
    }

    const OrganizationAPI = {
        // createOrg,
        // getOrg,
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
