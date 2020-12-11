import {gql} from "@apollo/client/core";
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
}