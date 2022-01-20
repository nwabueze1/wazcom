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
import { useState, useCallback, useEffect } from "react";
import { Table } from "../Table";
import { useSchedulerStyles } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import { Row } from "./types";
import { tableHeaders } from "./data";
import { useScheduleData } from "./hooks";
export var defaultRow = new Row();
export var Scheduler = function (_a) {
    var name = _a.name, data = _a.data, onChange = _a.onChange;
    var classes = useSchedulerStyles();
    var parseScheduleData = useScheduleData();
    var handleChange = useCallback(function (event, index, remove) {
        if (remove === void 0) { remove = false; }
        var _a = event.target, name = _a.name, value = _a.value;
        if (remove && data.length > 1) {
            data.splice(index, 1);
        }
        else {
            data[index][name] = value;
        }
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: data });
    }, [data]);
    var _b = useState(parseScheduleData(data, handleChange)), tableData = _b[0], setTableData = _b[1];
    useEffect(function () {
        var newTableData = parseScheduleData(data, handleChange);
        setTableData(newTableData);
    }, [data]);
    var addNewRow = function () {
        alert('leke');
        onChange === null || onChange === void 0 ? void 0 : onChange({ name: name, value: __spreadArray(__spreadArray([], data, true), [new Row()], false) });
    };
    return (_jsxs("div", __assign({ className: classes.tableContainer }, { children: [_jsx(Table, { headers: tableHeaders, data: tableData }, void 0), _jsxs("div", __assign({ className: classes.button, onClick: addNewRow }, { children: [_jsx(AddIcon, { className: classes.addIcon }, void 0), _jsx("p", __assign({ className: classes.buttonText }, { children: "Add more" }), void 0)] }), void 0)] }), void 0));
};
