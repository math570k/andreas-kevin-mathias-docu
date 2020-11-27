import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { GET_ORGANIZATION, useGetOrganization, useGetOrgUsers, useGetPages, useGetProjects, useGetSections, useGetUserOrgs, useRegisterOrg } from "../../graphql/organization.js";

const OrganizationContext = React.createContext(null);

function OrganizationProvider(props) {
    const [ handleRegisterOrg ] = useRegisterOrg();
    const [ handleUserOrgs ] = useGetUserOrgs();
    const [ handleOrgUsers ] = useGetOrgUsers();

    const {data, error, loading} = useGetOrganization();

    const [userOrgs, setUserOrg] = React.useState()
    const [orgUsers, setOrgUsers] = React.useState()
    const [organization, setOrganization] = React.useState(data)
    const [project, setProjects] = React.useState()
    const [pages, setPages] = React.useState()
    const [sections, setSections] = React.useState()


    const [state, setState] = React.useState({
        status: 'idle',
        error: null,
        user: null,
    })

    useEffect(() => {
        setOrganization(data)
    }, [data])

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

    const getUserOrgs = (id) => {
        handleUserOrgs({
            variables: {
                user_id: id
            }
        })
            .then(data => setUserOrg(data))
            .catch(error => {
                setState({
                    status: 'rejected',
                    error: error,
                    user: null,
                })
            })
    }


    const getProjects = (id) => {
        const { error, loading, data } = useGetProjects({variables: {
            
        }});
        if(loading) {
            return "Loading"
        } else if (error) {
            return "Data not found"
        } else if (data) {
            setProjects(data.projects)
        } else {
            "Something went wrong"
        }
    }

    const getPages = async (id) => {
        const { error, loading, data } = await useGetPages(id);
        if(loading) {
            return "Loading"
        } else if (error) {
            return "Data not found"
        } else if (data) {
            setPages(data.pages)
        } else {
            "Something went wrong"
        }
    }


    const getSections = async (id) => {
        const { error, loading, data } = await useGetSections(id);
        if(loading) {
            return "Loading"
        } else if (error) {
            return "Data not found"
        } else if (data) {
            setSections(data.sections)
        } else {
            "Something went wrong"
        }
    }




    const OrganizationAPI = {
        createOrg,
        getPages,
        getUserOrgs,
        getProjects,
        getSections,
        orgData: organization
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
