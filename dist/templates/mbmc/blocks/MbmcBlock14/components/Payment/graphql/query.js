var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var GET_PAYMENT_METHODS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GqlGetPaymentMethods($service_uuid: ID!) {\n    getPaymentMethods(service_uuid: $service_uuid) {\n      type\n      config\n      instruction\n    }\n  }\n"], ["\n  query GqlGetPaymentMethods($service_uuid: ID!) {\n    getPaymentMethods(service_uuid: $service_uuid) {\n      type\n      config\n      instruction\n    }\n  }\n"])));
var templateObject_1;
