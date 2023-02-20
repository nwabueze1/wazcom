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
import clx from 'classnames';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { BiTimeFive } from "react-icons/bi";
import { useTimeInputStyles } from "./styles";
export var TimeInput = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'time_picker' : _b, className = _a.className, popupClassName = _a.popupClassName, label = _a.label, _c = _a.hideLabel, hideLabel = _c === void 0 ? false : _c, name = _a.name, startTimeName = _a.startTimeName, endTimeName = _a.endTimeName, onChange = _a.onChange, _d = _a.required, required = _d === void 0 ? false : _d, props = __rest(_a, ["variant", "className", "popupClassName", "label", "hideLabel", "name", "startTimeName", "endTimeName", "onChange", "required"]);
    var classes = useTimeInputStyles();
    var handleChange = function (event) {
        var _a, _b, _c;
        if (onChange)
            onChange === null || onChange === void 0 ? void 0 : onChange({ name: (_a = event === null || event === void 0 ? void 0 : event.name) !== null && _a !== void 0 ? _a : '', value: (_c = (_b = event === null || event === void 0 ? void 0 : event.value) === null || _b === void 0 ? void 0 : _b.format()) !== null && _c !== void 0 ? _c : '' });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx("div", __assign({ className: classes.labelWrapper }, { children: !hideLabel && label && (_jsxs("label", __assign({ htmlFor: name, className: classes.label }, { children: [label, required && _jsx("span", __assign({ className: classes.required }, { children: "*" }))] }))) })), _jsxs("div", __assign({ className: classes.baseInput }, { children: [_jsx(BiTimeFive, { width: 16, height: 16 }), _jsx(TimePicker, __assign({ showSecond: false, use12Hours: true, format: 'h:mm a', onChange: function (value) { return handleChange({ name: name, value: value }); }, className: classes.input, popupClassName: clx(classes.containerDiv, popupClassName), defaultValue: moment().hour(0).minute(0) }, props))] }))] })));
};
