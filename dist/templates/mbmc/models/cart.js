var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
import { CORE_RESTAURANT_FIELDS } from "./restaurant";
import { CORE_MENU_ITEM_FIELDS } from "./menu";
export var CORE_CART_ITEM_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    fragment CoreCartItemFields on CartItem {\n        uuid\n        options\n        quantity\n        detail\n        menuItem {\n            ...CoreMenuItemFields\n        }\n    }\n"], ["\n    ", "\n    fragment CoreCartItemFields on CartItem {\n        uuid\n        options\n        quantity\n        detail\n        menuItem {\n            ...CoreMenuItemFields\n        }\n    }\n"])), CORE_MENU_ITEM_FIELDS);
export var CORE_CART_FIELDS = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", "\n    ", "\n    fragment CoreCartFields on Cart {\n        uuid\n        currency\n        cartItems {\n            ...CoreCartItemFields\n        }\n        restaurant {\n            ...CoreRestaurantFields\n        }\n    }\n"], ["\n    ", "\n    ", "\n    fragment CoreCartFields on Cart {\n        uuid\n        currency\n        cartItems {\n            ...CoreCartItemFields\n        }\n        restaurant {\n            ...CoreRestaurantFields\n        }\n    }\n"])), CORE_CART_ITEM_FIELDS, CORE_RESTAURANT_FIELDS);
var templateObject_1, templateObject_2;
