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
import { fields } from "../../helpers/data";
import { useScheduleData } from "./hooks";
import clx from "classnames";
export var DateTimePicker = function (_a) {
    var _b;
    var className = _a.className, classNames = _a.classNames, componentName = _a.name, label = _a.label, _c = _a.value, initialScheduleValue = _c === void 0 ? [{ day: "2022-0-0", time: "00:00" }] : _c, onChange = _a.onChange, _d = _a.orientation, orientation = _d === void 0 ? "horizontal" : _d;
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
            newValue[index] = { day: name, time: value };
        }
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: componentName, value: newValue });
    }, [initialScheduleValue]);
    var _e = __read(useState(parseSchedulevalue(initialScheduleValue, handleChange, {
        timeSection: classes.timeContainer,
        timeDivider: classes.timeDivider,
        closeIcon: classes.closeIcon,
        hiddenCloseIcon: classes.hidden,
        dayContainer: classes.dayContainer,
    })), 2), scheduleValue = _e[0], setScheduleValue = _e[1];
    useEffect(function () {
        var newScheduleValue = parseSchedulevalue(initialScheduleValue, handleChange, {
            timeSection: classes.timeContainer,
            timeDivider: classes.timeDivider,
            closeIcon: classes.closeIcon,
            hiddenCloseIcon: classes.hidden,
            dayContainer: classes.dayContainer,
        });
        setScheduleValue(newScheduleValue);
    }, [initialScheduleValue]);
    return (_jsxs("div", { className: clx(classes.root, className), children: [label && (_jsx(InputLabel, { className: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.label) !== null && _b !== void 0 ? _b : "", htmlFor: componentName, children: label })), scheduleValue === null || scheduleValue === void 0 ? void 0 : scheduleValue.map(function (row, index) {
                return (_jsx("div", { className: "".concat(classes.schedulerContainer, " ").concat(orientation == "vertical" && classes.verticalContainer), children: fields
                        .map(function (_a) {
                        var name = _a.name;
                        return row === null || row === void 0 ? void 0 : row[name];
                    })
                        .reverse() }, index));
            })] }));
};
