var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var Create_Response = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation CreateResponse($form_uuid: ID!, $response: Mixed!) {\n    createResponse(input: { form_uuid: $form_uuid, response: $response }) {\n      submission_text\n      uuid\n    }\n  }\n"], ["\n  mutation CreateResponse($form_uuid: ID!, $response: Mixed!) {\n    createResponse(input: { form_uuid: $form_uuid, response: $response }) {\n      submission_text\n      uuid\n    }\n  }\n"])));
var templateObject_1;
