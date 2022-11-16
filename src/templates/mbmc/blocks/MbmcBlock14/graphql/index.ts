import { gql } from "@apollo/client";

export const GET_CART_BY_UUID = gql`
    query GqlGetCartByUuid($uuid: ID) {
        cart(uuid: $uuid) {
            id
            uuid
            cartItems {
                id
                detail
                quantity
                options
                menuItem {
                    id
                    name
                    image_url
                    price
                    menuCategory
                }
                created_at
            }
        }
    }
`;
