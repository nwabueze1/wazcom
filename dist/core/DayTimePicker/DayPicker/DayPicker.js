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
import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from "@mui/material";
import { menuItemTableStyles } from "./styles";
import { days, filterDaysOptions } from "./helper";
import { AiOutlineCalendar } from "react-icons/ai";
export var DayPicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, name = _a.name, scheduleData = _a.scheduleData;
    var classes = menuItemTableStyles();
    var filteredOptions = filterDaysOptions(days, scheduleData);
    return (_jsx(Select, __assign({ IconComponent: function () { return _jsx(AiOutlineCalendar, { className: classes.calendarIcon }, void 0); }, native: true, multiline: true, required: true, name: name, onChange: onChange, variant: "outlined", value: value, className: classes.dayPicker }, { children: days.map(function (day) { return (_jsx("option", __assign({ value: String(day.id), className: classes.option, disabled: !filteredOptions.includes(day), hidden: day.name == "Select Day" }, { children: day.name }), day.id)); }) }), void 0));
};
