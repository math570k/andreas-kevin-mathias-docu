import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_ORGANIZATION, useGetOrganization, useGetOrgUsers, useGetPages, useGetProjects, useGetSections, useGetUserOrgs, useRegisterOrg } from "../../graphql/organization.js";

const OrganizationContext = React.createContext(null);

function OrganizationProvider(props) {
    // const [ handleUserOrgs ] = useGetUserOrgs();
    const [ organization, setOrganization ] = React.useState();
    const [ activeProject, setActiveProject ] = React.useState();

    const [state, setState] = React.useState({
        status: 'idle',
        error: null,
        user: null,
    })

    const createOrg = ({name, logo}) => {
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
    }

    const getOrg = async (id) => {
        const { data, error, loading } = await useGetOrganization();
        if(data) {
            setOrganization(data)
        }
    }

    const OrganizationAPI = {
        createOrg,
        getOrg,
        setOrganization,
        organization,
        setOrganization,
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
