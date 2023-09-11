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
import { useRef, useState } from "react";
import { useImageSelectorInputStyles } from "./useImageSelectorInputStyles";
import clx from "classnames";
import { Button } from "../../core";
import { validateFileBySize } from "./ValidateFileBySize";
export var ImageSelectorInput = function (_a) {
    var isError = _a.isError, label = _a.label, value = _a.value, onChange = _a.onChange, helperText = _a.helperText, min_size_kb = _a.min_size_kb, max_size_mb = _a.max_size_mb, name = _a.name;
    var classes = useImageSelectorInputStyles();
    var fileInputRef = useRef(null);
    var _b = __read(useState(undefined), 2), fileError = _b[0], setFileError = _b[1];
    var _c = __read(useState(function () {
        if (!value)
            return "";
        return URL.createObjectURL(value);
    }), 2), fileSource = _c[0], setFileSource = _c[1];
    var hasSelectedImage = fileSource.length > 0;
    var handlePickImage = function () {
        var _a;
        (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var handleSelectImage = function (e) {
        var _a;
        var selectedFile = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!selectedFile)
            return;
        var _b = validateFileBySize({ file: selectedFile, min_size_kb: min_size_kb, max_size_mb: max_size_mb }), valid = _b.valid, error = _b.error;
        if (!valid) {
            setFileError(error);
            return;
        }
        setFileError(undefined);
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: selectedFile });
        var imageUrl = URL.createObjectURL(selectedFile);
        setFileSource(imageUrl);
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [label && _jsx("label", __assign({ className: classes.label }, { children: label })), _jsxs("article", __assign({ className: clx(classes.container, hasSelectedImage && classes.selectedImageContainer, (isError || fileError) && classes.errorContainer) }, { children: [!hasSelectedImage ? (_jsx("button", __assign({ className: classes.selectButton, onClick: handlePickImage }, { children: "Select Image" }))) : (_jsx("div", __assign({ className: classes.selectedImageContainer }, { children: _jsx("img", { src: fileSource, alt: "selected image", className: classes.selectedImage }) }))), _jsx("input", { type: "file", accept: ".png,.jpeg,.svg,.webp,.gif,.tiff,.x-icon,.pjpeg,.bmp,.apng", className: classes.selectInput, ref: fileInputRef, onChange: handleSelectImage })] })), helperText && _jsx("span", __assign({ className: clx(isError && classes.helperTextError) }, { children: helperText })), fileError && _jsx("span", __assign({ className: clx(isError && classes.helperTextError) }, { children: fileError })), hasSelectedImage && (_jsxs(_Fragment, { children: [_jsx("p", { children: value === null || value === void 0 ? void 0 : value.name }), _jsx(Button, __assign({ variant: "contained", className: classes.button, onClick: handlePickImage }, { children: "Change Image" }))] }))] })));
};
