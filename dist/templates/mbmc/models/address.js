var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from '@apollo/client';
export var CORE_ADDRESS_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment CoreAddressFields on Address {\n        phone\n        addressline1\n        city\n        state\n        country\n        postcode\n    }\n"], ["\n    fragment CoreAddressFields on Address {\n        phone\n        addressline1\n        city\n        state\n        country\n        postcode\n    }\n"])));
var templateObject_1;
