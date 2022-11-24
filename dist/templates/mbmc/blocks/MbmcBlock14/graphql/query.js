var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
import { CORE_CART_FIELDS } from "../../../models";
export var GET_CART_BY_UUID = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    query GqlGetCartByUuid($uuid: ID) {\n        cart(uuid: $uuid) {\n            ...CoreCartFields\n        }\n    }\n"], ["\n    ", "\n    query GqlGetCartByUuid($uuid: ID) {\n        cart(uuid: $uuid) {\n            ...CoreCartFields\n        }\n    }\n"])), CORE_CART_FIELDS);
var templateObject_1;
