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
import { Table } from "../Table";
import { useState, useCallback, useEffect } from "react";
import { useSchedulerStyles } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import { TimeSelector } from "./TimePicker/TimePicker";
import { DayPicker } from "./DayPicker/DayPicker";
import CloseIcon from "@mui/icons-material/Close";
var Row = /** @class */ (function () {
    function Row() {
        this.day = "0";
        this.start_time = "00:00:00";
        this.end_time = "12:00:00";
    }
    return Row;
}());
export var defaultRow = new Row();
export var Scheduler = function (_a) {
    var data = _a.data, onChange = _a.onChange;
    var classes = useSchedulerStyles();
    var parseScheduleData = function (scheduleData) {
        var data = [];
        scheduleData.forEach(function (schedule, index) {
            var parsedSchedule = {};
            parsedSchedule['day'] = (_jsx(DayPicker, { name: "day", label: "Enter Site Name", value: schedule['day'], onChange: function (event) { return handleChange(event, index); } }, void 0));
            parsedSchedule['start_time'] = (_jsx(TimeSelector, { name: "start_time", value: schedule["start_time"], onChange: function (event) { return handleChange(event, index); } }, void 0));
            parsedSchedule['end_time'] = (_jsx(TimeSelector, { name: "end_time", value: schedule["end_time"], onChange: function (event) { return handleChange(event, index); } }, void 0));
            parsedSchedule['action'] = (_jsx(CloseIcon, { onClick: function () { return (handleChange(event, index, true)); }, style: { cursor: "pointer" }, color: "secondary" }, void 0));
            data.push(parsedSchedule);
        });
        return data;
    };
    var _b = useState(parseScheduleData(data)), tableData = _b[0], setTableData = _b[1];
    useEffect(function () {
        // console.log(data);
        var newTableData = parseScheduleData(data);
        setTableData(newTableData);
    }, [data]);
    var handleChange = useCallback(function (_a, index, remove) {
        var _b = _a.target, name = _b.name, value = _b.value;
        if (remove === void 0) { remove = false; }
        if (remove && data.length > 1) {
            data.splice(index, 1);
        }
        else {
            data[index][name] = value;
        }
        onChange(__spreadArray([], data, true));
    }, [data]);
    var addNewRow = function () {
        onChange(__spreadArray(__spreadArray([], data, true), [new Row()], false));
    };
    var tableHeaders = [
        {
            name: 'day',
            label: 'Days/ No. of Days'
        },
        {
            name: 'start_time',
            label: "Start Time"
        },
        {
            name: 'end_time',
            label: "End Time"
        },
        {
            name: 'action',
            label: "Action"
        }
    ];
    return (_jsxs("div", __assign({ className: classes.tableContainer }, { children: [_jsx(Table, { headers: tableHeaders, data: tableData }, void 0), _jsxs("div", __assign({ className: classes.button, onClick: addNewRow }, { children: [_jsx(AddIcon, { style: { fontSize: 19 } }, void 0), _jsx("p", __assign({ className: classes.buttonText }, { children: "Add more" }), void 0)] }), void 0)] }), void 0));
};
