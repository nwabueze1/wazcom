var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var GET_MENU_BY_UUID = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GqlGetMenuByUuid($uuid: ID) {\n        menu(uuid: $uuid) {\n            name\n            activeMenuCategories {\n                title \n                menuItems {\n                    image_url\n                }\n            }\n        }\n    }\n"], ["\n    query GqlGetMenuByUuid($uuid: ID) {\n        menu(uuid: $uuid) {\n            name\n            activeMenuCategories {\n                title \n                menuItems {\n                    image_url\n                }\n            }\n        }\n    }\n"])));
var templateObject_1;
