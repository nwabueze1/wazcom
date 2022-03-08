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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grow } from "@mui/material";
import { useMediaLibraryStyles } from "./styles";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import clx from 'classnames';
export var useDisplayImages = function () {
    var classes = useMediaLibraryStyles();
    return function (images, selectImage, handleMediaAction, viewOnly) {
        return split(images, 3).map(function (_, columnIndex) { return (_jsx("div", __assign({ className: classes.column }, { children: _.map(function (theImage, index) {
                return (_jsx(Grow, __assign({ in: true }, { children: _jsxs("div", __assign({ className: clx(classes.thumbnail, viewOnly && classes.thumbnailFixedHeight) }, { children: [_jsx("img", { onClick: function () { return selectImage === null || selectImage === void 0 ? void 0 : selectImage(theImage); }, src: theImage === null || theImage === void 0 ? void 0 : theImage.url, className: classes.image }, void 0), _jsx("div", __assign({ className: classes.thumbnailOverlay }, { children: !viewOnly && (_jsxs("div", __assign({ className: classes.thumbnailActions }, { children: [_jsx("p", __assign({ onClick: function () {
                                                handleMediaAction("edit", theImage);
                                            }, className: classes.thumbnailAction }, { children: _jsx(FaPencilAlt, { className: classes.thumbnailActionIcon }, void 0) }), void 0), _jsx("p", __assign({ onClick: function () {
                                                handleMediaAction("delete", theImage);
                                            }, className: classes.thumbnailAction }, { children: _jsx(IoMdTrash, { className: classes.thumbnailActionIcon }, void 0) }), void 0)] }), void 0)) }), void 0)] }), void 0) }), index));
            }) }), columnIndex)); });
    };
};
export var useFileSelect = function () {
    return function (fileRef) {
        var fileInput = fileRef.current;
        if (fileInput) {
            fileInput.click();
        }
    };
};
export var useMediaUpload = function () {
    return function (client, mutation, variables, setLoading, updateMediaLibrary) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setLoading({ loading: true, mutate: true });
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, client.mutate({
                            mutation: mutation,
                            variables: { input: __assign({}, variables) },
                        })];
                case 2:
                    response = _c.sent();
                    if ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.uploadImage) {
                        updateMediaLibrary((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.uploadImage);
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _c.sent();
                    console.log(error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading({ loading: false, mutate: false });
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
};
export var useUpdateMediaLibrary = function () {
    return function (image, images, setImages, setMediaIndex, type, update) {
        if (type === void 0) { type = "add"; }
        var newImages, index;
        switch (type) {
            case "add":
                newImages = __spreadArray([image], __read(images), false);
                break;
            case "update":
                newImages = __spreadArray([], __read(images), false);
                index = newImages.findIndex(function (img) { return img.id.toString() === image.id.toString(); });
                newImages[index] = __assign(__assign({}, newImages[index]), update);
                break;
            case "delete":
                newImages = images.filter(function (img) { return img.id.toString() !== image.id.toString(); });
                setMediaIndex(Math.random() * 5000);
                break;
            default:
                newImages = images;
        }
        setImages(newImages);
    };
};
export var useOnScroll = function () {
    return function (ref, setMediaIndex) {
        if (ref.current) {
            var _a = ref.current, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
            if (scrollTop + clientHeight === scrollHeight && scrollHeight > 550) {
                setMediaIndex(Math.random() * 5000);
            }
        }
    };
};
export var fetchData = function (client, query, variables) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.query({
                    query: query,
                    fetchPolicy: "network-only",
                    variables: variables,
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var split = function (array, count) {
    var collection = [];
    array.map(function (item, index) {
        var _a;
        var row = (_a = collection[index % count]) !== null && _a !== void 0 ? _a : [];
        collection[index % count] = __spreadArray(__spreadArray([], __read(row), false), [item], false);
    });
    return collection;
};
export var getUniqueImages = function (images) {
    var newImages = __spreadArray([], __read(images), false);
    var imageUrls = __spreadArray([], __read(new Set(images.map(function (image) { return image.url; }))), false);
    newImages = imageUrls.map(function (url) { return newImages.find(function (image) { return image.url === url; }); });
    return newImages;
};
export var mutateMedia = function (client, mutation, media, updateMediaLibrary, variables) { return __awaiter(void 0, void 0, void 0, function () {
    var error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, client.mutate({
                        mutation: mutation,
                        variables: variables ? __assign({}, variables) : { id: media.id },
                    })];
            case 1:
                _a.sent();
                updateMediaLibrary();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
