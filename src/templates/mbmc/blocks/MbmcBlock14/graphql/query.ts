import { gql } from "@apollo/client";
import { CORE_CART_FIELDS, CORE_ORDER_FIELDS } from "../../../models";

export const GET_CART_BY_UUID = gql`
    ${CORE_CART_FIELDS}
    query GqlGetCartByUuid($uuid: ID) {
        cart(uuid: $uuid) {
            ...CoreCartFields
        }
    }
`;

export const UPDATE_ORDER = gql`
    ${CORE_ORDER_FIELDS}
    mutation GqlUpdateOrder($uuid: ID, $payment_type: PaymentType, $payment_reference: String) {
        updateOrder(
            uuid: $uuid
            payment_type: $payment_type
            payment_reference: $payment_reference
        ) {
            ...CoreOrderFields
        }
    }
`;
