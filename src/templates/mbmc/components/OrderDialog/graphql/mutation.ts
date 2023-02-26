import { gql } from "@apollo/client";
import { CORE_CART_FIELDS, CORE_CART_ITEM_FIELDS } from "../../../models";

export const CREATE_CART = gql`
  ${CORE_CART_FIELDS}
  mutation GqlCreateCart($site_uuid: ID!, $currency: String!) {
    createCart(site_uuid: $site_uuid, currency: $currency) {
      ...CoreCartFields
    }
  }
`;

export const CREATE_CART_ITEM = gql`
  ${CORE_CART_ITEM_FIELDS}
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
      ...CoreCartItemFields
    }
  }
`;
