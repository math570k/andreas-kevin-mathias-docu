import { gql } from "@apollo/client/core";
import { useMutation, useLazyQuery, useQuery } from "@apollo/client";

const REGISTER_ORG = gql`
  mutation CreateOrganization($name: String!, $logo: String!, $user_id: Int!) {
    createOrganization(
      organization: { name: $name, logo: $logo }
      user_id: $user_id
    )
  }
`;

const GET_USER_ORGS = gql`
  mutation UserOrganizations($user_id: Int!) {
    userOrganizations(user_id: $user_id) {
      id
      name
    }
  }
`;

const GET_ORG_USERS = gql`
  mutation OrganizationUsers($organization_id: Int!) {
    organizationUsers(organization_id: $organization_id) {
      id
      email
    }
  }
`;

export const GET_ORGANIZATION = gql`
  query Organization($organization_id: Int = 7) {
    organization(organization_id: $organization_id) {
      id
      name
      projects {
        id
        title
        content
        pages {
          id
          content
          title
          order
          sections {
            id
            order
            title
            content
          }
        }
      }
    }
  }
`;

export const GET_PAGES = gql`
  query Pages($project_id: Int!) {
    pages(project_id: $project_id) {
      id
      title
      order
      content
    }
  }
`;

const GET_SECTIONS = gql`
  query Sections($page_id: Int!) {
    sections(page_id: $page_id) {
      id
      title
      order
      content
    }
  }
`;

export function useRegisterOrg() {
  return useMutation(REGISTER_ORG);
}

export function useGetUserOrgs() {
  return useMutation(GET_USER_ORGS);
}

export function useGetOrgUsers() {
  return useMutation(GET_ORG_USERS);
}

export function useGetOrganization() {
  return useQuery(GET_ORGANIZATION);
}

export function useGetPages(id) {
  return useQuery(GET_PAGES, {
    variables: {
      project_id: id,
    },
  });
}

export function useGetSections(id) {
  return useQuery(GET_SECTIONS, {
    variables: {
      page_id: id,
    },
  });
}
