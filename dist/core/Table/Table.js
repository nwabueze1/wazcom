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
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, TableFooter, TablePagination, Box, } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import _, { startCase } from "lodash";
import { Button } from "../Button";
import { TextInput } from "../../io";
import { useGetCurrentPage, useGetRowsPerPage, useHandleChangePage, useHandleChangeRowsPerPage, useHandleControlsChange, useUpdateTableValue, } from "./helpers";
import { TableFilter } from "./components";
export var Table = function (_a) {
    var headers = _a.headers, initialTableValue = _a.value, hasCheckBox = _a.hasCheckBox, pagination = _a.pagination, changePage = _a.changePage, rowsPerPage = _a.rowsPerPage, changeRowsPerPage = _a.changeRowsPerPage, paginatorInfo = _a.paginatorInfo, controls = _a.controls, props = __rest(_a, ["headers", "value", "hasCheckBox", "pagination", "changePage", "rowsPerPage", "changeRowsPerPage", "paginatorInfo", "controls"]);
    var classes = useTableStyles();
    var _b = useState(initialTableValue), tableValue = _b[0], setTableValue = _b[1];
    var _c = useState(headers), tableHeaders = _c[0], setTableHeaders = _c[1];
    var _d = useState([]), controlsFormData = _d[0], setControls = _d[1];
    var _e = useState(false), showFilter = _e[0], setShowFilter = _e[1];
    // All Handler functions are defined as hooks
    var handleChangePage = useHandleChangePage(changePage);
    var getCurrentPage = useGetCurrentPage(paginatorInfo);
    var getRowsPerPage = useGetRowsPerPage(paginatorInfo, rowsPerPage);
    var handleChangeRowsPerPage = useHandleChangeRowsPerPage(changeRowsPerPage, changePage);
    var handleControlsChange = useHandleControlsChange(setControls);
    useEffect(function () {
        useUpdateTableValue(setTableValue, initialTableValue, controlsFormData);
    }, [controlsFormData]);
    useEffect(function () {
        setTableValue(initialTableValue);
    }, [initialTableValue]);
    useEffect(function () {
        if (_.size(initialTableValue) > 0 && _.size(headers) == 0) {
            setTableHeaders(Object.keys(initialTableValue[0]).map(function (key) { return ({
                name: key,
                label: startCase(key),
            }); }));
        }
    }, [initialTableValue, headers]);
    return (_jsxs(TableContainer, __assign({ component: Paper, className: classes.tableRoot }, { children: [controls && (_jsxs(Box, __assign({ className: classes.controls }, { children: [controls.filter && (_jsxs(Box, __assign({ className: classes.filterControls }, { children: [_jsxs(Button, __assign({ variant: "outlined", className: classes.filterControlsButton, onClick: function () { return setShowFilter(function (state) { return !state; }); } }, { children: ["Filter", _jsx(FilterAltIcon, {}, void 0)] }), void 0), _jsx(TextInput, { name: "search", type: "text", placeholder: "Search", value: controlsFormData.search, onChange: handleControlsChange }, void 0)] }), void 0)), _jsxs(Box, { children: [controls.print && _jsx(Button, { children: "Print" }, void 0), controls.export && _jsx(Button, { children: "Export" }, void 0)] }, void 0)] }), void 0)), _jsxs(MuiTable, __assign({ classes: {
                    root: classes.root,
                } }, props, { children: [_jsx(TableHead, __assign({ className: classes.tableHead }, { children: _jsxs(TableRow, { children: [hasCheckBox && (_jsx(TableCell, __assign({ padding: "checkbox" }, { children: _jsx(Checkbox, {}, void 0) }), void 0)), tableHeaders.map(function (_a) {
                                    var name = _a.name, label = _a.label;
                                    return (_jsx(TableCell, __assign({ className: classes.tableHeadCell }, { children: label }), name));
                                })] }, void 0) }), void 0), _jsx(TableBody, { children: tableValue === null || tableValue === void 0 ? void 0 : tableValue.map(function (row, index) {
                            return (_jsxs(TableRow, { children: [hasCheckBox && (_jsx(TableCell, __assign({ padding: "checkbox" }, { children: _jsx(Checkbox, {}, void 0) }), void 0)), tableHeaders.map(function (_a) {
                                        var name = _a.name;
                                        return (_jsx(TableCell, __assign({ className: classes.tableCell }, { children: row === null || row === void 0 ? void 0 : row[name] }), name));
                                    })] }, index));
                        }) }, void 0), pagination && (_jsx(TableFooter, { children: _jsx(TableRow, { children: _jsx(TablePagination, { rowsPerPageOptions: [7, 10, 20], onRowsPerPageChange: handleChangeRowsPerPage, count: paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.total, rowsPerPage: Number(getRowsPerPage), onPageChange: handleChangePage, showFirstButton: true, showLastButton: true, page: getCurrentPage, SelectProps: {
                                    inputProps: { "aria-label": "rows per page" },
                                    native: true,
                                } }, void 0) }, void 0) }, void 0))] }), void 0), _jsx(TableFilter, { showFilter: showFilter, setShowFilter: setShowFilter, fields: tableHeaders }, void 0)] }), void 0));
};
