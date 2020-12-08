import {gql} from "@apollo/client/core";
import {useLazyQuery, useQuery} from "@apollo/client";

const GET_PAGE = gql`
    query GetPage($page_id: Int!) {
        page(page_id: $page_id) {
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
`;

export function useGetPage(page_id) {
    return useQuery(GET_PAGE, {
        variables: {
            page_id: page_id
        }
    })
}