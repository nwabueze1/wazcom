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
import { useSchedulerStyles } from "./styles";
import { InputLabel } from "@mui/material";
import { fields } from "./data";
import { useScheduleData } from "./hooks";
import clx from "classnames";
export var Scheduler = function (_a) {
    var className = _a.className, componentName = _a.name, label = _a.label, labelClassName = _a.labelClassName, _b = _a.value, initialScheduleValue = _b === void 0 ? [
        { day: "0", start_time: "00:00", time_divider: "to", end_time: "12:00" },
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
    var _c = __read(useState(parseSchedulevalue(initialScheduleValue, handleChange, {
        timeSection: classes.schedulerContainer,
    })), 2), scheduleValue = _c[0], setScheduleValue = _c[1];
    console.log(scheduleValue);
    useEffect(function () {
        var newScheduleValue = parseSchedulevalue(initialScheduleValue, handleChange, {
            timeSection: classes.schedulerContainer,
            timeDivider: classes.timeDivider,
        });
        setScheduleValue(newScheduleValue);
    }, [initialScheduleValue]);
    // const addNewRow = useCallback(() => {
    //   onChange?.({
    //     name: componentName as string,
    //     value: [
    //       ...initialScheduleValue,
    //       { day: "0", start_time: "00:00", time_divider: "to", end_time: "12:00" },
    //     ],
    //   });
    // }, [initialScheduleValue]);
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsx(InputLabel, __assign({ className: clx(classes.label, labelClassName), htmlFor: componentName }, { children: label }), void 0)), scheduleValue === null || scheduleValue === void 0 ? void 0 : scheduleValue.map(function (row, index) {
                return (
                // <TableRow key={index}>
                _jsx("div", __assign({ className: classes.schedulerContainer }, { children: fields.map(function (_a) {
                        var name = _a.name;
                        console.log(row === null || row === void 0 ? void 0 : row[name]);
                        return (
                        // <TableCell key={name} className={classes.tableCell}>
                        row === null || row === void 0 ? void 0 : row[name]
                        // </TableCell>
                        );
                    }) }), index)
                // </TableRow>
                );
            })] }), void 0));
};
