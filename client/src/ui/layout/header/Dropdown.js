import React from "react";
import { useGetUserOrgs } from "../../../graphql/organization";
import { useOrganization } from "../../../services/providers/OrganizationProvider";

export default function Dropdown({setDropdown}) {
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
            <div className="header__dropdown transition bg-black-400 w-100">
                <ul className="flex-col px-8">
                    {orgs.map((org, index) => {
                        return (
                            <li className="my-4" key={org.id}>
                                <a href="/" key={index} className="text-l text-white" onClick={(e) => {
                                    e.preventDefault();
                                    handleSetOrg(org)
                                    setDropdown(false)
                                }}>{org.name}</a>
                            </li> 
                        )
                    })}
                </ul>
            </div>
        )     
    }
}