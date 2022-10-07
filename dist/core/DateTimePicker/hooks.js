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
import { DayPicker } from "./DatePicker/DatePicker";
import { TimeSelector } from "./TimePicker/TimePicker";
export var useScheduleData = function () {
    return function (scheduleData, handleChange, classNames) {
        var data = [];
        scheduleData.forEach(function (schedule, index) {
            var parsedSchedule = {};
            parsedSchedule["day"] = (_jsx("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.dayContainer }, { children: _jsx(DayPicker, { name: "day", value: schedule.day, scheduleData: scheduleData, onChange: function (event) { return handleChange(event, index); } }, void 0) }), void 0));
            parsedSchedule["time_section"] = (_jsx("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.timeSection }, { children: _jsx(TimeSelector, { name: "time", value: schedule.time, onChange: function (event) { return handleChange(event, index); } }, void 0) }), void 0));
            data.push(parsedSchedule);
        });
        return data;
    };
};
