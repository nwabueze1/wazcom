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
import clx from 'classnames';
import { isNumber } from 'lodash';
import { useCallback, useState } from "react";
import { useTextStyles } from "./styles";
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
    var className = _a.className, label = _a.label, errors = _a.errors, helperText = _a.helperText, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, info = _a.info, name = _a.name, onChange = _a.onChange, _c = _a.required, required = _c === void 0 ? false : _c, showCC = _a.showCC, _d = _a.type, type = _d === void 0 ? "text" : _d, props = __rest(_a, ["className", "label", "errors", "helperText", "hideLabel", "info", "name", "onChange", "required", "showCC", "type"]);
    var classes = useTextStyles();
    var handleChange = function (e) {
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: e.target.value });
        }
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsxs("div", __assign({ className: classes.labelWrapper }, { children: [!hideLabel &&
                        label &&
                        _jsxs("label", __assign({ htmlFor: name, className: classes.label }, { children: [label, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }), void 0)] }), void 0), showCC && _jsx("span", __assign({ className: clx(classes.wordCount, classes.label) }, { children: (props === null || props === void 0 ? void 0 : props.value) && (props === null || props === void 0 ? void 0 : props.value.length) > 0 && (props === null || props === void 0 ? void 0 : props.value.length) }), void 0)] }), void 0), _jsx("input", __assign({ type: type, className: clx(classes.input, errors && classes.error), onChange: handleChange }, props), void 0)] }), void 0));
};
export var TextArea = function (_a) {
    var _b;
    var className = _a.className, label = _a.label, helperText = _a.helperText, _c = _a.hideLabel, hideLabel = _c === void 0 ? false : _c, info = _a.info, name = _a.name, onChange = _a.onChange, _d = _a.required, required = _d === void 0 ? false : _d, showCC = _a.showCC, props = __rest(_a, ["className", "label", "helperText", "hideLabel", "info", "name", "onChange", "required", "showCC"]);
    var classes = useTextStyles();
    var handleChange = useCallback(function (e) {
        console.log(name, e.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name !== null && name !== void 0 ? name : "", value: e.target.value });
    }, []);
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsxs("div", __assign({ className: classes.labelWrapper }, { children: [!hideLabel &&
                        label &&
                        _jsxs("label", __assign({ htmlFor: name, className: classes.label }, { children: [label, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }), void 0)] }), void 0), showCC && _jsx("span", __assign({ className: clx(classes.wordCount, classes.label) }, { children: (props === null || props === void 0 ? void 0 : props.value) && ((_b = props === null || props === void 0 ? void 0 : props.value) === null || _b === void 0 ? void 0 : _b.length) && (props === null || props === void 0 ? void 0 : props.value.length) > 0 && (props === null || props === void 0 ? void 0 : props.value.length) }), void 0)] }), void 0), _jsx("textarea", __assign({ className: clx(classes.input, classes.textAreaInput), onChange: handleChange, rows: 5 }, props), void 0)] }), void 0));
};
var validateEmail = function (email) {
    var validator = String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return !(validator == null);
};
export var EmailInput = function (_a) {
    var name = _a.name, errors = _a.errors, onChange = _a.onChange, props = __rest(_a, ["name", "errors", "onChange"]);
    var sErrors;
    var _b = __read(useState(), 2), emailErrors = _b[0], setEmailErrors = _b[1];
    var handleChange = useCallback(function (_a) {
        var name = _a.name, value = _a.value;
        (validateEmail(value) || value == "") ? setEmailErrors(undefined) : setEmailErrors([{ message: 'Invalid email !!' }]);
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value });
        }
    }, [errors, setEmailErrors]);
    if (errors || emailErrors) {
        sErrors = errors ? errors : undefined;
        sErrors = emailErrors ? (errors) ? __spreadArray(__spreadArray([], __read(errors), false), __read(emailErrors), false) : emailErrors : undefined;
    }
    return _jsx(TextInput, __assign({ type: "email", name: name, errors: sErrors, onChange: handleChange }, props), void 0);
};
export var NumberInput = function (_a) {
    var name = _a.name, errors = _a.errors, onChange = _a.onChange, showCC = _a.showCC, props = __rest(_a, ["name", "errors", "onChange", "showCC"]);
    var sErrors;
    var _b = __read(useState(), 2), numberErrors = _b[0], setNumberErrors = _b[1];
    var handleChange = useCallback(function (_a) {
        var name = _a.name, value = _a.value;
        (isNumber(value) || value == "") ? setNumberErrors(undefined) : setNumberErrors([{ message: 'Invalid number !!' }]);
        if (onChange) {
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value });
        }
    }, [errors, setNumberErrors]);
    if (errors || numberErrors) {
        sErrors = errors ? errors : undefined;
        sErrors = numberErrors ? (errors) ? __spreadArray(__spreadArray([], __read(errors), false), __read(numberErrors), false) : numberErrors : undefined;
    }
    return _jsx(TextInput, __assign({ type: "number", name: name, errors: sErrors, showCC: false, onChange: handleChange }, props), void 0);
};
