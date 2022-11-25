import { gql } from "@apollo/client";
import { CORE_CART_ITEM_FIELDS } from "../../../models";

export const UPDATE_CART_ITEM = gql`
    ${CORE_CART_ITEM_FIELDS}
    mutation gqlUpdateCartItem($uuid: ID!, $quantity: Int!, $options: String) {
        updateCartItem(uuid: $uuid, quantity: $quantity, options: $options) {
            ...CoreCartItemFields
        }
    }
`;
