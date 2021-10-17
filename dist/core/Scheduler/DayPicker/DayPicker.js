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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Select } from "@mui/material";
import { menuItemTableStyles, BootstrapInput } from "./styles";
var days = [
    { id: 0, name: "Everyday" },
    { id: 1, name: "Sunday" },
    { id: 2, name: "Monday" },
    { id: 3, name: "Tuesday" },
    { id: 4, name: "Wednesday" },
    { id: 5, name: "Thursday" },
    { id: 6, name: "Friday" },
    { id: 7, name: "Saturday" },
    { id: 8, name: "Weekdays" },
    { id: 9, name: "Weekends" },
];
export var DayPicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, label = _a.label, name = _a.name;
    var classes = menuItemTableStyles();
    return (_jsx(_Fragment, { children: _jsx(Select, __assign({ native: true, multiline: true, required: true, name: name, onChange: onChange, label: label, variant: "outlined", value: value, input: _jsx(BootstrapInput, {}, void 0) }, { children: days.map(function (_a, index) {
                var id = _a.id, name = _a.name;
                return (_jsx("option", __assign({ value: id, className: classes.option }, { children: name }), index));
            }) }), void 0) }, void 0));
};
