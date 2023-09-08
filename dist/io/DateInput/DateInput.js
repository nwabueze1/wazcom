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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import clx from "classnames";
import { useDateInputStyles } from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
export var DateInput = function (_a) {
    var className = _a.className, label = _a.label, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, name = _a.name, value = _a.value, helperText = _a.helperText, isError = _a.isError, isSuccess = _a.isSuccess, onChange = _a.onChange, _c = _a.required, required = _c === void 0 ? false : _c;
    var classes = useDateInputStyles();
    var _d = __read(useState(new Date()), 2), startDate = _d[0], setStartDate = _d[1];
    var handleChange = function (value) {
        if (onChange)
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("div", __assign({ className: classes.labelWrapper }, { children: !hideLabel && label && (_jsxs("label", __assign({ htmlFor: name, className: classes.label }, { children: [label, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }))] }))) })), _jsxs("div", __assign({ className: clx(classes.baseInput, isSuccess && classes.successInput, isError && classes.errorInput) }, { children: [_jsx(FaRegCalendarAlt, { width: 16, height: 16 }), _jsx(DatePicker, { selected: startDate, onChange: function (date) {
                            setStartDate(date);
                            handleChange(date);
                        }, value: value ? value : startDate })] })), helperText && (_jsx("span", __assign({ className: clx(classes.helperTextDefault, isSuccess && classes.helperTextSuccess, isError && classes.helperTextError) }, { children: helperText })))] })));
};
