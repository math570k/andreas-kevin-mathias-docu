import {gql} from "@apollo/client/core";
import {useMutation} from "@apollo/client";

const ADD_DRAFT = gql`
    mutation CreateDraft($draft: IDraft!) {
        createDraft(draft: $draft)
    }
`;

export function useAddDraftMutation() {
    return useMutation(ADD_DRAFT);
}