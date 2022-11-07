import { gql } from "@apollo/client";

export const GET_MENU_BY_UUID = gql`
    query GqlGetMenuByUuid($uuid: ID) {
        menu(uuid: $uuid) {
            name
            activeMenuCategories {
                title
                id
            }
            activeMenuItems {
                name
                description
                menuCategory {
                    id
                }
                image_url
                price
            }
        }
    }
`;