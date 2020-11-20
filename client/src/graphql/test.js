import {gql} from "@apollo/client/core";
import {useQuery} from "@apollo/client";
import {LOGIN_USER} from "./auth";

export const BYE = gql`
    query bye {
        bye
    }
`

export function useByeQuery() {
    return useQuery(BYE);
}