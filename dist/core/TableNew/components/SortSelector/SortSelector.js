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
import { FaSortAlphaDown } from "react-icons/fa";
import clx from "classnames";
export var SortSelector = function (_a) {
    var columns = _a.columns, handleSelectSort = _a.handleSelectSort, _b = _a.isV2, isV2 = _b === void 0 ? false : _b;
    var classes = useSortSelectorStyles();
    var _c = __read(useState(false), 2), showColumns = _c[0], setShowColumns = _c[1];
    var _d = __read(useState(), 2), activeColumnKey = _d[0], setActiveColumnKey = _d[1];
    var renderColumns = function () {
        return columns.map(function (_a, index) {
            var name = _a.name, key = _a.key, sortKey = _a.sortKey;
            return (_jsxs("div", { className: classes.sortColumn, onMouseEnter: function () {
                    setActiveColumnKey(key);
                }, children: [typeof name === "string" ? name : key.replace(/./g, " "), activeColumnKey === key && (_jsx(SortOptions, { handleClose: function () {
                            setActiveColumnKey(undefined);
                        }, handleSort: function (order) {
                            handleSelectSort(order, sortKey !== null && sortKey !== void 0 ? sortKey : key);
                        } }))] }, index));
        });
    };
    return (_jsx(ClickAwayListener, { onClickAway: function () {
            setShowColumns(false);
            setActiveColumnKey(undefined);
        }, children: _jsxs("div", { className: clx(classes.root, isV2 && classes.rootv2), children: [_jsxs("div", { className: clx(classes.sortDetails, isV2 && "v2"), onClick: function () {
                        setShowColumns(!showColumns);
                        setActiveColumnKey(undefined);
                    }, children: [_jsx("p", { className: classes.sortText, children: "Sort" }), isV2 ? (_jsx(FaSortAlphaDown, { className: classes.sortIconV2 })) : (_jsx(CgSortAz, { className: classes.sortIcon }))] }), _jsxs("div", { className: clx(classes.sortColumns, showColumns && classes.sortColumnsActive), children: [_jsx("p", { className: classes.sortHeading, children: "Sort by" }), renderColumns()] })] }) }));
};
