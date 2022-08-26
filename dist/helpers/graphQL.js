var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
export var createApolloClient = function (uri) {
    var httpLink = createUploadLink({ uri: uri });
    var authLink = setContext(function (_, _a) {
        var headers = _a.headers;
        return {
            headers: __assign(__assign({}, headers), { authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NjU4NWQwMi0yYmFlLTQyNWEtYjk3Mi04OGYyYzZiMjQwNTciLCJqdGkiOiIzZDI1MjJmZGQ0M2VmNmRhMmYwYjJkNmZhNWNmOTgyYTFiYjBjZTM5NjJkOTQ1ODBjOTJiMWE0ZDc0ZmZkZjlkMjFkZDA0M2M2N2E4OWExNyIsImlhdCI6MTY2MTQzMjQ0NS44MzkxOTksIm5iZiI6MTY2MTQzMjQ0NS44MzkyMDQsImV4cCI6MTY2MTUxODg0NS44MzE5MzMsInN1YiI6IjY1Iiwic2NvcGVzIjpbXX0.ZL2RXQ_bYXz7whpY-m9uax8hqajkOmH-6IFWs9LHoyiDqExrHqnFz5E-WA5JjC2jBfZduT9wXpJwb-XLuh2bcs-1G-BCtahcMI6L6Q6ZaJxI7Ib3nXg9zaM7kfjjQlp-wTXjtvY8y22a4PfNF-w6QsanAO0fRDN_PxTsJ0FfKwEcrYjE3VTQOQRPnEyCRNkG8E8EGUL1-S-Q7d3Q4EHSE5ADJLHbSDB9VipxYRH6x52eVJhIBePLkqBjzvwC4mngCslHa8uQm-R8qNOtMkvrJxD24aDB9kFDT-eAl4dGITUa43Mh5yUqp1z7eQWCby58mCjOcxgrsGmvHTydxK6aXrhlb6mBxNqrl7JSUxRifqfbZnINwb9f6VnDSx8CuUmlxdaJAjLT47tFQt0EStZZC9-JzW8CFq0jzVZAmcNidU8SBq8dQG2xmYmlt89Ine5wcgvXMyXynzJrftQnhINFFxVOb3wm5oyYYD_p-uk9rsC0H7Y99dyPieIoY2C41ZUQPWEKghWFGPWRmI_ssgX2hw1XBaMGKc6Fd7YtlhPYrj0G8AgDKLL6dfaeX0XDW26Aruprxq_q0RIU2lJ6JC3CV-rn38HNvXAUc9_6gpUbhYF-X6RtXT_vhOMgxSe1EK4Q_BOynrYeYyvwLFkWz3Go_Fx0He7SYzDwX6N1SoZD570" }),
        };
    });
    return new ApolloClient({
        link: from([authLink, httpLink]),
        cache: new InMemoryCache(),
        connectToDevTools: true,
    });
};
export var GETBLOGCATEGORIES = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GqlGetBlogCategories($blog_id: ID!) {\n    categoriesByBlogID(blog_id: $blog_id) {\n      id\n      name\n    }\n  }\n"], ["\n  query GqlGetBlogCategories($blog_id: ID!) {\n    categoriesByBlogID(blog_id: $blog_id) {\n      id\n      name\n    }\n  }\n"])));
export var CREATENEWCATEGORY = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation CreateCategory($name: String!, $blog_id: ID!, $slug: String!) {\n    createCategory(name: $name, blog_id: $blog_id, slug: $slug) {\n      id\n      name\n    }\n  }\n"], ["\n  mutation CreateCategory($name: String!, $blog_id: ID!, $slug: String!) {\n    createCategory(name: $name, blog_id: $blog_id, slug: $slug) {\n      id\n      name\n    }\n  }\n"])));
export var createNewCategory = function (category) { return __awaiter(void 0, void 0, void 0, function () {
    var client, response, _a, id, name;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                client = createApolloClient("https://muse.sytbuilder.com/graphql");
                return [4 /*yield*/, client.mutate({
                        mutation: CREATENEWCATEGORY,
                        variables: {
                            name: category,
                            blog_id: 34,
                            slug: category.toLowerCase().replace(/ /g, "-"),
                        },
                    })];
            case 1:
                response = _b.sent();
                _a = response.data.createCategory, id = _a.id, name = _a.name;
                return [2 /*return*/, { label: name, value: id, status: true }];
        }
    });
}); };
export var GET_IMAGES = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query GetImages($count: Int!, $page: Int!) {\n    images(count: $count, page: $page) {\n      images {\n        id\n        title\n        alternative_text\n        caption\n        url\n        created_at\n      }\n      paginatorInfo {\n        currentPage\n        lastPage\n      }\n    }\n  }\n"], ["\n  query GetImages($count: Int!, $page: Int!) {\n    images(count: $count, page: $page) {\n      images {\n        id\n        title\n        alternative_text\n        caption\n        url\n        created_at\n      }\n      paginatorInfo {\n        currentPage\n        lastPage\n      }\n    }\n  }\n"])));
export var GET_S3_IMAGES = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  query getS3Images($count: Int, $startAfter: String) {\n    getS3Images(count: $count, startAfter: $startAfter) {\n      id\n      title\n      url\n    }\n  }\n"], ["\n  query getS3Images($count: Int, $startAfter: String) {\n    getS3Images(count: $count, startAfter: $startAfter) {\n      id\n      title\n      url\n    }\n  }\n"])));
export var UPLOAD_IMAGE = gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  mutation uploadImage($input: ImageUploadInput!) {\n    uploadImage(input: $input) {\n      id\n      title\n      alternative_text\n      caption\n      url\n      created_at\n    }\n  }\n"], ["\n  mutation uploadImage($input: ImageUploadInput!) {\n    uploadImage(input: $input) {\n      id\n      title\n      alternative_text\n      caption\n      url\n      created_at\n    }\n  }\n"])));
export var UPDATE_IMAGE = gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  mutation UpdateImage(\n    $id: ID!\n    $title: String\n    $caption: String\n    $alternative_text: String\n    $url: String\n  ) {\n    updateImage(\n      id: $id\n      title: $title\n      caption: $caption\n      alternative_text: $alternative_text\n      url: $url\n    ) {\n      id\n      title\n      alternative_text\n      caption\n      url\n      created_at\n    }\n  }\n"], ["\n  mutation UpdateImage(\n    $id: ID!\n    $title: String\n    $caption: String\n    $alternative_text: String\n    $url: String\n  ) {\n    updateImage(\n      id: $id\n      title: $title\n      caption: $caption\n      alternative_text: $alternative_text\n      url: $url\n    ) {\n      id\n      title\n      alternative_text\n      caption\n      url\n      created_at\n    }\n  }\n"])));
export var DELETE_IMAGE = gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  mutation deleteImage($id: ID!) {\n    deleteImage(id: $id) {\n      id\n      url\n      created_at\n    }\n  }\n"], ["\n  mutation deleteImage($id: ID!) {\n    deleteImage(id: $id) {\n      id\n      url\n      created_at\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
