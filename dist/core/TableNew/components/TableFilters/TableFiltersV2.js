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
import { useEffect, useState } from "react";
import { useTableFilterV2Styles } from "./useTableFilterV2Styles";
import clx from "classnames";
import { IoCloseOutline, IoFilterOutline } from "react-icons/io5";
import { FilterOption } from "./components/FilterOption/FilterOption";
import { Button } from "../../../Button";
import { GoPlus } from "react-icons/go";
var initialFilters = new Array(3).fill({
    column: "",
    operator: "",
    value: "",
});
export var TableFiltersV2 = function (_a) {
    var _b, _c, _d;
    var columns = _a.columns, filters = _a.filters, setFilters = _a.setFilters, classNames = _a.classNames;
    var _e = __read(useState(false), 2), open = _e[0], setOpen = _e[1];
    var classes = useTableFilterV2Styles();
    var _f = __read(useState([]), 2), currentFilters = _f[0], setCurrentFilters = _f[1];
    var _g = __read(useState(false), 2), isSubmitting = _g[0], setIsSubmitting = _g[1];
    var handleClearFilters = function () {
        setCurrentFilters(initialFilters);
    };
    var handleApplyFilters = function () {
        setIsSubmitting(true);
        var validateFilters = function (filters) {
            return filters.every(function (filter) {
                if (filter.column) {
                    return filter.operator && filter.value;
                }
                return true;
            });
        };
        if (validateFilters(currentFilters)) {
            var validFilters = currentFilters.filter(function (filter) { return filter.column; });
            if ((validFilters === null || validFilters === void 0 ? void 0 : validFilters.length) > 0) {
                setFilters === null || setFilters === void 0 ? void 0 : setFilters(validFilters);
            }
            setOpen(false);
        }
        else {
            return;
        }
        setIsSubmitting(false);
    };
    var handleFilterChange = function (index, filter) {
        var currentFilter = currentFilters[index];
        var newFilter = __assign(__assign({}, currentFilter), filter);
        var newFilters = __spreadArray([], __read(currentFilters), false);
        newFilters[index] = newFilter;
        setCurrentFilters(newFilters);
    };
    var handleAddNewColumnFilter = function () {
        setCurrentFilters(__spreadArray(__spreadArray([], __read(currentFilters), false), [
            {
                column: "",
                operator: "",
                value: "",
            },
        ], false));
    };
    var handleDeleteFilter = function (index) {
        if (currentFilters.length <= 3) {
            // we must have at least 3 filters
            return;
        }
        var newFilters = __spreadArray([], __read(currentFilters), false);
        newFilters.splice(index, 1);
        setCurrentFilters(newFilters);
    };
    useEffect(function () {
        var newFilter = filters.length > 0 ? filters : initialFilters;
        setCurrentFilters(newFilter);
        return function () {
            setCurrentFilters([]);
            setIsSubmitting(false);
        };
    }, [filters]);
    if (open) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "auto";
    }
    return (_jsxs("div", { children: [_jsxs("button", { className: clx(classes.filterButton, (_b = {},
                    _b[classes.filterButtonActive] = open || (filters === null || filters === void 0 ? void 0 : filters.length) > 0,
                    _b)), onClick: function () { return setOpen(!open); }, children: ["Filters ", _jsx(IoFilterOutline, {}), " "] }), _jsx("div", { className: clx(classes.root, (_c = {},
                    _c[classes.rootActive] = open,
                    _c)), children: _jsxs("div", { className: classes.container, children: [_jsx("div", { className: classes.overlay, onClick: function () { return setOpen(false); } }), _jsxs("div", { className: clx(classes.content, (_d = {}, _d[classes.contentActive] = open, _d)), children: [_jsxs("header", { className: classes.header, children: [_jsx("h6", { className: clx(classes.heading, classNames === null || classNames === void 0 ? void 0 : classNames.title), children: "Filter Options" }), _jsx("p", { className: classes.subHeading, children: "Select your preferred options below" }), _jsx("button", { title: "close", onClick: function () { return setOpen(false); }, className: classes.closeButton, children: _jsx(IoCloseOutline, {}) })] }), _jsx("div", { className: classes.body, children: _jsxs("div", { className: classes.filterOptionContainer, children: [currentFilters === null || currentFilters === void 0 ? void 0 : currentFilters.map(function (currentFilter, index) { return (_jsx(FilterOption, { columns: columns.filter(function (column) { var _a; return (column === null || column === void 0 ? void 0 : column.filterOperators) && ((_a = column === null || column === void 0 ? void 0 : column.filterOperators) === null || _a === void 0 ? void 0 : _a.length) > 0; }), value: currentFilter, onChange: function (args) {
                                                    handleFilterChange(index, args);
                                                }, onDelete: function () { return handleDeleteFilter(index); }, isSubmitting: isSubmitting, classNames: classNames }, index)); }), _jsxs(Button, { variant: "text", className: clx(classes.button, "text", classNames === null || classNames === void 0 ? void 0 : classNames.button), onClick: handleAddNewColumnFilter, children: [_jsx(GoPlus, {}), "Add a new filter"] })] }) }), _jsxs("div", { className: classes.footer, children: [_jsx(Button, { variant: "outline", className: clx(classes.footerButton, "outline", classNames === null || classNames === void 0 ? void 0 : classNames.button), onClick: handleClearFilters, children: "Clear Filters" }), _jsx(Button, { variant: "contained", className: clx(classes.footerButton, "contained", classNames === null || classNames === void 0 ? void 0 : classNames.button), onClick: handleApplyFilters, children: "Apply Filters" })] })] })] }) })] }));
};
