import {gql} from "@apollo/client/core";
import {useLazyQuery, useQuery} from "@apollo/client";

const GET_PROJECT = gql`
    query GetProject($id: Int!) {
        project(id: $id) {
            id
            color
            title
            description
            content
            pages {
                id
                title
                content
                order
                sections {
                    id
                    title
                    content
                    order
                    html
                }
            }
        }
    }
`;


const GET_PROJECTS = gql`
    query GetProjects($organization_id: Int!) {
        projects(organization_id: $organization_id) {
            id
            title
            color
            description
            content
            tags {
                id
                title
            }
        }
    }
`;

export function useGetProjects(organizationId) {
    return useQuery(GET_PROJECTS, {
        variables: {
            organization_id: organizationId
        }
    })
}

export function useGetProject(project_id) {
    return useQuery(GET_PROJECT, {
        variables: {
            id: project_id
        }
    })
}