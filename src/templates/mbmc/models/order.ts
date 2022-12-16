import { gql } from '@apollo/client';

export const CORE_ORDER_FIELDS = gql`
    fragment CoreOrderFields on Order {
        uuid
        currency_code
        grand_total
        payment_type
        order_type
    }
`;