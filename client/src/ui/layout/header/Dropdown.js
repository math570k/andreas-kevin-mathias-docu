import React, { useEffect } from "react";
import { useGetUserOrgs } from "../../../graphql/organization";
import { useOrganization } from "../../../services/providers/OrganizationProvider";

export default function Dropdown(props) {
    const { data, error, loading } = useGetUserOrgs();
    const { setOrganization } = useOrganization();

    const handleSetOrg = (org) => {
        setOrganization(org)
    }

    if(loading) {
        return <h1>Loading...</h1>
    } else if(error) {
        return <h1>Error getting data..</h1>
    } else if(data) {
        const orgs = data.userOrganizations
        return (
            <div className={"header__dropdown"}>
                {orgs.map((org, index) => {
                    return <a href="/" key={index} onClick={(e) => {
                        e.preventDefault();
                        handleSetOrg(org)
                    }}>{org.name}</a>
                })}
            </div>
        )     
    }
}