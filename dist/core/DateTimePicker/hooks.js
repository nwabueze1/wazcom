import { jsx as _jsx } from "react/jsx-runtime";
import { DayPicker } from "./DatePicker/DatePicker";
import { TimeSelector } from "./TimePicker/TimePicker";
export var useScheduleData = function () {
    return function (scheduleData, handleChange, classNames) {
        var data = [];
        scheduleData.forEach(function (schedule, index) {
            var parsedSchedule = {};
            parsedSchedule["day"] = (_jsx("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.dayContainer, children: _jsx(DayPicker, { name: "day", value: schedule.day, scheduleData: scheduleData, onChange: function (event) { return handleChange(event, index); } }) }));
            parsedSchedule["time_section"] = (_jsx("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.timeSection, children: _jsx(TimeSelector, { name: "time", value: schedule.time, onChange: function (event) { return handleChange(event, index); } }) }));
            data.push(parsedSchedule);
        });
        return data;
    };
};
