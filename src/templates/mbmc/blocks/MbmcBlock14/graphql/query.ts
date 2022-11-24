import { gql } from "@apollo/client";
import { CORE_CART_FIELDS } from "../../../models";

export const GET_CART_BY_UUID = gql`
    ${CORE_CART_FIELDS}
    query GqlGetCartByUuid($uuid: ID) {
        cart(uuid: $uuid) {
            ...CoreCartFields
        }
    }
`;
