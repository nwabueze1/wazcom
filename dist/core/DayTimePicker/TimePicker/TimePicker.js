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
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useTimePickerStyles } from "./styles";
import ScheduleIcon from '@mui/icons-material/Schedule';
export var TimeSelector = function (_a) {
    var onChange = _a.onChange, name = _a.name, value = _a.value;
    var classes = useTimePickerStyles();
    var _b = __read(useState("text"), 2), inputType = _b[0], setInputType = _b[1];
    var _c = __read(useState("Select Time"), 2), defaultValue = _c[0], setDefaultValue = _c[1];
    return (_jsx(TextField, { id: "time", type: inputType, value: defaultValue, onChange: onChange, name: name, className: classes.textField, InputProps: {
            classes: { root: classes.inputRoot },
            endAdornment: (_jsx(InputAdornment, __assign({ position: "end" }, { children: _jsx(ScheduleIcon, { className: classes.scheduleIcon }, void 0) }), void 0)),
        }, onFocus: function () {
            setInputType("time");
            setDefaultValue(value);
        } }, void 0));
};
