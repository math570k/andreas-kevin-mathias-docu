import {gql} from "@apollo/client/core";
import {useLazyQuery, useMutation, useQuery} from "@apollo/client";

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


export const CREATE_PROJECT = gql`
    mutation CreateProject($org_id: Int!, $title: String!, $color: String!, $content: String!, $description: String!) {
        createProject(
            org_id: $org_id
            project: {title: $title, color: $color, content: $content, description: $description}
        )
    }
`;

export function useCreateProject() {
    return useMutation(CREATE_PROJECT, {
        update(cache, { data: {createProject} }) {
            cache.modify({
                fields: {
                    projects(existingProjects = []) {
                        const newProjectRef = cache.writeQuery({
                            data: createProject,
                            query: gql`
                                query Project {
                                    id
                                    title
                                    content
                                    color
                                    description
                                }
                            `
                        });
                        return [...existingProjects, newProjectRef]
                    }
                }
            })
        }
    })
}

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

