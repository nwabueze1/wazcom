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
import clx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { Checkbox, ClickAwayListener, MenuItem } from "@mui/material";
import { Accordion } from "../../../Accordion";
import { useFilterStyles } from "./styles";
import { FilterAlt } from "@mui/icons-material";
import { Button } from "../../../Button";
import { useTableControlsStyles } from "../TableControls/styles";
import { getJsxContent } from "../../helpers";
export var TableFilter = function (_a) {
    var _b;
    var showFilter = _a.showFilter, setShowFilter = _a.setShowFilter, fields = _a.fields, tableValues = _a.values, filters = _a.filters, setFilters = _a.setFilters;
    var classes = useFilterStyles();
    var controlClasses = useTableControlsStyles();
    var _c = __read(useState(fields), 2), filterFields = _c[0], setFilterFields = _c[1];
    var _d = __read(useState(filters), 2), newFilters = _d[0], setNewFilters = _d[1];
    var handleSetFilter = function (field, value) {
        setNewFilters(function (filters) {
            var index = filters.findIndex(function (filter) { return filter.field === field; });
            if (index === -1) {
                return __spreadArray(__spreadArray([], __read(filters), false), [
                    {
                        field: field,
                        values: [value],
                    },
                ], false);
            }
            var newArr = __spreadArray([], __read(filters), false);
            if (newArr[index].values.includes(value)) {
                var itemIndex = newArr[index].values.findIndex(function (item) { return item === value; });
                newArr[index].values.splice(itemIndex, 1);
                return newArr;
            }
            newArr[index] = __assign(__assign({}, newArr[index]), { values: __spreadArray(__spreadArray([], __read(filters[index].values), false), [value.toString()], false) });
            return newArr;
        });
    };
    var getUniqueValues = function (fieldName, values) {
        console.log(fieldName, values);
        if (!values || values.length < 1)
            return [];
        console.log("============");
        var data = [];
        values.map(function (item) {
            var fieldValue = item["".concat(fieldName)];
            if (typeof fieldValue == "object") {
                fieldValue = getJsxContent(fieldValue);
            }
            console.log(fieldValue === null || fieldValue === void 0 ? void 0 : fieldValue.toString(), data.includes(fieldValue === null || fieldValue === void 0 ? void 0 : fieldValue.toString()));
            if (!(fieldValue === null || fieldValue === void 0 ? void 0 : fieldValue.toString()) || data.includes(fieldValue.toString()))
                return null;
            console.log("pushhhhh");
            data.push(fieldValue.toString());
            return null;
        });
        console.log("data", data);
        return data;
    };
    var getCheckedState = function (field, value) {
        var filter = newFilters.find(function (filter) { return filter.field === field; });
        if (filter && filter.values.includes(value)) {
            return true;
        }
        return false;
    };
    console.log(tableValues);
    var renderFilterOptions = useCallback(function () {
        return filterFields.map(function (_a) {
            var name = _a.name, label = _a.label;
            return (_jsx(MenuItem, __assign({ className: classes.filterItemContainer }, { children: _jsx(Accordion, __assign({ title: label }, { children: getUniqueValues(label, tableValues).map(function (item, key) {
                        console.log(label, item);
                        return (_jsxs("div", __assign({ className: classes.filterItem }, { children: [_jsx(Checkbox, { checked: !getCheckedState(label, item), onChange: function () { return handleSetFilter(label, item); } }, void 0), _jsx("div", { children: item }, void 0)] }), key));
                    }) }), void 0) }), name));
        });
    }, [filterFields, newFilters, tableValues]);
    var handleClickAway = function () {
        setShowFilter(false);
    };
    useEffect(function () {
        setFilterFields(fields);
    }, [fields]);
    return (_jsx(ClickAwayListener, __assign({ onClickAway: handleClickAway }, { children: _jsxs("div", __assign({ className: classes.container }, { children: [_jsxs(Button, __assign({ variant: "outlined", className: controlClasses.controlButton, onClick: function () { return setShowFilter(true); } }, { children: [_jsx("span", __assign({ className: controlClasses.controlButtonText }, { children: "Filter" }), void 0), _jsx(FilterAlt, {}, void 0)] }), void 0), _jsxs("div", __assign({ className: clx(classes.filterItems, (_b = {},
                        _b[classes.show] = showFilter,
                        _b)) }, { children: [_jsx(MenuItem, __assign({ className: clx(classes.filterItemContainer, classes.filterItemsHeader) }, { children: "FILTER BY:" }), void 0), renderFilterOptions(), _jsx(MenuItem, { children: _jsxs("div", __assign({ className: classes.filterActionButtons }, { children: [_jsx(Button, __assign({ className: clx(classes.filterActionButton, classes.filterActionButtonOutline), onClick: handleClickAway }, { children: "Cancel" }), void 0), _jsx(Button, __assign({ className: classes.filterActionButton, onClick: function () { return setFilters(newFilters); } }, { children: "Apply Filter" }), void 0)] }), void 0) }, void 0)] }), void 0)] }), void 0) }), void 0));
};
