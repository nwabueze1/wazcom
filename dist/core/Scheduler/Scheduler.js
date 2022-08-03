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
import { FiPlus } from "react-icons/fi";
import { days, filterDaysOptions } from "./DayPicker/helper";
import { BlogScheduler } from "../BlogScheduler/BlogScheduler";
export var Scheduler = function (_a) {
    var _b;
    var className = _a.className, classNames = _a.classNames, componentName = _a.name, label = _a.label, _c = _a.multiple, multiple = _c === void 0 ? false : _c, _d = _a.value, initialScheduleValue = _d === void 0 ? [
        { day: "0", start_time: "00:00", end_time: "12:00" },
    ] : _d, onChange = _a.onChange, _e = _a.orientation, orientation = _e === void 0 ? "horizontal" : _e;
    var classes = useSchedulerStyles();
    var parseSchedulevalue = useScheduleData();
    var isEverydaySelected = initialScheduleValue === null || initialScheduleValue === void 0 ? void 0 : initialScheduleValue.some(function (value) { return (value === null || value === void 0 ? void 0 : value.day) == "0"; });
    var availableOption = filterDaysOptions(days, initialScheduleValue);
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
    var addNewRow = useCallback(function () {
        var nextFieldId = days.filter(function (item) { return item.id != 0 && !initialScheduleValue.some(function (option) { return Number(option.day) == item.id; }); })[0].id;
        onChange === null || onChange === void 0 ? void 0 : onChange({
            name: componentName,
            value: __spreadArray(__spreadArray([], __read(initialScheduleValue), false), [
                { day: String(nextFieldId), start_time: "01:00", end_time: "12:00" },
            ], false),
        });
    }, [initialScheduleValue]);
    var _f = __read(useState(parseSchedulevalue(initialScheduleValue, handleChange, {
        timeSection: classes.timeContainer,
        timeDivider: classes.timeDivider,
        closeIcon: classes.closeIcon,
        hiddenCloseIcon: classes.hidden,
    })), 2), scheduleValue = _f[0], setScheduleValue = _f[1];
    useEffect(function () {
        var newScheduleValue = parseSchedulevalue(initialScheduleValue, handleChange, {
            timeSection: classes.timeContainer,
            timeDivider: classes.timeDivider,
            closeIcon: classes.closeIcon,
            hiddenCloseIcon: classes.hidden,
        });
        setScheduleValue(newScheduleValue);
    }, [initialScheduleValue]);
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [label && (_jsx(InputLabel, __assign({ className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: componentName }, { children: label }), void 0)), scheduleValue === null || scheduleValue === void 0 ? void 0 : scheduleValue.map(function (row, index) {
                return (_jsx("div", __assign({ className: "".concat(classes.schedulerContainer, " ").concat(orientation == "vertical" && classes.verticalContainer) }, { children: fields.map(function (_a) {
                        var name = _a.name;
                        return row === null || row === void 0 ? void 0 : row[name];
                    }) }), index));
            }), multiple && !isEverydaySelected && (_jsx("div", __assign({ className: "".concat(classes.button, " ").concat(availableOption.length == 0 && classes.hidden), onClick: addNewRow }, { children: _jsxs("p", __assign({ className: classes.buttonText }, { children: [_jsx(FiPlus, { className: classes.addIcon }, void 0), " Add Schedule"] }), void 0) }), void 0)), _jsx(BlogScheduler, {}, void 0)] }), void 0));
};
