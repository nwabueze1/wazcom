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
import CloseIcon from "@mui/icons-material/Close";
import clx from "classnames";
import { TimeInput, SelectInput } from "../../io";
import { useSchedulerStyles } from "./styles";
export var dayOptions = [
    { value: "0", label: "Everyday" },
    { value: "1", label: "Sunday" },
    { value: "2", label: "Monday" },
    { value: "3", label: "Tuesday" },
    { value: "4", label: "Wednesday" },
    { value: "5", label: "Thursday" },
    { value: "6", label: "Friday" },
    { value: "7", label: "Saturday" },
    { value: "8", label: "Weekdays" },
    { value: "9", label: "Weekends" },
];
export var useScheduleData = function () {
    var classes = useSchedulerStyles();
    return function (scheduleData, handleChange, classNames) {
        var data = [];
        scheduleData.forEach(function (schedule, index) {
            var parsedSchedule = {};
            parsedSchedule["day"] = (_jsx(SelectInput, { name: "day", value: schedule.day, options: dayOptions, onChange: function (_a) {
                    var name = _a.name, value = _a.value;
                    return handleChange(name, value, index);
                } }));
            parsedSchedule["time_section"] = (_jsxs("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.timeSection }, { children: [_jsx(TimeInput, { name: "start_time", value: dayDelimiter + " " + schedule.start_time, onChange: function (_a) {
                            var name = _a.name, value = _a.value;
                            return handleChange(name, value, index);
                        }, className: classes.timeInput }), _jsx("p", __assign({ className: classes.timeDivider }, { children: "TO" })), _jsx(TimeInput, { name: "end_time", value: dayDelimiter + " " + schedule.end_time, onChange: function (_a) {
                            var name = _a.name, value = _a.value;
                            return handleChange(name, value, index);
                        }, className: classes.timeInput }), _jsx(CloseIcon, { onClick: function () { return handleChange("", "", index, true); }, className: clx(scheduleData.length > 1 ? classNames === null || classNames === void 0 ? void 0 : classNames.closeIcon : classNames === null || classNames === void 0 ? void 0 : classNames.hiddenCloseIcon), color: "secondary" })] })));
            data.push(parsedSchedule);
        });
        return data;
    };
};
export var dayDelimiter = "2023-04-14";
