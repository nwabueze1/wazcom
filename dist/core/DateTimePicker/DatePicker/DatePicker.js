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
import { menuItemTableStyles } from "./styles";
import { BiCalendarAlt } from "react-icons/bi";
export var DayPicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, name = _a.name;
    var classes = menuItemTableStyles();
    var _b = __read(useState("text"), 2), type = _b[0], setType = _b[1];
    var _c = __read(useState("Select Date"), 2), defaultValue = _c[0], setDefaultValue = _c[1];
    return (_jsx(TextField, { id: "time", type: type, onChange: onChange, defaultValue: defaultValue, name: name, InputProps: {
            classes: { root: classes.textInput },
            endAdornment: (type == "text" ?
                _jsx(InputAdornment, __assign({ position: "end" }, { children: _jsx(BiCalendarAlt, { className: classes.icon }, void 0) }), void 0)
                :
                    null),
        }, onFocus: function () {
            setType("date");
            setDefaultValue(value);
        } }, void 0));
};
