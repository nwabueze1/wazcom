import { gql } from "@apollo/client";
import { CORE_ADDRESS_FIELDS } from "./address";

export const CORE_GUEST_FIELDS = gql`
    ${CORE_ADDRESS_FIELDS}
    fragment CoreGuestFields on Guest {
        uuid
        firstname
        lastname
        email
        phone
        address {
            ...CoreAddressFields
        }
    }
`;