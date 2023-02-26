import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GqlCart($uuid: ID!) {
    cart(uuid: $uuid) {
      currency
      cartItems {
        options
        quantity
        uuid
        detail
      }
    }
  }
`;
