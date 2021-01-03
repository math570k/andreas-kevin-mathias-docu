import {gql} from "@apollo/client/core";
import {useMutation} from "@apollo/client";

export const REGISTER_USER = gql`
    mutation Register($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
        register(email: $email password: $password firstName: $firstName lastName: $lastName)
    }
`;

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            accessToken,
            admin {id}
        }
    }
`

export function useLoginMutation() {
    return useMutation(LOGIN_USER);
}

export function useRegisterMutation() {
    return useMutation(REGISTER_USER);
}
