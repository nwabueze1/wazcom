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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { useFileSelectorInputStyles } from "./useFileSelectorInputStyles";
import { validateFileBySize } from "../ImageSelectorInput";
import clx from "classnames";
import { Button } from "../../core";
export var FileSelectorInput = function (_a) {
    var name = _a.name, value = _a.value, isError = _a.isError, onChange = _a.onChange, helperText = _a.helperText, accept = _a.accept, label = _a.label, min_size_kb = _a.min_size_kb, max_size_mb = _a.max_size_mb;
    var classes = useFileSelectorInputStyles();
    var fileInputRef = useRef(null);
    var _b = __read(useState(undefined), 2), fileError = _b[0], setFileError = _b[1];
    var _c = __read(useState(function () {
        if (!value)
            return "";
        return URL.createObjectURL(value);
    }), 2), fileSource = _c[0], setFileSource = _c[1];
    var hasSelectedFile = fileSource.length > 0;
    var handlePickFile = function () {
        var _a;
        (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var handleSelectFile = function (e) {
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
    return (_jsxs("div", __assign({ className: classes.root }, { children: [label && _jsx("label", __assign({ className: classes.label }, { children: label })), _jsx("button", __assign({ className: clx(classes.selectButton, hasSelectedFile && "active"), onClick: !hasSelectedFile ? handlePickFile : undefined }, { children: hasSelectedFile ? value === null || value === void 0 ? void 0 : value.name : "Select a file" })), _jsx("input", { type: "file", accept: accept, className: classes.selectInput, ref: fileInputRef, onChange: handleSelectFile }), helperText && _jsx("span", __assign({ className: clx(isError && classes.helperTextError) }, { children: helperText })), fileError && _jsx("span", __assign({ className: clx(isError && classes.helperTextError) }, { children: fileError })), hasSelectedFile && (_jsxs(_Fragment, { children: [_jsx("p", __assign({ className: classes.selectedFileName }, { children: value === null || value === void 0 ? void 0 : value.name })), _jsx(Button, __assign({ variant: "contained", className: classes.button, onClick: handlePickFile }, { children: "Change file" }))] }))] })));
};
