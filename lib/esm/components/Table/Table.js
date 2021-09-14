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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "../Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTableStyles } from "./styles";
import TextField from "@material-ui/core/TextField";
var BasicTable = function (_a) {
    var handleChangeInput = _a.handleChangeInput;
    var _b = useState([
        {
            day: "",
            start: "",
            end: "",
            action: "",
        },
    ]), inputFields = _b[0], setInputField = _b[1];
    var classes = useTableStyles();
    var handleAddFields = function () {
        setInputField(__spreadArray(__spreadArray([], inputFields), [
            {
                day: "",
                start: "",
                end: "",
                action: "",
            },
        ]));
    };
    var handleRemoveFields = function (index) {
        var values = __spreadArray([], inputFields);
        values.splice(index, 1);
        setInputField(values);
    };
    return (_jsxs(TableContainer, __assign({ className: classes.tableCont }, { children: [_jsxs(Table, __assign({ className: classes.table, "aria-label": "simple table" }, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, __assign({ className: classes.tableHead }, { children: "Days/No of Days" }), void 0), _jsx(TableCell, __assign({ className: classes.tableHead, align: "right" }, { children: "Start time" }), void 0), _jsx(TableCell, __assign({ className: classes.tableHead, align: "right" }, { children: "End Time" }), void 0), _jsx(TableCell, __assign({ className: classes.tableHead, align: "right" }, { children: "Action" }), void 0)] }, void 0) }, void 0), _jsx(TableBody, { children: inputFields.map(function (inputFields, index) { return (_jsxs(TableRow, { children: [_jsx(TableCell, __assign({ className: classes.tableCell, component: "th", scope: "row" }, { children: _jsxs(FormControl, { children: [_jsx(InputLabel, { id: "demo-simple-select-outlined-label" }, void 0), _jsxs(Select, __assign({ name: "choice", id: "demo-simple-select-outlined", value: inputFields.day === ""
                                                    ? "Pick a day / days"
                                                    : inputFields.day, onChange: function (event) { return handleChangeInput(index, event); }, className: classes.select }, { children: [_jsx(MenuItem, __assign({ value: "Pick a day / days" }, { children: _jsx("em", { children: "Pick a day / days" }, void 0) }), void 0), _jsx(MenuItem, __assign({ value: 10 }, { children: "Monday" }), void 0), _jsx(MenuItem, __assign({ value: 20 }, { children: "Tuesday" }), void 0), _jsx(MenuItem, __assign({ value: 30 }, { children: "Wednesday" }), void 0)] }), void 0)] }, void 0) }), void 0), _jsx(TableCell, __assign({ className: classes.tableCell, align: "right" }, { children: _jsx(TextField, { name: "start", onChange: function (event) { return handleChangeInput(index, event); }, type: "time" }, void 0) }), void 0), _jsx(TableCell, __assign({ className: classes.tableCell, align: "right" }, { children: _jsx(TextField, { name: "end", onChange: function (event) { return handleChangeInput(index, event); }, type: "time" }, void 0) }), void 0), _jsx(TableCell, __assign({ className: classes.tableCell, align: "right" }, { children: index >= 1 ? (_jsx(DeleteIcon, { style: { color: "red", fontSize: "33", cursor: "pointer" }, onClick: function () { return handleRemoveFields(index); } }, void 0)) : (inputFields.action) }), void 0)] }, index)); }) }, void 0)] }), void 0), _jsxs(Button, __assign({ className: classes.addTable, size: "small", onClick: function () { return handleAddFields(); } }, { children: [_jsx(AddIcon, {}, void 0), " Add More"] }), void 0)] }), void 0));
};
export default BasicTable;
