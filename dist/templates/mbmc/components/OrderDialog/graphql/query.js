var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var GET_CART = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GqlCart($uuid: ID!) {\n        cart(uuid: $uuid) {\n            currency\n            cartItems {\n                options\n                quantity\n                uuid\n                detail\n            }\n        }\n    }\n"], ["\n    query GqlCart($uuid: ID!) {\n        cart(uuid: $uuid) {\n            currency\n            cartItems {\n                options\n                quantity\n                uuid\n                detail\n            }\n        }\n    }\n"])));
var templateObject_1;
