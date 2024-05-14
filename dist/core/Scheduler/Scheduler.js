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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { useSchedulerStyles } from "./styles";
import { dayOptions } from "./hooks";
import { TimeInput, SelectInput } from "../../io";
import { Button } from "../../core";
import { FaTimes } from "react-icons/fa";
import clx from "classnames";
export var Scheduler = function (_a) {
    var className = _a.className, name = _a.name, label = _a.label, _b = _a.value, value = _b === void 0 ? [] : _b, onChange = _a.onChange, _c = _a.required, required = _c === void 0 ? false : _c;
    var classes = useSchedulerStyles();
    var _d = __read(useState({
        day: "2",
        start_time: "9:00",
        end_time: "17:00",
    }), 2), schedule = _d[0], setSchedule = _d[1];
    var dayDelimiter = "2023-08-23";
    var handleAdd = useCallback(function () {
        var parsedValue = value.map(function (scheduleValue) { return JSON.stringify(scheduleValue); });
        if (parsedValue.includes(JSON.stringify(schedule)))
            return;
        if (convertToMinutes(schedule.end_time) <= convertToMinutes(schedule.start_time))
            return;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: __spreadArray(__spreadArray([], __read(value), false), [schedule], false) });
    }, [schedule]);
    var convertToMinutes = function (time) {
        var _a = __read(time.split(":"), 2), hour = _a[0], minutes = _a[1];
        return Number(hour) * 60 + Number(minutes);
    };
    var handleRemove = function (index) {
        var newValue = value === null || value === void 0 ? void 0 : value.filter(function (_, valueIndex) { return valueIndex !== index; });
        if (required && newValue.length === 0)
            return;
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: newValue });
    };
    var handleScheduleChange = function (key, value) {
        var _a;
        var parsedValue = value;
        if (key.includes("time")) {
            parsedValue = value.split(dayDelimiter + "T")[1];
            parsedValue = parsedValue.split("+")[0];
        }
        var updatedSchedule = __assign(__assign({}, schedule), (_a = {}, _a[key] = parsedValue, _a));
        setSchedule(updatedSchedule);
    };
    var parseTime = function (time) {
        var timeSplits = time.split(":");
        var hour = Number(timeSplits[0]);
        return "".concat(hour > 12 ? hour - 12 : hour, ":").concat(timeSplits[1]);
    };
    var getTimeExtension = function (time) {
        var timeSplits = time.split(":");
        var hour = Number(timeSplits[0]);
        return hour > 11 ? "pm" : "am";
    };
    var renderSchedules = function () {
        return value.map(function (_a, index) {
            var _b;
            var day = _a.day, start_time = _a.start_time, end_time = _a.end_time;
            return (_jsxs("p", __assign({ className: classes.schedule }, { children: [_jsxs("span", { children: [(_b = dayOptions.find(function (_a) {
                                var value = _a.value;
                                return value === day;
                            })) === null || _b === void 0 ? void 0 : _b.label, " (", parseTime(start_time), " ", getTimeExtension(start_time), " - ", parseTime(end_time), " ", getTimeExtension(end_time), ")", " "] }), _jsx(FaTimes, { className: classes.scheduleIcon, onClick: function () {
                            handleRemove(index);
                        } })] }), index));
        });
    };
    return (_jsxs("div", __assign({ className: clx(classes.root, className) }, { children: [_jsx(SelectInput, { name: "day", label: label, value: schedule.day, options: dayOptions, className: classes.selectInput, onChange: function (_a) {
                    var value = _a.value;
                    return handleScheduleChange("day", value);
                } }), value.length > 0 && _jsx("div", __assign({ className: classes.scheduleContainer }, { children: renderSchedules() })), _jsxs("div", __assign({ className: classes.timeContainer }, { children: [_jsx(TimeInput, { name: "start_time", label: "SET TIME", value: dayDelimiter + " " + schedule.start_time, className: classes.timeInput, onChange: function (_a) {
                            var value = _a.value;
                            return handleScheduleChange("start_time", value);
                        } }), _jsx("p", __assign({ className: classes.timeDivider }, { children: "TO" })), _jsx(TimeInput, { name: "end_time", value: dayDelimiter + " " + schedule.end_time, className: classes.timeInput, onChange: function (_a) {
                            var value = _a.value;
                            return handleScheduleChange("end_time", value);
                        } })] })), _jsx(Button, __assign({ className: classes.scheduleButton, onClick: handleAdd, type: "button" }, { children: "Add" }))] })));
};
