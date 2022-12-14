import { gql } from "@apollo/client";
import { CORE_ORDER_FIELDS } from "../../../../../models";

export const CREATE_ORDER = gql`
    ${CORE_ORDER_FIELDS}
    mutation GqlCreateOrder(
        $grand_total: Float
        $address_uuid: ID
        $payment_type: PaymentType
        $cart_uuid: ID
    ) {
        createOrder(
            grand_total: $grand_total
            address_uuid: $address_uuid
            payment_type: $payment_type
            cart_uuid: $cart_uuid
        ) {
            ...CoreOrderFields
        }
    }
`;

export const MAKE_PAYPAL_PAYMENT = gql`
    mutation GqlMakePaypalPayment($order_uuid: ID, $pageRedirect: String) {
        makePaypalDirectPayment(
            type: FOOD_ORDER
            order_uuid: $order_uuid
            pageRedirect: $pageRedirect
        ) {
            status
            redirect_url
            error_message
        }
    }
`;
