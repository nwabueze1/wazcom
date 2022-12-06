import { gql } from '@apollo/client';

export const CORE_ADDRESS_FIELDS = gql`
    fragment CoreAddressFields on Address {
        uuid
        addressline1
        city
        state
        country
        postcode
    }
`;