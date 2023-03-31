import { gql } from "@apollo/client";

export const GET_MENU_CATEGORIES = gql`
  query GqlGetMenuByUuid($uuid: ID) {
    getMenu(uuid: $uuid) {
      activeMenuCategories {
        uuid
        title
        menuItems {
          image_url
        }
      }
    }
  }
`;