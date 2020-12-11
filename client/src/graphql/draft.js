import {gql} from "@apollo/client/core";
<<<<<<< HEAD
import {useMutation} from "@apollo/client";

const ADD_DRAFT = gql`
    mutation CreateDraft($draft: IDraft!) {
        createDraft(draft: $draft)
    }
`;

export function useAddDraftMutation() {
    return useMutation(ADD_DRAFT);
=======
import {useLazyQuery, useMutation, useQuery} from "@apollo/client";


const CREATE_DRAFT = gql`    
    mutation createDraft(
        $type: String!,
        $action: String!,
        $sectionId: Int!,
        $title: String!,
        $content: String!,
        $order: Int!,
        $userId: Float!,
        $organizationId: Float!
    ) {
        createDraft(
            draft: {
                type: $type,
                action: $action,
                content: {
                    sectionId: $sectionId,
                    section: {
                        title: $title,
                        content: $content,
                        order: $order
                    }
                },
                userId: $userId,
                organizationId: $organizationId
            })
    }
`

export function useCreateDraft() {
    return useMutation(CREATE_DRAFT);
>>>>>>> 895dd4fa8e84836483788f21c3ba2c419d739f63
}