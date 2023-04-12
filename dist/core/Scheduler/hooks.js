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
import CloseIcon from "@mui/icons-material/Close";
import clx from "classnames";
import { TimeInput } from "../../io";
import { useSchedulerStyles } from "./styles";
export var useScheduleData = function () {
    var classes = useSchedulerStyles();
    return function (scheduleData, handleChange, classNames) {
        var data = [];
        scheduleData.forEach(function (schedule, index) {
            var parsedSchedule = {};
            parsedSchedule["day"] = (_jsx("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.dayContainer }, { children: _jsx(DayPicker, { name: "day", label: "Enter Site Name", value: schedule.day, scheduleData: scheduleData, onChange: function (event) { return handleChange(event, index); } }) })));
            parsedSchedule["time_section"] = (_jsxs("div", __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.timeSection }, { children: [_jsx(TimeInput, { name: "start_time", value: '2023-04-14 ' + schedule.start_time, onChange: function (event) { return handleChange(event, index); } }), _jsx("p", __assign({ className: classes.timeDivider }, { children: "TO" })), _jsx(TimeInput, { name: "end_time", value: '2023-04-14 ' + schedule.end_time, onChange: function (event) { return handleChange(event, index); } }), _jsx(CloseIcon, { onClick: function (event) { return handleChange(event, index, true); }, className: clx(index !== 0 ? classNames === null || classNames === void 0 ? void 0 : classNames.closeIcon : classNames === null || classNames === void 0 ? void 0 : classNames.hiddenCloseIcon), color: "secondary" })] })));
            data.push(parsedSchedule);
        });
        return data;
    };
};
