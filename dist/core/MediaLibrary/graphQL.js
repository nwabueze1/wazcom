var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { gql } from "@apollo/client";
export var GET_S3_IMAGES = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getS3Images($count: Int, $startAfter: String) {\n    getS3Images(count: $count, startAfter: $startAfter) {\n      name\n      path\n    }\n  }\n"], ["\n  query getS3Images($count: Int, $startAfter: String) {\n    getS3Images(count: $count, startAfter: $startAfter) {\n      name\n      path\n    }\n  }\n"])));
export var UPLOAD_IMAGE = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation uploadImage($image: Upload!, $config: AwsConfig) {\n    uploadImage(config: $config, image: $image) {\n      name\n      url\n    }\n  }\n"], ["\n  mutation uploadImage($image: Upload!, $config: AwsConfig) {\n    uploadImage(config: $config, image: $image) {\n      name\n      url\n    }\n  }\n"])));
var templateObject_1, templateObject_2;
