import { gql } from "@apollo/client";

export const CORE_GUEST_FIELDS = gql`
    fragment CoreGuestFields on Guest {
        uuid
        firstname
        lastname
        email
    }
`;