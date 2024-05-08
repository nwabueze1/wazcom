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
import { parseImageCropperValue, tabs } from "./helpers";
export var GqlImageCropper = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var open = _a.open, initialValue = _a.value, onChange = _a.onChange, handleClose = _a.handleClose, screenConfig = _a.screenConfig;
    var classes = useImageCropperStyles();
    var _h = __read(useState(0), 2), activeTab = _h[0], setActiveTab = _h[1];
    var _j = __read(useState({
        width: (_b = initialValue["width"]) !== null && _b !== void 0 ? _b : 0,
        height: (_c = initialValue["height"]) !== null && _c !== void 0 ? _c : 0,
    }), 2), dimensions = _j[0], setDimensions = _j[1];
    var _k = __read(useState(parseImageCropperValue(initialValue)), 2), value = _k[0], setValue = _k[1];
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
    var handleGenerate = function () {
        var generatedCoordinates = {};
        var typedCoordinates = value["coordinates"];
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
        var generatedValue = JSON.parse(JSON.stringify(__assign(__assign(__assign({}, value), dimensions), { coordinates: generatedCoordinates })));
        generatedValue === null || generatedValue === void 0 ? true : delete generatedValue.screenType;
        generatedValue === null || generatedValue === void 0 ? true : delete generatedValue.url;
        ["name", "description", "alternative_text", "caption"].forEach(function (field) {
            if (!generatedValue[field])
                delete generatedValue[field];
        });
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: "image", value: generatedValue });
    };
    return (_jsx(_Fragment, { children: _jsx(Dialog, __assign({ open: open, handleClose: handleClose }, { children: _jsxs("div", __assign({ className: classes.imageDialog }, { children: [_jsx("div", __assign({ className: classes.imageDialogHeadingContainer }, { children: _jsxs("div", __assign({ className: classes.imageDialogHeading }, { children: [_jsx("p", __assign({ className: classes.imageDialogTitle }, { children: "Edit Image" })), _jsx(FaTimes, { className: classes.imageDialogIcon, onClick: handleClose })] })) })), _jsxs("div", __assign({ className: classes.imageDialogComponentsContainer }, { children: [_jsx("div", __assign({ className: classes.imageDialogCropSection }, { children: _jsx(CropImage, { src: value.src, screenType: value.screenType, coordinates: value.coordinates[value.screenType], setCoordinates: setCoordinates, setDimensions: setDimensions, isEdit: Object.keys(initialValue).length > 1, activeScreenConfig: screenConfig === null || screenConfig === void 0 ? void 0 : screenConfig[value.screenType] }) })), _jsxs("div", __assign({ className: classes.imageDialogConfigSection }, { children: [_jsx("div", __assign({ className: classes.configTabs }, { children: tabs.map(function (tab, index) { return (_jsx(_Fragment, { children: _jsx("div", __assign({ className: clx(classes.configTab, activeTab === index && classes.activeConfigTab), onClick: function () {
                                                    setActiveTab(index);
                                                } }, { children: _jsx("p", __assign({ className: clx(classes.tabName, activeTab === index && classes.activeTabName) }, { children: tab })) }), index) })); }) })), activeTab === 0 && (_jsx(ImageProperty, { form: {
                                            name: (_d = value.name) !== null && _d !== void 0 ? _d : "",
                                            description: (_e = value === null || value === void 0 ? void 0 : value.description) !== null && _e !== void 0 ? _e : "",
                                            alternative_text: (_f = value === null || value === void 0 ? void 0 : value.alternative_text) !== null && _f !== void 0 ? _f : "",
                                            caption: (_g = value === null || value === void 0 ? void 0 : value.caption) !== null && _g !== void 0 ? _g : "",
                                        }, handleChange: handleValueChange })), activeTab === 1 && (_jsx(CropAndSize, { screenType: value.screenType, handleChange: handleValueChange })), _jsx(Button, __assign({ onClick: handleGenerate, className: clx(classes.btn) }, { children: "Apply Changes" }))] }))] }))] })) })) }));
};
