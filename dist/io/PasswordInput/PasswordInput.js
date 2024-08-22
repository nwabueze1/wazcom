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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { cloneElement, isValidElement, useState } from "react";
import clx from "classnames";
import { Button } from "../../core";
import { usePasswordInputStyles, useTextInputIconStyles } from "./styles";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { initialConfig, PasswordValidation } from "./helper";
export var PasswordInput = function (_a) {
    var className = _a.className, label = _a.label, errors = _a.errors, isError = _a.isError, isSuccess = _a.isSuccess, helperText = _a.helperText, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, name = _a.name, onChange = _a.onChange, onFocus = _a.onFocus, onEnter = _a.onEnter, onBlur = _a.onBlur, _c = _a.required, required = _c === void 0 ? false : _c, classNames = _a.classNames, _d = _a.config, config = _d === void 0 ? initialConfig : _d, props = __rest(_a, ["className", "label", "errors", "isError", "isSuccess", "helperText", "hideLabel", "name", "onChange", "onFocus", "onEnter", "onBlur", "required", "classNames", "config"]);
    var _e = __read(useState(""), 2), value = _e[0], setValue = _e[1];
    var _f = __read(useState(false), 2), isFocused = _f[0], setIsFocused = _f[1];
    var _g = __read(useState(false), 2), isTouched = _g[0], setIsTouched = _g[1];
    var _h = __read(useState("password"), 2), type = _h[0], setType = _h[1];
    var PasswordConfig = __assign(__assign({}, initialConfig), config);
    var classes = usePasswordInputStyles();
    var handlePasswordVisibility = function (value) {
        setType(value);
    };
    var handleChange = function (e) {
        var _a, _b;
        var target = e.target;
        setValue(target.value);
        if (props.max && e.target.value >= props.max)
            return;
        if (!isTouched) {
            setIsTouched(true);
        }
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({
                name: (_a = target.name) !== null && _a !== void 0 ? _a : "",
                value: (_b = target.value) !== null && _b !== void 0 ? _b : "",
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
    return (_jsxs("div", { className: clx(classes.root, className), children: [_jsx("div", { className: classes.labelWrapper, children: !hideLabel && label && (_jsxs("label", { htmlFor: name, className: classes.label, children: [label, required && _jsx("span", { className: classes.required, children: "*" })] })) }), _jsxs("div", { className: clx(classes.baseInput, classes.defaultInput, classNames === null || classNames === void 0 ? void 0 : classNames.input, isSuccess && classes.successInput, (isError || errors) && classes.errorInput, isFocused && classes.focusedInput), children: [_jsx("input", __assign({ type: type, name: name, className: classes.input, onFocus: handleFocus, onBlur: handleBlur, onChange: handleChange, onKeyDown: handleOnKeyDown }, props)), Boolean(value) && (_jsx(_Fragment, { children: type === "password" ? (_jsx(_Fragment, { children: _jsx(Button, { className: classes.iconButton, onClick: function () { return handlePasswordVisibility("text"); }, children: _jsx(InputIcon, { children: _jsx(BsEye, {}) }) }) })) : (_jsx(_Fragment, { children: _jsx(Button, { className: classes.iconButton, onClick: function () { return handlePasswordVisibility("password"); }, children: _jsx(InputIcon, { children: _jsx(BsEyeSlash, {}) }) }) })) }))] }), helperText && (_jsx("span", { className: clx(classes.helperTextDefault, isSuccess && classes.helperTextSuccess, isError && classes.helperTextError), children: helperText })), _jsx(PasswordValidation, { value: value, config: PasswordConfig, isTouched: isTouched })] }));
};
var InputIcon = function (_a) {
    var children = _a.children, marginLeft = _a.marginLeft, marginRight = _a.marginRight, rest = __rest(_a, ["children", "marginLeft", "marginRight"]);
    var classes = useTextInputIconStyles({ marginLeft: marginLeft, marginRight: marginRight });
    var _className = clx(classes.root);
    var _children = isValidElement(children) ? cloneElement(children, {}) : children;
    return (_jsx("span", __assign({}, rest, { className: _className, children: _children })));
};
