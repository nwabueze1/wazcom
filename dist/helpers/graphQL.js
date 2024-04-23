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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
            headers: __assign({}, headers),
        };
    });
    return new ApolloClient({
        link: from([authLink, httpLink]),
        cache: new InMemoryCache(),
        connectToDevTools: true,
    });
};
export var GETBLOGCATEGORIES = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GqlGetBlogCategories($blog_uuid: ID) {\n    GETBLOGCATEGORIES(input: { blog_uuid: $blog_uuid, all: true }) {\n      data {\n        id\n        name\n      }\n    }\n  }\n"], ["\n  query GqlGetBlogCategories($blog_uuid: ID) {\n    GETBLOGCATEGORIES(input: { blog_uuid: $blog_uuid, all: true }) {\n      data {\n        id\n        name\n      }\n    }\n  }\n"])));
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
export var CORE_IMAGE_FIELDS = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fragment CoreImageFields on Image {\n    title\n    uuid\n    url\n    caption\n    alternative_text\n    created_at\n    updated_at\n  }\n"], ["\n  fragment CoreImageFields on Image {\n    title\n    uuid\n    url\n    caption\n    alternative_text\n    created_at\n    updated_at\n  }\n"])));
export var GET_IMAGES = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  query GqlGetImages($library_uuid: String!, $page: Int, $count: Int) {\n    getImagesByLibraryUuid(input: { library_uuid: $library_uuid, page: $page, count: $count }) {\n      images {\n        ...CoreImageFields\n      }\n      paginatorInfo {\n        currentPage\n        lastPage\n      }\n    }\n  }\n"], ["\n  ", "\n  query GqlGetImages($library_uuid: String!, $page: Int, $count: Int) {\n    getImagesByLibraryUuid(input: { library_uuid: $library_uuid, page: $page, count: $count }) {\n      images {\n        ...CoreImageFields\n      }\n      paginatorInfo {\n        currentPage\n        lastPage\n      }\n    }\n  }\n"])), CORE_IMAGE_FIELDS);
export var GET_S3_IMAGES = gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  query getS3Images($count: Int, $startAfter: String) {\n    getS3Images(count: $count, startAfter: $startAfter) {\n      id\n      title\n      url\n    }\n  }\n"], ["\n  query getS3Images($count: Int, $startAfter: String) {\n    getS3Images(count: $count, startAfter: $startAfter) {\n      id\n      title\n      url\n    }\n  }\n"])));
export var UPLOAD_IMAGE = gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  mutation uploadImage($input: ImageUploadInput!) {\n    uploadImage(input: $input) {\n      id\n      title\n      alternative_text\n      caption\n      url\n      created_at\n    }\n  }\n"], ["\n  mutation uploadImage($input: ImageUploadInput!) {\n    uploadImage(input: $input) {\n      id\n      title\n      alternative_text\n      caption\n      url\n      created_at\n    }\n  }\n"])));
export var UPDATE_IMAGE = gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  mutation UpdateImage(\n    $id: ID!\n    $title: String\n    $caption: String\n    $alternative_text: String\n    $url: String\n  ) {\n    updateImage(\n      id: $id\n      title: $title\n      caption: $caption\n      alternative_text: $alternative_text\n      url: $url\n    ) {\n      id\n      title\n      alternative_text\n      caption\n      url\n      created_at\n    }\n  }\n"], ["\n  mutation UpdateImage(\n    $id: ID!\n    $title: String\n    $caption: String\n    $alternative_text: String\n    $url: String\n  ) {\n    updateImage(\n      id: $id\n      title: $title\n      caption: $caption\n      alternative_text: $alternative_text\n      url: $url\n    ) {\n      id\n      title\n      alternative_text\n      caption\n      url\n      created_at\n    }\n  }\n"])));
export var DELETE_IMAGE = gql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  mutation deleteImage($id: ID!) {\n    deleteImage(id: $id) {\n      id\n      url\n      created_at\n    }\n  }\n"], ["\n  mutation deleteImage($id: ID!) {\n    deleteImage(id: $id) {\n      id\n      url\n      created_at\n    }\n  }\n"])));
export var GET_BLOG_POSTS = gql(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  query GqlGetBlogPosts(\n    $blog_uuid: ID\n    $first: Int\n    $page: Int\n    $search: String\n    $sort: [SortInput]\n    $filter: [FilterInput]\n  ) {\n    getPostsByBlogUuid(\n      input: {\n        blog_uuid: $blog_uuid\n        first: $first\n        page: $page\n        search: $search\n        sort: $sort\n        filter: $filter\n      }\n    ) {\n      data {\n        uuid\n        title\n        slug\n        status\n        categories {\n          name\n          uuid\n        }\n        author {\n          name\n        }\n        published_at\n        updated_at\n      }\n      paginatorInfo {\n        currentPage\n        lastPage\n      }\n    }\n  }\n"], ["\n  query GqlGetBlogPosts(\n    $blog_uuid: ID\n    $first: Int\n    $page: Int\n    $search: String\n    $sort: [SortInput]\n    $filter: [FilterInput]\n  ) {\n    getPostsByBlogUuid(\n      input: {\n        blog_uuid: $blog_uuid\n        first: $first\n        page: $page\n        search: $search\n        sort: $sort\n        filter: $filter\n      }\n    ) {\n      data {\n        uuid\n        title\n        slug\n        status\n        categories {\n          name\n          uuid\n        }\n        author {\n          name\n        }\n        published_at\n        updated_at\n      }\n      paginatorInfo {\n        currentPage\n        lastPage\n      }\n    }\n  }\n"])));
export var DOWNLOAD_IMAGE = gql(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  mutation downloadImage($platform: String!, $url: String!) {\n    downloadImage(input: { platform: $platform, url: $url })\n  }\n"], ["\n  mutation downloadImage($platform: String!, $url: String!) {\n    downloadImage(input: { platform: $platform, url: $url })\n  }\n"])));
export var CONNECT_INSTAGRAM_ACCOUNT = gql(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  mutation connectInstagramAccount($library_uuid: String!) {\n    connectInstagramAccount(library_uuid: $library_uuid) {\n      redirect_url\n    }\n  }\n"], ["\n  mutation connectInstagramAccount($library_uuid: String!) {\n    connectInstagramAccount(library_uuid: $library_uuid) {\n      redirect_url\n    }\n  }\n"])));
export var INTEGRATE_INSTAGRAM_ACCOUNT = gql(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  mutation integrateInstagramAccount($code: String!, $library_uuid: String!) {\n    integrateInstagramAccount(input: { code: $code, library_uuid: $library_uuid })\n  }\n"], ["\n  mutation integrateInstagramAccount($code: String!, $library_uuid: String!) {\n    integrateInstagramAccount(input: { code: $code, library_uuid: $library_uuid })\n  }\n"])));
export var GET_UNSPLASH_IMAGES = gql(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  query GqlGetUnsplashImages($search: String, $page: Int, $limit: Int) {\n    getUnsplashImages(input: { search: $search, page: $page, limit: $limit }) {\n      images {\n        url\n        photographer\n        download_url\n      }\n    }\n  }\n"], ["\n  query GqlGetUnsplashImages($search: String, $page: Int, $limit: Int) {\n    getUnsplashImages(input: { search: $search, page: $page, limit: $limit }) {\n      images {\n        url\n        photographer\n        download_url\n      }\n    }\n  }\n"])));
export var GET_INSTAGRAM_IMAGES = gql(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  query GqlGetInstagramImages($library_uuid: String!) {\n    getInstagramImages(library_uuid: $library_uuid)\n  }\n"], ["\n  query GqlGetInstagramImages($library_uuid: String!) {\n    getInstagramImages(library_uuid: $library_uuid)\n  }\n"])));
export var GET_PEXELS_IMAGES = gql(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  query GqlGetPexelsImages($search: String, $page: Int, $limit: Int) {\n    getPexelsImages(input: { search: $search, page: $page, limit: $limit }) {\n      images {\n        url\n        photographer\n      }\n    }\n  }\n"], ["\n  query GqlGetPexelsImages($search: String, $page: Int, $limit: Int) {\n    getPexelsImages(input: { search: $search, page: $page, limit: $limit }) {\n      images {\n        url\n        photographer\n      }\n    }\n  }\n"])));
export var CORE_TAG_FIELDS = gql(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  fragment CoreTagFields on BlogTag {\n    name\n    uuid\n  }\n"], ["\n  fragment CoreTagFields on BlogTag {\n    name\n    uuid\n  }\n"])));
export var GET_BLOG_TAGS = gql(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  ", "\n  query GqlGetTags(\n    $blog_uuid: ID\n    $first: Int\n    $page: Int\n    $search: String\n    $sort: [SortInput]\n    $filter: [FilterInput]\n  ) {\n    getTagsByBlogUuid(\n      input: {\n        blog_uuid: $blog_uuid\n        page: $page\n        first: $first\n        search: $search\n        sort: $sort\n        filter: $filter\n      }\n    ) {\n      data {\n        ...CoreTagFields\n      }\n    }\n  }\n"], ["\n  ", "\n  query GqlGetTags(\n    $blog_uuid: ID\n    $first: Int\n    $page: Int\n    $search: String\n    $sort: [SortInput]\n    $filter: [FilterInput]\n  ) {\n    getTagsByBlogUuid(\n      input: {\n        blog_uuid: $blog_uuid\n        page: $page\n        first: $first\n        search: $search\n        sort: $sort\n        filter: $filter\n      }\n    ) {\n      data {\n        ...CoreTagFields\n      }\n    }\n  }\n"])), CORE_TAG_FIELDS);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
