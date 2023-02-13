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
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useColumnSelectorStyles } from "./styles";
import { ClickAwayListener } from "@mui/base";
import { CheckBoxInput } from "../../../../io";
import clx from "classnames";
export var ColumnSelector = function (_a) {
    var columns = _a.columns, columnFilters = _a.columnFilters, handleColumnChange = _a.handleColumnChange;
    var _b = __read(useState(false), 2), showColumns = _b[0], setShowColumns = _b[1];
    var classes = useColumnSelectorStyles();
    var handleCheckChange = function (key, checked, all) {
        if (all === void 0) { all = false; }
        var updatedColumnFilters;
        var typedColumnFilters = columnFilters !== null && columnFilters !== void 0 ? columnFilters : [];
        if (all) {
            updatedColumnFilters = checked ? columns : [];
        }
        else if (!checked)
            updatedColumnFilters = typedColumnFilters.filter(function (_a) {
                var columnKey = _a.key;
                return columnKey !== key;
            });
        else {
            var idx = columns.findIndex(function (_a) {
                var tableKey = _a.key;
                return tableKey === key;
            });
            if (idx + 1 > typedColumnFilters.length) {
                updatedColumnFilters = __spreadArray(__spreadArray([], __read(typedColumnFilters), false), [columns[idx]], false);
            }
            else {
                updatedColumnFilters = typedColumnFilters;
                updatedColumnFilters.splice(idx, 0, columns[idx]);
            }
        }
        handleColumnChange(updatedColumnFilters);
    };
    var renderColumns = function () {
        return columns.map(function (column, index) { return (_jsxs("div", __assign({ className: classes.column }, { children: [_jsx(CheckBoxInput, { value: !columnFilters
                        ? true
                        : columnFilters.map(function (_a) {
                            var name = _a.name;
                            return name;
                        }).includes(column.name), color: "success", className: classes.columnCheckBox, classNames: { classes: { root: classes.columnCheckBoxRoot } }, onChange: function (_a) {
                        var checked = _a.value;
                        handleCheckChange(column.key, checked);
                    } }), typeof column.name === "string" ? column.name : column.key] }), index)); });
    };
    return (_jsx(ClickAwayListener, __assign({ onClickAway: function () {
            setShowColumns(false);
        } }, { children: _jsxs("div", __assign({ className: classes.root }, { children: [_jsx("p", __assign({ onClick: function () {
                        setShowColumns(!showColumns);
                    }, className: classes.columnBoxText }, { children: "Table Columns" })), _jsx(AiOutlineCaretDown, { className: clx(classes.columnBoxIcon, showColumns && classes.columnBoxIconActive) }), _jsxs("div", __assign({ className: clx(classes.columnList, showColumns && classes.columnListActive) }, { children: [_jsxs("div", __assign({ className: classes.column }, { children: [_jsx(CheckBoxInput, { value: !columnFilters ? true : columns.length === columnFilters.length, className: classes.columnCheckBox, classNames: { classes: { root: classes.columnCheckBoxRoot } }, onChange: function (_a) {
                                        var checked = _a.value;
                                        handleCheckChange("", checked, true);
                                    } }), "All Columns"] })), renderColumns()] }))] })) })));
};
