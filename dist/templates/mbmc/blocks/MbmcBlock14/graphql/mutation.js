var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
import { CORE_CART_ITEM_FIELDS } from "../../../models";
export var UPDATE_CART_ITEM = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  mutation gqlUpdateCartItem($uuid: ID, $quantity: Int!, $options: String) {\n    updateCartItem(input: { uuid: $uuid, quantity: $quantity, options: $options }) {\n      ...CoreCartItemFields\n    }\n  }\n"], ["\n  ", "\n  mutation gqlUpdateCartItem($uuid: ID, $quantity: Int!, $options: String) {\n    updateCartItem(input: { uuid: $uuid, quantity: $quantity, options: $options }) {\n      ...CoreCartItemFields\n    }\n  }\n"])), CORE_CART_ITEM_FIELDS);
var templateObject_1;
