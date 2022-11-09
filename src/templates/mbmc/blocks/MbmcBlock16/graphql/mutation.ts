import { gql } from "@apollo/client";

export const CREATE_CART = gql`
    mutation GqlCreateCart($site_uuid: ID!, $currency: String!) {
        createCart(site_uuid: $site_uuid, currency: $currency) {
            id
            currency
        }
    }
`;

export const CREATE_CART_ITEM = gql`
    mutation GqlCreateCartItem(
        $detail: String!
        $quantity: Int!
        $cart_uuid: ID!
        $menu_item_uuid: ID!
        $options: String
    ) {
        createCartItem(
            detail: $detail
            quantity: $quantity
            cart_uuid: $cart_uuid
            menu_item_uuid: $menu_item_uuid
            options: $options
        ) {
            id
            detail
            uuid
        }
    }
`;

export const UPDATE_CART_ITEM = gql`
    mutation gqlUpdateCartItem($uuid: ID!, $quantity: Int!, $options: String) {
        updateCartItem(uuid: $uuid, quantity: $quantity, options: $options) {
            uuid
            currency
        }
    }
`;
