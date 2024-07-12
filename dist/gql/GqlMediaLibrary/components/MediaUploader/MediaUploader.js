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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import clx from "classnames";
import { Dialog, Button } from "../../../../core";
import { FaTimes } from "react-icons/fa";
import { useMediaUploaderStyles } from "./styles";
import { createMediaUpload, useDisplayImages } from "../../../GqlMediaLibrary/hooks";
import { parseImageCropperValue } from "../../../GqlImageCropper/helpers";
var MediaUploader = function (_a) {
    var open = _a.open, onChange = _a.onChange, handleClose = _a.handleClose, mediaFiles = _a.mediaFiles, config = _a.config, name = _a.name;
    var classes = useMediaUploaderStyles();
    var _b = __read(useState(false), 2), loading = _b[0], setLoading = _b[1];
    var handleDisplayImages = useDisplayImages();
    var handleMediaUpload = createMediaUpload();
    var handleUpload = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, i, _a, file, value, newImage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoading(true);
                    result = [];
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < mediaFiles.length)) return [3 /*break*/, 4];
                    _a = mediaFiles[i], file = _a.file, value = __rest(_a, ["file"]);
                    return [4 /*yield*/, handleGenerate(parseImageCropperValue(value), file)];
                case 2:
                    newImage = _b.sent();
                    result.push(newImage);
                    _b.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: result });
                    setLoading(false);
                    handleClose === null || handleClose === void 0 ? void 0 : handleClose("cropper");
                    return [2 /*return*/];
            }
        });
    }); };
    var handleMediaAdd = function (fileMedia, variables) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleMediaUpload(config.client, config.upload.name, __assign({ library_uuid: config.query.variables.library_uuid, image: fileMedia }, variables))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    }); };
    var handleGenerate = function (value, fileMedia) { return __awaiter(void 0, void 0, void 0, function () {
        var generatedValue, new_variables, imageResponse, image_data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    generatedValue = JSON.parse(JSON.stringify(__assign({}, value)));
                    new_variables = {
                        title: generatedValue.name,
                        caption: generatedValue.caption,
                        alternative_text: generatedValue.alternative_text,
                        metadata: (generatedValue === null || generatedValue === void 0 ? void 0 : generatedValue.description)
                            ? { description: generatedValue.description }
                            : undefined,
                        image: fileMedia,
                    };
                    return [4 /*yield*/, handleMediaAdd(fileMedia, new_variables)];
                case 1:
                    imageResponse = _a.sent();
                    image_data = __assign(__assign({}, generatedValue), { src: imageResponse === null || imageResponse === void 0 ? void 0 : imageResponse.url, original: imageResponse === null || imageResponse === void 0 ? void 0 : imageResponse.url, url: imageResponse.url });
                    return [2 /*return*/, image_data];
            }
        });
    }); };
    return (_jsx(Dialog, __assign({ open: open, handleClose: function () {
            handleClose("cropper");
        } }, { children: _jsxs("div", __assign({ className: classes.mediaUploader }, { children: [_jsx("div", __assign({ className: classes.mediaUploaderHeadingContainer }, { children: _jsxs("div", __assign({ className: classes.mediaUploaderHeading }, { children: [_jsx("p", __assign({ className: classes.mediaUploaderTitle }, { children: "Upload Images" })), _jsx(FaTimes, { className: classes.mediaUploaderIcon, onClick: function () {
                                    handleClose("cropper");
                                } })] })) })), _jsx("div", __assign({ className: classes.mediaUploaderComponentsContainer }, { children: _jsx("div", __assign({ className: clx(classes.dialogueView) }, { children: _jsx("div", __assign({ className: clx(classes.collection, classes.uploadViewWidth) }, { children: handleDisplayImages(mediaFiles.map(function (mediaFile, index) { return ({
                                __typename: "Image",
                                id: "id_".concat(index),
                                url: mediaFile.src,
                                title: mediaFile.name,
                                caption: mediaFile.caption,
                                alternative_text: mediaFile.alternative_text,
                                created_at: new Date().toISOString(),
                                uuid: "uuid_".concat(index),
                                library_uuid: "library_uuid_".concat(index),
                            }); }), function () { }, function () { }, false, 1) })) })) })), _jsx("div", __assign({ className: classes.mediaUploaderButtonContainer }, { children: _jsx("div", __assign({ className: classes.mediaUploaderButton }, { children: _jsxs(Button, __assign({ className: clx(classes.btn), onClick: handleUpload, isLoading: loading }, { children: ["Upload ", mediaFiles.length, " Images"] })) })) }))] })) })));
};
export default MediaUploader;
