import React from "react";
import {useOrganization} from "../../../services/providers/OrganizationProvider";

export default function Dropdown(props) {
    const {organizations, setActiveOrganization} = useOrganization();

    return (
        <div className={"header__dropdown"}>
            {organizations.map((org, index) => {
                return <a href="/" key={index} onClick={(e) => {
                    e.preventDefault();
                    setActiveOrganization(org)
                }}>{org.name}</a>
            })}
        </div>
    )
}