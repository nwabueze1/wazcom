import { gql } from '@apollo/client';

export const CORE_ADDRESS_FIELDS = gql`
    fragment CoreAddressFields on Address {
        phone
        addressline1
        city
        state
        country
        postcode
    }
`;