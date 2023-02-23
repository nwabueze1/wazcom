import { gql } from '@apollo/client';

export const CORE_RESTAURANT_FIELDS = gql`
    fragment CoreRestaurantFields on Restaurant {
        uuid
        site_uuid
        bank_info {
            currency
            delivery_fee
        }
    }
`;