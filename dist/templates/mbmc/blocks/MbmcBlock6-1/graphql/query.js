var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
import { CORE_MENU_FIELDS } from "../../../models";
export var GET_MENU_BY_UUID = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    query GqlGetMenuByUuid($uuid: ID) {\n        getMenu(uuid: $uuid) {\n            ...CoreMenuFields\n        }\n    }\n"], ["\n    ", "\n    query GqlGetMenuByUuid($uuid: ID) {\n        getMenu(uuid: $uuid) {\n            ...CoreMenuFields\n        }\n    }\n"])), CORE_MENU_FIELDS);
var templateObject_1;
