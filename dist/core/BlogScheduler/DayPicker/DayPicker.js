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
import { days, filterDaysOptions } from "./helper";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
export var DayPicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, label = _a.label, name = _a.name, scheduleData = _a.scheduleData;
    var classes = menuItemTableStyles();
    var filteredOptions = filterDaysOptions(days, scheduleData);
    return (_jsx(_Fragment, { children: _jsx(Select, __assign({ IconComponent: function () { return _jsx(CalendarTodayIcon, {}, void 0); }, renderValue: function () { return _jsx(CalendarTodayIcon, {}, void 0); }, native: true, multiline: true, required: true, name: name, onChange: onChange, label: label, variant: "outlined", value: value, input: _jsx(BootstrapInput, {}, void 0), className: classes.dayPicker }, { children: days.map(function (day) { return (_jsx("option", __assign({ value: String(day.id), className: classes.option, disabled: !filteredOptions.includes(day), hidden: !filteredOptions.includes(day) }, { children: day.name }), day.id)); }) }), void 0) }, void 0));
};
