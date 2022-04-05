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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DayPicker } from "./DayPicker/DayPicker";
import { TimeSelector } from "./TimePicker/TimePicker";
export var useScheduleData = function () {
    return function (scheduleData, handleChange, classNames) {
        var data = [];
        scheduleData.forEach(function (schedule, index) {
            var parsedSchedule = {};
            parsedSchedule["day"] = (_jsx("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.dayContainer }, { children: _jsx(DayPicker, { name: "day", label: "Enter Site Name", value: schedule.day, onChange: function (event) { return handleChange(event, index); } }, void 0) }), void 0));
            parsedSchedule["time_section"] = (_jsxs("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.timeSection }, { children: [_jsx(TimeSelector, { name: "start_time", value: schedule.start_time, onChange: function (event) { return handleChange(event, index); } }, void 0), _jsx("p", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.timeDivider }, { children: "to" }), void 0), _jsx(TimeSelector, { name: "end_time", value: schedule.end_time, onChange: function (event) { return handleChange(event, index); } }, void 0)] }), void 0));
            data.push(parsedSchedule);
        });
        return data;
    };
};
