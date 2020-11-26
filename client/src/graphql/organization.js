import { gql } from "@apollo/client/core";
import { useMutation } from "@apollo/client";

export const REGISTER_ORG = gql`
    mutation CreateOrganization($name: String!, $logo: String!, $user_id: Int!) {
        createOrganization(organization: {name: $name logo: $logo} user_id: $user_id)
    }
`

export function useRegisterOrg() {
    return useMutation(REGISTER_ORG);
}
