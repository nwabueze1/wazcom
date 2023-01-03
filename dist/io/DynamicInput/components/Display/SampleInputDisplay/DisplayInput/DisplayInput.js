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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { CheckBoxOutlineBlank, Close as CloseIcon, RadioButtonUncheckedOutlined, } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDisplayInputStyles } from "./styles";
import { TextInput } from "../../../../../TextInput/TextInput";
import { FiImage } from "react-icons/fi";
import clx from "classnames";
export var DisplayInput = function (_a) {
    var handleRemove = _a.handleRemove, handleChange = _a.handleChange, handleOptionMedia = _a.handleOptionMedia, inputValue = _a.value, index = _a.index, onFocus = _a.onFocus, type = _a.type;
    var classes = useDisplayInputStyles();
    var _b = __read(useState(inputValue), 2), value = _b[0], setValue = _b[1];
    useEffect(function () {
        setValue(inputValue);
    }, [inputValue]);
    var handleInputChange = function (event) {
        setValue(function (value) { return (__assign(__assign({}, value), { text: event.value })); });
        handleChange(__assign(__assign({}, value), { text: event.value }));
    };
    var displayLabel = function () {
        switch (type) {
            case "dropdown":
                return _jsxs("p", { children: [index + 1, "."] }, void 0);
            case "checkboxes":
                return _jsx(CheckBoxOutlineBlank, {}, void 0);
            case "multiple":
                return _jsx(RadioButtonUncheckedOutlined, {}, void 0);
            default:
                return _jsxs("p", { children: [index + 1, "."] }, void 0);
        }
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [displayLabel(), _jsx(TextInput
            // className={{
            //     textInput: classes.displayInput,
            //     newRoot: classes.newRoot,
            // }}
            , { 
                // className={{
                //     textInput: classes.displayInput,
                //     newRoot: classes.newRoot,
                // }}
                value: value === null || value === void 0 ? void 0 : value.text, onChange: handleInputChange, id: "standard-basic", onFocus: onFocus }, void 0), _jsx(FiImage, { className: clx(classes.displayIcon, classes.mediaIcon), onClick: handleOptionMedia }, void 0), _jsx(CloseIcon, { className: classes.displayIcon, onClick: handleRemove }, void 0)] }), void 0));
};
