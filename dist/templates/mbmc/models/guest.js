var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var CORE_GUEST_FIELDS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment CoreGuestFields on Guest {\n        uuid\n        firstname\n        lastname\n        email\n    }\n"], ["\n    fragment CoreGuestFields on Guest {\n        uuid\n        firstname\n        lastname\n        email\n    }\n"])));
var templateObject_1;
