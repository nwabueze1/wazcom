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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clx from "classnames";
import moment from "moment";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { BiTimeFive } from "react-icons/bi";
import { useTimeInputStyles } from "./styles";
export var TimeInput = function (_a) {
    var className = _a.className, popupClassName = _a.popupClassName, label = _a.label, _b = _a.hideLabel, hideLabel = _b === void 0 ? false : _b, name = _a.name, value = _a.value, helperText = _a.helperText, isError = _a.isError, isSuccess = _a.isSuccess, _c = _a.showSecond, showSecond = _c === void 0 ? false : _c, _d = _a.use12Hours, use12Hours = _d === void 0 ? true : _d, _e = _a.format, format = _e === void 0 ? 'HH:mm' : _e, onChange = _a.onChange, _f = _a.required, required = _f === void 0 ? false : _f, defaultValue = _a.defaultValue, props = __rest(_a, ["className", "popupClassName", "label", "hideLabel", "name", "value", "helperText", "isError", "isSuccess", "showSecond", "use12Hours", "format", "onChange", "required", "defaultValue"]);
    var classes = useTimeInputStyles();
    var handleChange = function (_a) {
        var name = _a.name, value = _a.value;
        if (onChange)
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: value.format() });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("div", __assign({ className: classes.labelWrapper }, { children: !hideLabel && label && (_jsxs("label", __assign({ htmlFor: name, className: classes.label }, { children: [label, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }))] }))) })), _jsxs("div", __assign({ className: clx(classes.baseInput, isSuccess && classes.successInput, isError && classes.errorInput) }, { children: [_jsx(BiTimeFive, { width: 16, height: 16 }), _jsx(TimePicker, __assign({ showSecond: showSecond, use12Hours: use12Hours, format: format, value: moment(value), onChange: function (value) { return handleChange({ name: name, value: value }); }, className: classes.input, defaultValue: moment().hour(0).minute(0), popupClassName: clx(classes.containerDiv, popupClassName) }, props))] })), helperText && (_jsx("span", __assign({ className: clx(classes.helperTextDefault, isSuccess && classes.helperTextSuccess, isError && classes.helperTextError) }, { children: helperText })))] })));
};
