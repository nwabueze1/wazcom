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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
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
import { useEffect, useRef, useState } from "react";
import { useTableStyles } from "./styles";
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, TableFooter, } from "@mui/material";
import _ from "lodash";
import { generateNumbersBetweenRange, useGetCurrentPage, useGetRowsPerPage, useHandleChangePage, useHandleChangeRowsPerPage, useHandleControlsChange, useUpdateTableValue, } from "./helpers";
import { TablePagination, TableControls } from "./components";
import clx from "classnames";
import { EmptyState } from "../../core";
export var Table = function (_a) {
    var className = _a.className, headers = _a.headers, initialTableValue = _a.value, hasCheckBox = _a.hasCheckBox, _b = _a.pagination, pagination = _b === void 0 ? true : _b, changePage = _a.changePage, rowsPerPage = _a.rowsPerPage, emptyTableState = _a.emptyTableState, changeRowsPerPage = _a.changeRowsPerPage, _c = _a.paginatorInfo, paginatorInfo = _c === void 0 ? { total: 1, currentPage: 1, perPage: 20 } : _c, controls = _a.controls, classNames = _a.classNames, props = __rest(_a, ["className", "headers", "value", "hasCheckBox", "pagination", "changePage", "rowsPerPage", "emptyTableState", "changeRowsPerPage", "paginatorInfo", "controls", "classNames"]);
    var classes = useTableStyles();
    var tableRef = useRef(null);
    var _d = __read(useState(initialTableValue), 2), tableValue = _d[0], setTableValue = _d[1];
    var _e = __read(useState(headers), 2), tableHeaders = _e[0], setTableHeaders = _e[1];
    var _f = __read(useState({}), 2), controlsFormData = _f[0], setControlsFormData = _f[1];
    var _g = __read(useState(false), 2), showFilter = _g[0], setShowFilter = _g[1];
    var _h = __read(useState([]), 2), filters = _h[0], setFilters = _h[1];
    var _j = __read(useState([]), 2), selectedRows = _j[0], setSelectedRows = _j[1];
    // All Handler functions are defined as hooks
    var handleChangePage = useHandleChangePage(changePage);
    var getCurrentPage = useGetCurrentPage(paginatorInfo);
    var getRowsPerPage = useGetRowsPerPage(paginatorInfo, rowsPerPage);
    var handleChangeRowsPerPage = useHandleChangeRowsPerPage(changeRowsPerPage, changePage);
    var handleControlsChange = useHandleControlsChange(setControlsFormData);
    var handleSelectAllRows = function () {
        return setSelectedRows(function (rows) {
            if (rows.length === tableValue.length) {
                return [];
            }
            return generateNumbersBetweenRange(initialTableValue.length);
        });
    };
    var handleSelectRow = function (index) {
        return setSelectedRows(function (rows) {
            var item = rows.findIndex(function (row) { return row == index; });
            if (item !== -1) {
                rows.splice(item, 1);
                return __spreadArray([], __read(rows), false);
            }
            return __spreadArray(__spreadArray([], __read(rows), false), [index], false);
        });
    };
    useEffect(function () {
        useUpdateTableValue(setTableValue, initialTableValue, controlsFormData, filters);
    }, [controlsFormData, filters]);
    useEffect(function () {
        setTableValue(initialTableValue);
    }, [initialTableValue]);
    useEffect(function () {
        if (_.size(initialTableValue) > 0 && _.size(headers) == 0) {
            setTableHeaders(Object.keys(initialTableValue[0]).map(function (key) { return ({
                name: key,
                label: key,
            }); }));
        }
    }, [initialTableValue, headers]);
    return (_jsxs("div", __assign({ className: clx(classes.tableRoot, className) }, { children: [controls && (_jsx(TableControls, { handleControlsChange: handleControlsChange, setShowFilter: setShowFilter, controls: controls, tableValues: tableValue, controlsFormData: controlsFormData, showFilter: showFilter, fields: tableHeaders, values: initialTableValue, filters: filters, setFilters: setFilters, tableRef: tableRef }, void 0)), _jsx(TableContainer, __assign({ component: Paper, ref: tableRef }, { children: _jsxs(MuiTable, __assign({ classes: {
                        root: classes.root,
                    } }, props, { children: [_jsx(TableHead, __assign({ className: clx(classes.tableHead, classNames === null || classNames === void 0 ? void 0 : classNames.tableHead) }, { children: _jsxs(TableRow, { children: [hasCheckBox && (_jsx(TableCell, __assign({ padding: "checkbox" }, { children: _jsx(Checkbox, { onChange: handleSelectAllRows, checked: selectedRows.length === tableValue.length }, void 0) }), void 0)), tableHeaders.map(function (_a) {
                                        var name = _a.name, label = _a.label;
                                        return (_jsx(TableCell, __assign({ className: classes.tableHeadCell }, { children: label }), name));
                                    })] }, void 0) }), void 0), _jsxs(TableBody, { children: [tableValue === null || tableValue === void 0 ? void 0 : tableValue.map(function (row, index) {
                                    return (_jsxs(TableRow, __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.tableBody }, { children: [hasCheckBox && (_jsx(TableCell, __assign({ padding: "checkbox" }, { children: _jsx(Checkbox, { checked: selectedRows.includes(index), onChange: function () { return handleSelectRow(index); } }, void 0) }), void 0)), tableHeaders.map(function (_a) {
                                                var name = _a.name;
                                                return (_jsx(TableCell, __assign({ className: classes.tableCell }, { children: row === null || row === void 0 ? void 0 : row[name] }), name));
                                            })] }), index));
                                }), _jsx(TableRow, { children: _jsx(TableCell, __assign({ colSpan: 1000 }, { children: tableValue.length < 1 && (_jsx(EmptyState, __assign({ className: classes.empty }, emptyTableState), void 0)) }), void 0) }, void 0)] }, void 0), pagination && tableValue.length > 1 && (_jsx(TableFooter, __assign({ className: classNames === null || classNames === void 0 ? void 0 : classNames.tableFooter }, { children: _jsx(TableRow, { children: _jsx(TablePagination, { onRowsPerPageChange: handleChangeRowsPerPage, count: paginatorInfo === null || paginatorInfo === void 0 ? void 0 : paginatorInfo.total, rowsPerPage: Number(getRowsPerPage), onPageChange: handleChangePage, page: getCurrentPage }, void 0) }, void 0) }), void 0))] }), void 0) }), void 0)] }), void 0));
};
