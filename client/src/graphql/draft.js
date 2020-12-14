import {gql} from "@apollo/client/core";
import {useMutation, useQuery} from "@apollo/client";

const ADD_DRAFT = gql`
    mutation CreateDraft($draft: IDraft!) {
        createDraft(draft: $draft)
    }
`;

const APPLY_DRAFT = gql`
    mutation ApplyDraft($id: String!) {
        applyDraft(id: $id)
    }
`;

const REMOVE_DRAFT = gql`
    mutation DeleteDraft($id: String!) {
        deleteDraft(id: $id)
    }
`;

const GET_DRAFTS = gql`
    query GetDrafts {
        drafts {
            _id
            type
            action
            content
            userId
            organizationId
        }
    }
`;

export function useAddDraftMutation() {
    return useMutation(ADD_DRAFT);
}

export function useApplydraft() {
    return useMutation(APPLY_DRAFT);
}

export function useRemoveDraft() {
    return useMutation(REMOVE_DRAFT);
}

export function useGetDrafts() {
    return useQuery(GET_DRAFTS);
}