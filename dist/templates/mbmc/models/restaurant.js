var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var CORE_RESTAURANT_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment CoreRestaurantFields on Restaurant {\n    uuid\n    site {\n      uuid\n    }\n    bank_info {\n      currency\n      delivery_fee\n    }\n  }\n"], ["\n  fragment CoreRestaurantFields on Restaurant {\n    uuid\n    site {\n      uuid\n    }\n    bank_info {\n      currency\n      delivery_fee\n    }\n  }\n"])));
var templateObject_1;
