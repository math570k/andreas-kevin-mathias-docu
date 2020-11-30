import { gql } from "@apollo/client/core";
import { useMutation, useQuery } from "@apollo/client";

const REGISTER_ORG = gql`
  mutation CreateOrganization($name: String!, $logo: String!, $user_id: Int!) {
    createOrganization(
      organization: { name: $name, logo: $logo }
      user_id: $user_id
    )
  }
`;

const GET_USER_ORGS = gql`
  query UserOrganizations($user_id: Int!) {
    userOrganizations(user_id: $user_id) {
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

const GET_ORG_USERS = gql`
  mutation OrganizationUsers($organization_id: Int!) {
    organizationUsers(organization_id: $organization_id) {
      id
      email
    }
  }
`;

export const GET_ORGANIZATION_ALL = gql`
  query Organization($organization_id: Int) {
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


export function useRegisterOrg() {
  return useMutation(REGISTER_ORG);
}

export function useGetUserOrgs(id = 1) {
  return useQuery(GET_USER_ORGS, {
    variables: {
      user_id: id,
    },
  });
}

export function useGetOrgUsers() {
  return useMutation(GET_ORG_USERS);
}

export function useGetOrganization(id = 7) {
  return useQuery(GET_ORGANIZATION_ALL, {
    variables: {
      organization_id: id,
    },
  });
}
