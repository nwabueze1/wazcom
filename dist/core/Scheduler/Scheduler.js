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
import { useState, useCallback, useEffect } from "react";
import { Table } from "../Table";
import { useSchedulerStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { tableHeaders } from "./data";
import { useScheduleData } from "./hooks";
import clx from "classnames";
export var Scheduler = function (_a) {
    var className = _a.className, componentName = _a.name, label = _a.label, _b = _a.value, initialScheduleValue = _b === void 0 ? [
        { day: "0", start_time: "00:00", end_time: "12:00" },
    ] : _b, onChange = _a.onChange;
    var classes = useSchedulerStyles();
    var parseSchedulevalue = useScheduleData();
    var handleChange = useCallback(function (event, index, remove) {
        if (remove === void 0) { remove = false; }
        var _a = event.target, name = _a.name, value = _a.value;
        var newValue = __spreadArray([], __read(initialScheduleValue), false);
        if (remove && newValue.length > 1) {
            newValue.splice(index, 1);
        }
        else {
            newValue[index][name] = value;
        }
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: componentName, value: newValue });
    }, [initialScheduleValue]);
    var _c = __read(useState(parseSchedulevalue(initialScheduleValue, handleChange)), 2), scheduleValue = _c[0], setScheduleValue = _c[1];
    useEffect(function () {
        var newScheduleValue = parseSchedulevalue(initialScheduleValue, handleChange);
        setScheduleValue(newScheduleValue);
    }, [initialScheduleValue]);
    var addNewRow = useCallback(function () {
        onChange === null || onChange === void 0 ? void 0 : onChange({
            name: componentName,
            value: __spreadArray(__spreadArray([], __read(initialScheduleValue), false), [
                { day: "0", start_time: "00:00", end_time: "12:00" },
            ], false),
        });
    }, [initialScheduleValue]);
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsx(InputLabel, __assign({ className: classes.label, htmlFor: componentName }, { children: label }), void 0)), _jsx(Table, { headers: tableHeaders, value: scheduleValue }, void 0), _jsx("div", __assign({ className: classes.button, onClick: addNewRow }, { children: _jsx("p", __assign({ className: classes.buttonText }, { children: "Add more" }), void 0) }), void 0)] }), void 0));
};
