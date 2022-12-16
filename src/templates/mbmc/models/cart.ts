import { gql } from "@apollo/client";
import { CORE_RESTAURANT_FIELDS } from "./restaurant";
import { CORE_MENU_ITEM_FIELDS } from "./menu";
import { CORE_GUEST_FIELDS } from "./guest";

export const CORE_CART_ITEM_FIELDS = gql`
    ${CORE_MENU_ITEM_FIELDS}
    fragment CoreCartItemFields on CartItem {
        uuid
        options
        quantity
        detail
        menuItem {
            ...CoreMenuItemFields
        }
    }
`;

export const CORE_CART_FIELDS = gql`
    ${CORE_CART_ITEM_FIELDS}
    ${CORE_RESTAURANT_FIELDS}
    ${CORE_GUEST_FIELDS}
    fragment CoreCartFields on Cart {
        uuid
        currency
        cartItems {
            ...CoreCartItemFields
        }
        restaurant {
            ...CoreRestaurantFields
        }
        guest {
            ...CoreGuestFields
        }
    }
`;