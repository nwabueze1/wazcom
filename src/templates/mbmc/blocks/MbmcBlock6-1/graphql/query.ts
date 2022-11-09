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
                options
                image_url
                price
            }
            options_config {
                name
                uuid
                type
                options {
                    selection {
                        amount
                        name
                    }
                    extras {
                        amount
                        name
                    }
                    deselection {
                        amount
                        name
                    }
                }
            }
            restaurant {
                bank_info {
                    currency
                }
            }
        }
    }
`;
