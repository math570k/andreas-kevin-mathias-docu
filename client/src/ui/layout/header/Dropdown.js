import React from "react";
import {useOrganization} from "../../../services/providers/OrganizationProvider";

export default function Dropdown({setDropdown}) {
    const {organizations, setActiveOrganization} = useOrganization();

    return (
        <div className="header__dropdown transition bg-black-400 w-100">
            <ul className="flex-col px-8">
                {organizations.map((org, index) => {
                    return (
                        <li className="my-4" key={org.id}>
                            <a href="/" key={index} className="text-l text-white" onClick={(e) => {
                                e.preventDefault();
                                setActiveOrganization(org)
                                setDropdown(false)
                            }}>{org.name}</a>
                        </li> 
                    )
                })}
            </ul>
        </div>
    ) 
}