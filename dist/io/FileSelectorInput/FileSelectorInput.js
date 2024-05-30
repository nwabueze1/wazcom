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
import { useRef, useState } from "react";
import { useFileSelectorInputStyles } from "./useFileSelectorInputStyles";
import { validateFileBySize } from "../ImageSelectorInput";
import clx from "classnames";
import { Button } from "../../core";
import { shortenFileName } from "./helper";
import { CircularProgress } from "@mui/material";
export var FileSelectorInput = function (_a) {
    var name = _a.name, value = _a.value, isError = _a.isError, onChange = _a.onChange, helperText = _a.helperText, _b = _a.accept, accept = _b === void 0 ? "*" : _b, label = _a.label, min_size_kb = _a.min_size_kb, max_size_mb = _a.max_size_mb, loading = _a.loading, uploadFn = _a.uploadFn, classNames = _a.classNames;
    var classes = useFileSelectorInputStyles();
    var fileInputRef = useRef(null);
    var _c = __read(useState(undefined), 2), fileError = _c[0], setFileError = _c[1];
    var _d = __read(useState(null), 2), file = _d[0], setFile = _d[1];
    var hasSelectedFile = file !== null;
    var handlePickFile = function () {
        var _a;
        (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var handleSelectFile = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var selectedFile, _a, valid, error, isUploaded;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    selectedFile = (_b = e.target.files) === null || _b === void 0 ? void 0 : _b[0];
                    if (!selectedFile)
                        return [2 /*return*/];
                    _a = validateFileBySize({ file: selectedFile, min_size_kb: min_size_kb, max_size_mb: max_size_mb }), valid = _a.valid, error = _a.error;
                    if (!valid) {
                        setFileError(error);
                        return [2 /*return*/];
                    }
                    setFileError(undefined);
                    if (!uploadFn) return [3 /*break*/, 2];
                    return [4 /*yield*/, uploadFn({ name: name, file: selectedFile })];
                case 1:
                    isUploaded = _c.sent();
                    if (isUploaded) {
                        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: selectedFile });
                        setFile(selectedFile);
                        return [2 /*return*/];
                    }
                    setFile(null);
                    return [2 /*return*/];
                case 2:
                    onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: selectedFile });
                    setFile(selectedFile);
                    return [2 /*return*/];
            }
        });
    }); };
    var renderBlock = function () {
        if (loading)
            return (_jsxs("div", __assign({ className: classes.fileNameContainer }, { children: [_jsx("p", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.text }, { children: "Saving file ..." })), _jsx(CircularProgress, { size: 14, color: "inherit" })] })));
        return (_jsxs(_Fragment, { children: [!hasSelectedFile && (_jsx("button", __assign({ className: clx(classes.selectButton, hasSelectedFile && "active", classNames === null || classNames === void 0 ? void 0 : classNames.selectButton), onClick: !hasSelectedFile ? handlePickFile : undefined, type: "button" }, { children: "Select a file" }))), hasSelectedFile && (_jsx("p", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.text }, { children: shortenFileName((value === null || value === void 0 ? void 0 : value.name) || (file === null || file === void 0 ? void 0 : file.name)) }))), hasSelectedFile && (_jsxs(_Fragment, { children: [_jsx("p", __assign({ className: (classes.selectedFileName, classNames === null || classNames === void 0 ? void 0 : classNames.text) }, { children: value === null || value === void 0 ? void 0 : value.name })), _jsx(Button, __assign({ variant: "contained", className: clx(classes.button, classNames === null || classNames === void 0 ? void 0 : classNames.changeFileButton), onClick: handlePickFile, type: "button" }, { children: "Change file" }))] }))] }));
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [label && _jsx("label", __assign({ className: clx(classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.label) }, { children: label })), _jsx("div", __assign({ className: classes.fileNameContainer }, { children: renderBlock() })), _jsx("input", { type: "file", accept: accept, className: classes.selectInput, ref: fileInputRef, onChange: handleSelectFile }), helperText && (_jsx("span", __assign({ className: clx(isError && classes.helperTextError, classNames === null || classNames === void 0 ? void 0 : classNames.helperText, isError && "error") }, { children: helperText }))), fileError && (_jsx("span", __assign({ className: clx(isError && classes.helperTextError, classNames === null || classNames === void 0 ? void 0 : classNames.helperText, isError && "error") }, { children: fileError })))] })));
};
