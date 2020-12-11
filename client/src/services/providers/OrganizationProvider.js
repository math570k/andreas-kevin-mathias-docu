import React from "react";
import {useGetUserOrgs} from "../../graphql/organization.js";
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../utils/accessToken";
import * as Pages from "../../widgets/pages";
import {useParams, useRouteMatch, useHistory, generatePath, useLocation} from "react-router-dom";

const OrganizationContext = React.createContext(null);

function OrganizationProvider(props) {

    const {organizations} = jwtDecode(getAccessToken());

    const history = useHistory();
    const currentLocation = useLocation();
    const activeOrganizationId = Number(currentLocation.pathname.split('/')[1]);
    const activeOrganization = organizations.find((organization) => organization.id === activeOrganizationId );

    React.useLayoutEffect(() => {
        if(hasOrganizations() && currentLocation.pathname === '/login' || currentLocation.pathname === '/') {
            const location = {
                pathname: `/${organizations[0].id}/projects`,
                state: {params: organizations[0].id}
            }
            history.push(location)
        }
    }, [])

    const hasOrganizations = () => {
        return organizations.length > 0;
    }

    const hasAccess = (organizationId) => {
        return organizations.find((organization) => organization.id === organizationId)
    }

    //Is a part of any organizations.
    if (!hasOrganizations()) {
        return <div>This user is currently not a part of an organization.</div>
    }

    //Has access to the given organization passed in the URL
    if (!hasAccess(activeOrganizationId)) {
        return <div>Unauthorized attempt, you are not a member of this organization</div>
    }

    const OrganizationAPI = {
        organizations,
        activeOrganization
    }

    //Only render children when we have determined which companies are available and which one is active.
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
