var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
import { CORE_ORDER_FIELDS } from "../../../../../models";
export var CREATE_ORDER = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    mutation GqlCreateOrder($currency_code: String, $grand_total: Float, $address_uuid: ID, $payment_type: PaymentType, $cart_uuid: ID) {\n        createOrder(currency_code: $currency_code, grand_total: $grand_total, address_uuid: $address_uuid, payment_type: $payment_type, cart_uuid: $cart_uuid) {\n            ...CoreOrderFields\n        }\n    }\n"], ["\n    ", "\n    mutation GqlCreateOrder($currency_code: String, $grand_total: Float, $address_uuid: ID, $payment_type: PaymentType, $cart_uuid: ID) {\n        createOrder(currency_code: $currency_code, grand_total: $grand_total, address_uuid: $address_uuid, payment_type: $payment_type, cart_uuid: $cart_uuid) {\n            ...CoreOrderFields\n        }\n    }\n"])), CORE_ORDER_FIELDS);
var templateObject_1;
