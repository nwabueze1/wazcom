var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var UPLOAD_FILE = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  mutation gqlUploadFile($file: Upload!, $form_uuid: ID!) {\n    uploadFile(input: { file: $file, form_uuid: $form_uuid }) {\n      url\n    }\n  }\n"], ["\n  mutation gqlUploadFile($file: Upload!, $form_uuid: ID!) {\n    uploadFile(input: { file: $file, form_uuid: $form_uuid }) {\n      url\n    }\n  }\n"])));
var templateObject_1;
