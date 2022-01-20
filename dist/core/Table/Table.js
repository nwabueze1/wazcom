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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useTableStyles } from "./styles";
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, } from "@mui/material";
export var Table = function (_a) {
    var headers = _a.headers, initialTableData = _a.data, hasCheckBox = _a.hasCheckBox, props = __rest(_a, ["headers", "data", "hasCheckBox"]);
    var classes = useTableStyles();
    var _b = useState(initialTableData), tableData = _b[0], setTableData = _b[1];
    useEffect(function () {
        setTableData(initialTableData);
        console.log(initialTableData);
    }, [initialTableData]);
    return (_jsx(TableContainer, __assign({ component: Paper }, { children: _jsxs(MuiTable, __assign({ classes: {
                root: classes.root,
            } }, props, { children: [_jsx(TableHead, __assign({ className: classes.tableHead }, { children: _jsxs(TableRow, { children: [hasCheckBox && (_jsx(TableCell, __assign({ padding: "checkbox" }, { children: _jsx(Checkbox, {}, void 0) }), void 0)), headers.map(function (_a) {
                                var name = _a.name, label = _a.label;
                                return (_jsx(TableCell, __assign({ className: classes.tableHeadCell }, { children: label }), name));
                            })] }, void 0) }), void 0), _jsx(TableBody, { children: tableData === null || tableData === void 0 ? void 0 : tableData.map(function (row, index) {
                        return (_jsxs(TableRow, { children: [hasCheckBox && (_jsx(TableCell, __assign({ padding: "checkbox" }, { children: _jsx(Checkbox, {}, void 0) }), void 0)), headers.map(function (_a) {
                                    var name = _a.name;
                                    return (_jsx(TableCell, __assign({ className: classes.tableCell }, { children: row === null || row === void 0 ? void 0 : row[name] }), name));
                                })] }, index));
                    }) }, void 0)] }), void 0) }), void 0));
};
