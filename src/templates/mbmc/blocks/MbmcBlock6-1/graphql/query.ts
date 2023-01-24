import { gql } from "@apollo/client";
import { CORE_MENU_FIELDS } from "../../../models";

export const GET_MENU_BY_UUID = gql`
    ${CORE_MENU_FIELDS}
    query GqlGetMenuByUuid($uuid: ID) {
        getMenu(uuid: $uuid) {
            ...CoreMenuFields
        }
    }
`;
