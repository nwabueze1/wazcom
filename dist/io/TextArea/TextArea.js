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
import { useTextAreaStyles } from "./styles";
import clx from "classnames";
export var TextArea = function (_a) {
    var className = _a.className, classNames = _a.classNames, label = _a.label, rows = _a.rows, helperText = _a.helperText, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, isSuccess = _a.isSuccess, isError = _a.isError, errors = _a.errors, name = _a.name, width = _a.width, height = _a.height, background = _a.background, color = _a.color, borderWidth = _a.borderWidth, borderColor = _a.borderColor, borderStyle = _a.borderStyle, borderRadius = _a.borderRadius, onChange = _a.onChange, onFocus = _a.onFocus, onEnter = _a.onEnter, onBlur = _a.onBlur, _c = _a.required, required = _c === void 0 ? false : _c, showCC = _a.showCC, props = __rest(_a, ["className", "classNames", "label", "rows", "helperText", "hideLabel", "isSuccess", "isError", "errors", "name", "width", "height", "background", "color", "borderWidth", "borderColor", "borderStyle", "borderRadius", "onChange", "onFocus", "onEnter", "onBlur", "required", "showCC"]);
    var _d = __read(useState(false), 2), isFocused = _d[0], setIsFocused = _d[1];
    var classes = useTextAreaStyles({
        rows: rows,
        width: width,
        height: height,
        background: background,
        color: color,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderStyle: borderStyle,
        borderRadius: borderRadius,
    });
    var handleChange = function (e) {
        var _a, _b;
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({
                name: (_a = e.target.name) !== null && _a !== void 0 ? _a : "",
                value: (_b = e.target.value) !== null && _b !== void 0 ? _b : "",
            });
        }
    };
    var handleOnKeyDown = function (e) {
        var _a, _b;
        if (onEnter && e.key === "Enter") {
            onEnter === null || onEnter === void 0 ? void 0 : onEnter({
                name: (_a = e.target.name) !== null && _a !== void 0 ? _a : "",
                value: (_b = e.target.value) !== null && _b !== void 0 ? _b : "",
            });
        }
    };
    var handleFocus = function (e) {
        var _a, _b;
        setIsFocused(function () { return true; });
        if (onFocus) {
            onFocus === null || onFocus === void 0 ? void 0 : onFocus({
                name: (_a = e.target.name) !== null && _a !== void 0 ? _a : "",
                value: (_b = e.target.value) !== null && _b !== void 0 ? _b : "",
            });
        }
    };
    var handleBlur = function (e) {
        var _a, _b;
        setIsFocused(function () { return false; });
        if (onBlur) {
            onBlur === null || onBlur === void 0 ? void 0 : onBlur({
                name: (_a = e.target.name) !== null && _a !== void 0 ? _a : "",
                value: (_b = e.target.value) !== null && _b !== void 0 ? _b : "",
            });
        }
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsxs("div", __assign({ className: classes.labelWrapper }, { children: [!hideLabel && label && (_jsxs("label", __assign({ htmlFor: name, className: clx(classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.label) }, { children: [label, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }))] }))), showCC && (_jsx("span", __assign({ className: clx(classes.wordCount, classes.label) }, { children: (props === null || props === void 0 ? void 0 : props.value) && (props === null || props === void 0 ? void 0 : props.value.length) > 0 && (props === null || props === void 0 ? void 0 : props.value.length) })))] })), _jsx("div", __assign({ className: classes.textAreaContainer }, { children: _jsx("textarea", __assign({ className: clx(classes.baseTextArea, classes.defaultInput, classNames === null || classNames === void 0 ? void 0 : classNames.input, isSuccess && classes.successInput, (isError || errors) && classes.errorInput, isFocused && classes.focusedInput), name: name, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, onKeyDown: handleOnKeyDown, rows: rows || 5 }, props)) })), helperText && (_jsx("span", __assign({ className: clx(classes.helperTextDefault, isSuccess && classes.helperTextSuccess, isError && classes.helperTextError) }, { children: helperText })))] })));
};
