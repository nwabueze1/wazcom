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
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useTableFiltersStyles } from "./styles";
import { ClickAwayListener } from "@mui/base";
import { AiOutlinePlus } from "react-icons/ai";
import clx from "classnames";
import { FilterSelector } from "../FilterSelector";
import { Filter } from "../Filter";
export var TableFilters = function (_a) {
    var columns = _a.columns, filters = _a.filters, setFilters = _a.setFilters;
    var classes = useTableFiltersStyles();
    var _b = __read(useState(false), 2), showFilters = _b[0], setShowFilters = _b[1];
    var _c = __read(useState(), 2), activeColumnKey = _c[0], setActiveColumnKey = _c[1];
    var renderColumns = function () {
        return columns.map(function (_a, index) {
            var name = _a.name, key = _a.key;
            var columnName = typeof name === "string" ? name : key.replace(/./g, " ");
            return (_jsxs("div", __assign({ className: classes.filterColumn, onMouseEnter: function () {
                    setActiveColumnKey(key);
                } }, { children: [columnName, activeColumnKey === key && (_jsx(FilterSelector, { className: classes.filterSelector, column: columns.find(function (column) { return column.key === activeColumnKey; }), handleSelectFilter: handleSelectFilter, handleClose: function () {
                            setActiveColumnKey(undefined);
                        } }, void 0))] }), index));
        });
    };
    var handleSelectFilter = function (filter) {
        setFilters(__spreadArray(__spreadArray([], __read(filters), false), [filter], false));
    };
    var handleDeleteFilter = function (index) {
        var newFilters = __spreadArray([], __read(filters), false);
        newFilters.splice(index, 1);
        setFilters(newFilters);
    };
    var renderFilters = function () {
        return filters.map(function (filter, index) {
            var _a, _b;
            var column = columns.find(function (_a) {
                var key = _a.key;
                return key === filter.column;
            });
            return (_createElement(Filter, __assign({}, filter, { name: (_a = column === null || column === void 0 ? void 0 : column.name) !== null && _a !== void 0 ? _a : "", type: (_b = column === null || column === void 0 ? void 0 : column.type) !== null && _b !== void 0 ? _b : "string", handleDelete: function () {
                    handleDeleteFilter(index);
                }, key: index })));
        });
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [renderFilters(), _jsx(ClickAwayListener, __assign({ onClickAway: function () {
                    setShowFilters(false);
                    setActiveColumnKey(undefined);
                } }, { children: _jsxs("div", __assign({ className: classes.filterAddIconParent }, { children: [_jsx("span", __assign({ className: classes.filterAddIcon, onClick: function () {
                                showFilters && setActiveColumnKey(undefined);
                                setShowFilters(!showFilters);
                            } }, { children: _jsx(AiOutlinePlus, {}, void 0) }), void 0), _jsx("div", __assign({ className: clx(classes.filterColumns, showFilters && classes.filterColumnsActive) }, { children: renderColumns() }), void 0)] }), void 0) }), void 0)] }), void 0));
};
