import React from "react";
import {useGetUserOrgs} from "../graphql/organization";

export default function useActiveCompany(userId) {

    const {data, error, loading} = useGetUserOrgs(userId);

    React.useEffect(() => {
        if(data) {
            const location = {
                pathname: `/${data.userOrganizations[0].id}/projects`,
                state: { testId: data.userOrganizations[0].id }
            }
            console.log('i pushed the location')
            history.push(location)
        }
    }, [data])

    return [activeOrganization]

}