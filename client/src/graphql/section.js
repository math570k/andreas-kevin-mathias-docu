import {gql} from "@apollo/client/core";
import {useLazyQuery, useQuery} from "@apollo/client";

const GET_PAGE_SECTIONS = gql`
    query GetPageSections($page_id: Int!) {
        sections(page_id : $page_id) {
            id
            title
            content
            order
            html
        }
    }
`;

export function useLoadPageSections(page_id) {

    return useLazyQuery(GET_PAGE_SECTIONS, {
        variables: {
            page_id: page_id
        }
    });
}

export function useGetPageSections(page_id) {
    return useQuery(GET_PAGE_SECTIONS, {
        variables: {
            page_id: page_id
        }
    });
}