import { jsx as _jsx } from "react/jsx-runtime";
import { DayPicker } from "./DayPicker/DayPicker";
import { TimeSelector } from "./TimePicker/TimePicker";
import CloseIcon from "@mui/icons-material/Close";
export var useScheduleData = function () {
    return function (scheduleData, handleChange) {
        var data = [];
        scheduleData.forEach(function (schedule, index) {
            var parsedSchedule = {};
            parsedSchedule["day"] = (_jsx(DayPicker, { name: "day", label: "Enter Site Name", value: schedule.day, onChange: function (event) { return handleChange(event, index); } }, void 0));
            parsedSchedule["start_time"] = (_jsx(TimeSelector, { name: "start_time", value: schedule.start_time, onChange: function (event) { return handleChange(event, index); } }, void 0));
            parsedSchedule["end_time"] = (_jsx(TimeSelector, { name: "end_time", value: schedule.end_time, onChange: function (event) { return handleChange(event, index); } }, void 0));
            parsedSchedule["action"] = (_jsx(CloseIcon, { onClick: function (event) { return handleChange(event, index, true); }, style: { cursor: "pointer" }, color: "secondary" }, void 0));
            data.push(parsedSchedule);
        });
        return data;
    };
};
