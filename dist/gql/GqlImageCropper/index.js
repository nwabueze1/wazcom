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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Dialog, Button } from "../../core";
import { useImageCropperStyles } from "./styles";
import { FaTimes } from "react-icons/fa";
import clx from "classnames";
import { ImageProperty } from "./components/ImageProperty/ImageProperty";
import { CropAndSize } from "./components/CropAndSize/CropAndSize";
import { CropImage } from "./components/CropImage";
import { generateModifiedSrc, parseImageCropperValue, tabs } from "./helpers";
import { createMediaUpload, updateMediaUpload } from "../GqlMediaLibrary/hooks";
import { isEqual } from "lodash";
export var GqlImageCropper = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var open = _a.open, initialValue = _a.value, onChange = _a.onChange, handleClose = _a.handleClose, screenConfig = _a.screenConfig, fileMedia = _a.fileMedia, config = _a.config, name = _a.name, imageServiceDomain = _a.imageServiceDomain;
    var classes = useImageCropperStyles();
    var _h = __read(useState(0), 2), activeTab = _h[0], setActiveTab = _h[1];
    var _j = __read(useState({
        width: (_b = initialValue["width"]) !== null && _b !== void 0 ? _b : 0,
        height: (_c = initialValue["height"]) !== null && _c !== void 0 ? _c : 0,
    }), 2), dimensions = _j[0], setDimensions = _j[1];
    var _k = __read(useState(parseImageCropperValue(initialValue)), 2), value = _k[0], setValue = _k[1];
    var _l = __read(useState(false), 2), loading = _l[0], setLoading = _l[1];
    var handleMediaUpload = createMediaUpload();
    var handleMediaUpdateHelper = updateMediaUpload();
    var setCoordinates = function (coordinates) {
        var _a;
        var typedCoordinates = value["coordinates"];
        var newValue = __assign(__assign({}, value), { coordinates: __assign(__assign({}, typedCoordinates), (_a = {}, _a[value.screenType] = __assign(__assign({}, typedCoordinates[value.screenType]), coordinates), _a)) });
        setValue(newValue);
    };
    var handleValueChange = function (field, result) {
        var _a;
        var newValue = __assign(__assign({}, value), (_a = {}, _a[field] = result, _a));
        setValue(newValue);
    };
    var handleMediaAdd = function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, handleMediaUpload(config.client, config.upload.name, __assign({ library_uuid: config.query.variables.library_uuid, image: fileMedia }, variables))];
                case 1:
                    response = _a.sent();
                    setLoading(false);
                    return [2 /*return*/, response];
            }
        });
    }); };
    var handleMediaUpdate = function (variables) { return __awaiter(void 0, void 0, void 0, function () {
        var parsedVariables;
        return __generator(this, function (_a) {
            parsedVariables = JSON.parse(JSON.stringify(variables));
            if (parsedVariables === null || parsedVariables === void 0 ? void 0 : parsedVariables.description) {
                parsedVariables["metadata"] = {
                    description: parsedVariables === null || parsedVariables === void 0 ? void 0 : parsedVariables.description,
                };
                parsedVariables === null || parsedVariables === void 0 ? true : delete parsedVariables.description;
            }
            handleMediaUpdateHelper(config.client, config.update.name, parsedVariables);
            return [2 /*return*/];
        });
    }); };
    var handleGenerate = function () { return __awaiter(void 0, void 0, void 0, function () {
        var generatedCoordinates, typedCoordinates, generatedValue, new_variables, imageUrl, imageResponse, image_data, initialImageInfo, currentImageInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    generatedCoordinates = {};
                    typedCoordinates = value["coordinates"];
                    Object.keys(typedCoordinates).forEach(function (key) {
                        var coordinates = typedCoordinates[key];
                        if (!coordinates["width"] === undefined ||
                            !coordinates["height"] === undefined ||
                            !coordinates["left"] === undefined ||
                            !coordinates["top"] === undefined)
                            return;
                        generatedCoordinates[key] = {
                            left: Number((coordinates["left"] / dimensions.width).toFixed(2)),
                            top: Number((coordinates["top"] / dimensions.width).toFixed(2)),
                            right: Number(((coordinates["left"] + coordinates["width"]) / dimensions.width).toFixed(2)),
                            bottom: Number(((coordinates["top"] + coordinates["height"]) / dimensions.width).toFixed(2)),
                        };
                    });
                    generatedValue = JSON.parse(JSON.stringify(__assign(__assign(__assign({}, value), dimensions), { coordinates: generatedCoordinates })));
                    new_variables = {
                        uuid: generatedValue.uuid,
                        title: generatedValue.name,
                        caption: generatedValue.caption,
                        alternative_text: generatedValue.alternative_text,
                        metadata: (generatedValue === null || generatedValue === void 0 ? void 0 : generatedValue.description)
                            ? { description: generatedValue.description }
                            : undefined,
                        image: fileMedia,
                    };
                    imageUrl = value === null || value === void 0 ? void 0 : value.src;
                    if (!fileMedia) return [3 /*break*/, 2];
                    return [4 /*yield*/, handleMediaAdd(new_variables)];
                case 1:
                    imageResponse = _a.sent();
                    imageUrl = imageResponse === null || imageResponse === void 0 ? void 0 : imageResponse.url;
                    _a.label = 2;
                case 2:
                    image_data = __assign(__assign({}, generatedValue), { src: generateModifiedSrc(imageUrl, dimensions.width, generatedValue.coordinates, imageServiceDomain), original: imageUrl });
                    if (!fileMedia && (image_data === null || image_data === void 0 ? void 0 : image_data.uuid)) {
                        initialImageInfo = {
                            title: initialValue === null || initialValue === void 0 ? void 0 : initialValue.name,
                            alternative_text: initialValue === null || initialValue === void 0 ? void 0 : initialValue.alternative_text,
                            caption: initialValue === null || initialValue === void 0 ? void 0 : initialValue.caption,
                            description: initialValue === null || initialValue === void 0 ? void 0 : initialValue.description,
                        };
                        currentImageInfo = {
                            title: image_data === null || image_data === void 0 ? void 0 : image_data.name,
                            alternative_text: image_data === null || image_data === void 0 ? void 0 : image_data.alternative_text,
                            caption: image_data === null || image_data === void 0 ? void 0 : image_data.caption,
                            description: image_data === null || image_data === void 0 ? void 0 : image_data.description,
                        };
                        if (!isEqual(initialImageInfo, currentImageInfo)) {
                            handleMediaUpdate(__assign(__assign({}, currentImageInfo), { uuid: image_data === null || image_data === void 0 ? void 0 : image_data.uuid }));
                        }
                    }
                    onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: image_data });
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(_Fragment, { children: _jsx(Dialog, __assign({ open: open, handleClose: handleClose }, { children: _jsxs("div", __assign({ className: classes.imageDialog }, { children: [_jsx("div", __assign({ className: classes.imageDialogHeadingContainer }, { children: _jsxs("div", __assign({ className: classes.imageDialogHeading }, { children: [_jsx("p", __assign({ className: classes.imageDialogTitle }, { children: "Edit Image" })), _jsx(FaTimes, { className: classes.imageDialogIcon, onClick: handleClose })] })) })), _jsxs("div", __assign({ className: classes.imageDialogComponentsContainer }, { children: [_jsx("div", __assign({ className: classes.imageDialogCropSection }, { children: _jsx(CropImage, { src: value.src, screenType: value.screenType, coordinates: value.coordinates[value.screenType], setCoordinates: setCoordinates, setDimensions: setDimensions, isEdit: Object.keys(initialValue).length > 1, activeScreenConfig: screenConfig === null || screenConfig === void 0 ? void 0 : screenConfig[value.screenType] }) })), _jsxs("div", __assign({ className: classes.imageDialogConfigSection }, { children: [_jsx("div", __assign({ className: classes.configTabs }, { children: tabs.map(function (tab, index) { return (_jsx(_Fragment, { children: _jsx("div", __assign({ className: clx(classes.configTab, activeTab === index && classes.activeConfigTab), onClick: function () {
                                                    setActiveTab(index);
                                                } }, { children: _jsx("p", __assign({ className: clx(classes.tabName, activeTab === index && classes.activeTabName) }, { children: tab })) }), index) })); }) })), activeTab === 0 && (_jsx(ImageProperty, { form: {
                                            name: (_d = value.name) !== null && _d !== void 0 ? _d : "",
                                            description: (_e = value === null || value === void 0 ? void 0 : value.description) !== null && _e !== void 0 ? _e : "",
                                            alternative_text: (_f = value === null || value === void 0 ? void 0 : value.alternative_text) !== null && _f !== void 0 ? _f : "",
                                            caption: (_g = value === null || value === void 0 ? void 0 : value.caption) !== null && _g !== void 0 ? _g : "",
                                        }, handleChange: handleValueChange })), activeTab === 1 && (_jsx(CropAndSize, { screenType: value.screenType, handleChange: handleValueChange })), _jsx(Button, __assign({ onClick: handleGenerate, className: clx(classes.btn), isLoading: loading }, { children: "Apply Changes" }))] }))] }))] })) })) }));
};
