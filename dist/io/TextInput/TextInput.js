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
import clx from "classnames";
import { isNumber, isBoolean } from "lodash";
import { cloneElement, isValidElement } from "react";
import React, { useCallback, useState } from "react";
import { useTextStyles, useTextInputIconStyles } from "./styles";
import { useInputWithSlideUpLabelStyles } from "./useInputWithSlideUpLabelStyles";
/**
 * Text Input IO Component
 *
 * - Should follow the following constraints;
 * -- labels are optional (should show or hide if its provided but can be manually turned off. Manual turn off/on takes precedence over if provided or not).
 * -- startIcons and endIcons
 * -- should expose the following events: onFocus, onEnter
 * -- helperText
 * -- info
 */
export var TextInput = function (_a) {
    var className = _a.className, label = _a.label, errors = _a.errors, isError = _a.isError, isSuccess = _a.isSuccess, helperText = _a.helperText, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, name = _a.name, onChange = _a.onChange, onFocus = _a.onFocus, onEnter = _a.onEnter, onBlur = _a.onBlur, _c = _a.required, required = _c === void 0 ? false : _c, _d = _a.hasSlideUpLabel, hasSlideUpLabel = _d === void 0 ? false : _d, _e = _a.noNegativeValue, noNegativeValue = _e === void 0 ? false : _e, showCC = _a.showCC, _f = _a.type, type = _f === void 0 ? "text" : _f, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, iconSpacing = _a.iconSpacing, width = _a.width, height = _a.height, color = _a.color, background = _a.background, borderWidth = _a.borderWidth, borderColor = _a.borderColor, borderStyle = _a.borderStyle, borderRadius = _a.borderRadius, classNames = _a.classNames, placeholder = _a.placeholder, inputRef = _a.inputRef, maxLength = _a.maxLength, props = __rest(_a, ["className", "label", "errors", "isError", "isSuccess", "helperText", "hideLabel", "name", "onChange", "onFocus", "onEnter", "onBlur", "required", "hasSlideUpLabel", "noNegativeValue", "showCC", "type", "leftIcon", "rightIcon", "iconSpacing", "width", "height", "color", "background", "borderWidth", "borderColor", "borderStyle", "borderRadius", "classNames", "placeholder", "inputRef", "maxLength"]);
    var _g = __read(React.useState(false), 2), isFocused = _g[0], setIsFocused = _g[1];
    var classes = useTextStyles({
        width: width,
        height: height,
        background: background,
        color: color,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderStyle: borderStyle,
        borderRadius: borderRadius,
    });
    var slideUpLabelClass = useInputWithSlideUpLabelStyles();
    var handleChange = function (e) {
        var _a, _b, _c;
        if ((type === "number" || noNegativeValue) && isNaN(e.target.value))
            return;
        if (maxLength && Number(e.target.value) >= maxLength)
            return;
        if (noNegativeValue) {
            var inputValue = e.target.value;
            if (type === "number" && parseFloat(inputValue) < 0) {
                e.target.value = "0"; // Set value to 0 if it's negative
            }
        }
        if (type === "tel") {
            var phoneNumberRegexp = /^\+?[0-9-]*$/; //validate if value can pass as a phone number
            if (!phoneNumberRegexp.test((_a = e.target) === null || _a === void 0 ? void 0 : _a.value)) {
                return;
            }
        }
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({
                name: (_b = e.target.name) !== null && _b !== void 0 ? _b : "",
                value: (_c = e.target.value) !== null && _c !== void 0 ? _c : "",
            });
        }
    };
    var handleOnKeyDown = function (e) {
        var _a, _b, _c;
        if (type === "number" && ["e", "E"].includes(e.key)) {
            (_a = e === null || e === void 0 ? void 0 : e.preventDefault) === null || _a === void 0 ? void 0 : _a.call(e);
        }
        if (onEnter && e.key === "Enter") {
            onEnter === null || onEnter === void 0 ? void 0 : onEnter({
                name: (_b = e.target.name) !== null && _b !== void 0 ? _b : "",
                value: (_c = e.target.value) !== null && _c !== void 0 ? _c : "",
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
    return (_jsxs("div", { className: clx(classes.root, className, hasSlideUpLabel && slideUpLabelClass.container), children: [_jsxs("div", { className: clx(classes.labelWrapper, hasSlideUpLabel && slideUpLabelClass.labelContainer, (isFocused || props.value) && "active"), children: [!hideLabel && label && (_jsxs("label", { htmlFor: name, className: clx(classes.label, hasSlideUpLabel && slideUpLabelClass.inputLabel, classNames === null || classNames === void 0 ? void 0 : classNames.label), children: [label, required && _jsx("span", { className: classes.required, children: "*" })] })), showCC && (_jsx("span", { className: clx(classes.wordCount, classes.label, classNames === null || classNames === void 0 ? void 0 : classNames.label), children: (props === null || props === void 0 ? void 0 : props.value) && (props === null || props === void 0 ? void 0 : props.value.length) > 0 && (props === null || props === void 0 ? void 0 : props.value.length) }))] }), _jsxs("div", { className: clx(classes.baseInput, classes.defaultInput, classNames === null || classNames === void 0 ? void 0 : classNames.input, hasSlideUpLabel && slideUpLabelClass.inputContainer, hasSlideUpLabel && (isError || errors) && slideUpLabelClass.inputError, hasSlideUpLabel && isSuccess && slideUpLabelClass.inputSuccess, isSuccess && classes.successInput, (isError || errors) && classes.errorInput, isFocused && classes.focusedInput, isError && "error"), children: [leftIcon && (_jsx(InputIcon, { marginRight: iconSpacing, marginLeft: iconSpacing, children: leftIcon })), _jsx("input", __assign({ type: type, name: name, className: clx(classes.input, hasSlideUpLabel && slideUpLabelClass.input, classNames === null || classNames === void 0 ? void 0 : classNames.inputField), onFocus: handleFocus, onBlur: handleBlur, onChange: handleChange, min: noNegativeValue ? "0" : "", onKeyDown: handleOnKeyDown, placeholder: hasSlideUpLabel ? (isFocused && !props.value ? placeholder : "") : placeholder, ref: inputRef }, props)), rightIcon && _jsx(InputIcon, { marginLeft: iconSpacing, children: rightIcon })] }), helperText && (_jsx("span", { className: clx(classes.helperTextDefault, isSuccess && classes.helperTextSuccess, isError && classes.helperTextError, isError && (classNames === null || classNames === void 0 ? void 0 : classNames.errorMessage)), children: helperText }))] }));
};
var validateEmail = function (email) {
    var validator = String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return !(validator == null);
};
export var EmailInput = function (_a) {
    var name = _a.name, errors = _a.errors, isSuccess = _a.isSuccess, isError = _a.isError, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, onEnter = _a.onEnter, props = __rest(_a, ["name", "errors", "isSuccess", "isError", "onChange", "onBlur", "onFocus", "onEnter"]);
    var sErrors;
    var _b = __read(useState(), 2), emailErrors = _b[0], setEmailErrors = _b[1];
    var _c = __read(useState(false), 2), isValidEmail = _c[0], setIsValidEmail = _c[1];
    var handleChange = useCallback(function (_a) {
        var name = _a.name, value = _a.value;
        setIsValidEmail(function () { return validateEmail(value); });
        validateEmail(value) || value == ""
            ? setEmailErrors(undefined)
            : setEmailErrors([{ message: "Invalid email !!" }]);
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value });
        }
    }, [errors, setEmailErrors]);
    if (errors || emailErrors) {
        sErrors = errors ? errors : undefined;
        sErrors = emailErrors ? (errors ? __spreadArray(__spreadArray([], __read(errors), false), __read(emailErrors), false) : emailErrors) : undefined;
    }
    return (_jsx(TextInput, __assign({ type: "email", name: name, isSuccess: isValidEmail || isSuccess, isError: !!sErrors || isError, errors: sErrors, onChange: handleChange, onFocus: onFocus, onEnter: onEnter, onBlur: onBlur }, props)));
};
var validateURL = function (str) {
    var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
    return !!pattern.test(str);
};
export var URLInput = function (_a) {
    var name = _a.name, errors = _a.errors, isSuccess = _a.isSuccess, isError = _a.isError, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, onEnter = _a.onEnter, props = __rest(_a, ["name", "errors", "isSuccess", "isError", "onChange", "onBlur", "onFocus", "onEnter"]);
    var sErrors;
    var _b = __read(useState(), 2), urlErrors = _b[0], setURLErrors = _b[1];
    var _c = __read(useState(false), 2), isValidURL = _c[0], setIsValidURL = _c[1];
    var handleChange = useCallback(function (_a) {
        var name = _a.name, value = _a.value;
        setIsValidURL(function () { return validateURL(value); });
        validateURL(value) || value == ""
            ? setURLErrors(undefined)
            : setURLErrors([{ message: "Invalid email !!" }]);
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value });
        }
    }, [errors, setURLErrors]);
    if (errors || urlErrors) {
        sErrors = errors ? errors : undefined;
        sErrors = urlErrors ? (errors ? __spreadArray(__spreadArray([], __read(errors), false), __read(urlErrors), false) : urlErrors) : undefined;
    }
    return (_jsx(TextInput, __assign({ type: "url", name: name, isSuccess: isValidURL || isSuccess, isError: !!sErrors || isError, errors: sErrors, onChange: handleChange, onFocus: onFocus, onEnter: onEnter, onBlur: onBlur }, props)));
};
export var NumberInput = function (_a) {
    var name = _a.name, errors = _a.errors, isValidated = _a.isValidated, isError = _a.isError, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, onEnter = _a.onEnter, showCC = _a.showCC, props = __rest(_a, ["name", "errors", "isValidated", "isError", "onChange", "onBlur", "onFocus", "onEnter", "showCC"]);
    var sErrors;
    var _b = __read(useState(false), 2), isValidNumber = _b[0], setIsValidNumber = _b[1];
    var _c = __read(useState(), 2), numberErrors = _c[0], setNumberErrors = _c[1];
    var handleChange = useCallback(function (_a) {
        var name = _a.name, value = _a.value;
        isNumber(parseFloat(value)) || value == ""
            ? setNumberErrors(undefined)
            : setNumberErrors([{ message: "Invalid number !!" }]);
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value });
        }
        if (isBoolean(isValidated)) {
            isValidated && isNumber(parseFloat(value))
                ? setIsValidNumber(true)
                : setIsValidNumber(false);
        }
        else {
            isNumber(parseFloat(value)) ? setIsValidNumber(true) : setIsValidNumber(false);
        }
    }, [errors, setNumberErrors, isValidated]);
    if (errors || numberErrors) {
        sErrors = errors ? errors : undefined;
        sErrors = numberErrors ? (errors ? __spreadArray(__spreadArray([], __read(errors), false), __read(numberErrors), false) : numberErrors) : undefined;
    }
    return (_jsx(TextInput, __assign({ type: "number", name: name, errors: sErrors, showCC: showCC, isSuccess: isValidNumber, isError: !!sErrors || isError, onChange: handleChange, onFocus: onFocus, onEnter: onEnter, onBlur: onBlur }, props)));
};
var InputIcon = function (_a) {
    var children = _a.children, marginLeft = _a.marginLeft, marginRight = _a.marginRight, rest = __rest(_a, ["children", "marginLeft", "marginRight"]);
    var classes = useTextInputIconStyles({ marginLeft: marginLeft, marginRight: marginRight });
    var _className = clx(classes.root, classes.iconSpacing);
    var _children = isValidElement(children) ? cloneElement(children, {}) : children;
    return (_jsx("span", __assign({}, rest, { className: _className, children: _children })));
};
