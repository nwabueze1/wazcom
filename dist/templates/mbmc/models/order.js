var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_ORDER_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment CoreOrderFields on Order {\n        uuid\n        currency_code\n        grand_total\n        payment_type\n        order_type\n    }\n"], ["\n    fragment CoreOrderFields on Order {\n        uuid\n        currency_code\n        grand_total\n        payment_type\n        order_type\n    }\n"])));
var templateObject_1;
