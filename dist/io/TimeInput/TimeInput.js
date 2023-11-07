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
import React from "react";
import clx from "classnames";
import moment from "moment";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { BiTimeFive } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useTimeInputStyles } from "./styles";
export var TimeInput = function (_a) {
    var className = _a.className, popupClassName = _a.popupClassName, label = _a.label, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, name = _a.name, value = _a.value, helperText = _a.helperText, isError = _a.isError, isSuccess = _a.isSuccess, _c = _a.showSecond, showSecond = _c === void 0 ? false : _c, _d = _a.use12Hours, use12Hours = _d === void 0 ? true : _d, _e = _a.format, format = _e === void 0 ? "h:mm A" : _e, onChange = _a.onChange, _f = _a.required, required = _f === void 0 ? false : _f, props = __rest(_a, ["className", "popupClassName", "label", "hideLabel", "name", "value", "helperText", "isError", "isSuccess", "showSecond", "use12Hours", "format", "onChange", "required"]);
    var classes = useTimeInputStyles();
    var _g = __read(React.useState(moment().hour(0).minute(0)), 2), selectedTime = _g[0], setSelectedTime = _g[1];
    var handleChange = function (_a) {
        var value = _a.value;
        setSelectedTime(value);
        if (onChange)
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value.format() });
    };
    var handleClearClick = function () {
        var value = moment().startOf("minute");
        setSelectedTime(value);
        if (onChange)
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("div", __assign({ className: classes.labelWrapper }, { children: !hideLabel && label && (_jsxs("label", __assign({ htmlFor: name, className: classes.label }, { children: [label, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }))] }))) })), _jsxs("div", __assign({ className: clx(classes.baseInput, isSuccess && classes.successInput, isError && classes.errorInput) }, { children: [_jsx(BiTimeFive, { width: 16, height: 16 }), _jsx(TimePicker, __assign({ showSecond: showSecond, use12Hours: use12Hours, format: format, value: value ? moment(value) : selectedTime, onChange: function (value) { return handleChange({ name: name, value: value }); }, className: classes.input, defaultValue: moment().hour(0).minute(0), popupClassName: clx(classes.containerDiv, popupClassName) }, props, { clearIcon: _jsx(_Fragment, {}) })), _jsx(FaTimes, { className: classes.clearTimer, onClick: handleClearClick })] })), helperText && (_jsx("span", __assign({ className: clx(classes.helperTextDefault, isSuccess && classes.helperTextSuccess, isError && classes.helperTextError) }, { children: helperText })))] })));
};
