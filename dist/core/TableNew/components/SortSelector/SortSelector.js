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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useSortSelectorStyles } from "./styles";
import { ClickAwayListener } from "@mui/base";
import { CgSortAz } from "react-icons/cg";
import { SortOptions } from "../SortOptions";
import clx from "classnames";
export var SortSelector = function (_a) {
    var columns = _a.columns, handleSelectSort = _a.handleSelectSort;
    var classes = useSortSelectorStyles();
    var _b = __read(useState(false), 2), showColumns = _b[0], setShowColumns = _b[1];
    var _c = __read(useState(), 2), activeColumnKey = _c[0], setActiveColumnKey = _c[1];
    var renderColumns = function () {
        return columns.map(function (_a, index) {
            var name = _a.name, key = _a.key;
            return (_jsxs("div", __assign({ className: classes.sortColumn, onMouseEnter: function () {
                    setActiveColumnKey(key);
                } }, { children: [typeof name === "string" ? name : key.replace(/./g, " "), activeColumnKey === key && (_jsx(SortOptions, { handleClose: function () {
                            setActiveColumnKey(undefined);
                        }, handleSort: function (order) {
                            handleSelectSort(order, key);
                        } }))] }), index));
        });
    };
    return (_jsx(ClickAwayListener, __assign({ onClickAway: function () {
            setShowColumns(false);
            setActiveColumnKey(undefined);
        } }, { children: _jsxs("div", __assign({ className: classes.root }, { children: [_jsxs("div", __assign({ className: classes.sortDetails, onClick: function () {
                        setShowColumns(!showColumns);
                        setActiveColumnKey(undefined);
                    } }, { children: [_jsx("p", __assign({ className: classes.sortText }, { children: "Sort" })), _jsx(CgSortAz, { className: classes.sortIcon })] })), _jsxs("div", __assign({ className: clx(classes.sortColumns, showColumns && classes.sortColumnsActive) }, { children: [_jsx("p", __assign({ className: classes.sortHeading }, { children: "Sort by" })), renderColumns()] }))] })) })));
};
