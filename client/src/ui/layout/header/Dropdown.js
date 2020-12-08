import React from "react";
import {useOrganization} from "../../../services/providers/OrganizationProvider";
import {Link} from "react-router-dom";

export default function Dropdown({setDropdown}) {
    const {organizations} = useOrganization();

    return (
        <div className="header__dropdown transition bg-black-400 w-100">
            <ul className="flex-col px-8">
                {organizations.map((org, index) => {
                    return (
                        <li className="my-4" key={org.id}>
                            <Link to={`/${org.id}/projects`} className="text-l text-white">
                                {org.name}
                            </Link>
                        </li> 
                    )
                })}
            </ul>
        </div>
    ) 
}