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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Checkbox } from "@mui/material";
import clx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { Accordion } from "../../../Accordion";
import { TextInput } from "../../../../io";
import { useFilterStyles } from "./styles";
export var TableFilter = function (_a) {
    var _b, _c;
    var showFilter = _a.showFilter, setShowFilter = _a.setShowFilter, fields = _a.fields, values = _a.values, filters = _a.filters, setFilters = _a.setFilters;
    var classes = useFilterStyles();
    var _d = __read(useState(fields), 2), filterFields = _d[0], setFilterFields = _d[1];
    var _e = __read(useState(""), 2), searchField = _e[0], setSearchField = _e[1];
    var handleSetFilter = function (field, value) {
        setFilters(function (filters) {
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
    var getUniqueValues = useCallback(function (fieldName, values) {
        if (!values || values.length < 1)
            return [];
        var data = [];
        values.map(function (item) {
            var _a, _b;
            if (!((_a = item["".concat(fieldName)]) === null || _a === void 0 ? void 0 : _a.toString()) ||
                data.includes(item["".concat(fieldName)].toString()))
                return null;
            data.push((_b = item["".concat(fieldName)]) === null || _b === void 0 ? void 0 : _b.toString());
            return null;
        });
        return data;
    }, []);
    var getCheckedState = function (field, value) {
        var filter = filters.find(function (filter) { return filter.field === field; });
        if (filter && filter.values.includes(value)) {
            return true;
        }
        return false;
    };
    var renderFilterOptions = useCallback(function () {
        return filterFields.map(function (_a) {
            var name = _a.name, label = _a.label;
            return (_jsx(Accordion, __assign({ title: label }, { children: getUniqueValues(label, values).map(function (item, key) { return (_jsxs("div", __assign({ className: classes.filterItem }, { children: [_jsx(Checkbox, { checked: !getCheckedState(label, item), onChange: function () { return handleSetFilter(label, item); } }, void 0), _jsx("div", { children: item }, void 0)] }), key)); }) }), name));
        });
    }, [filterFields, filters, values]);
    var handleSearchFieldChange = function (e) {
        setSearchField(e.target.value);
    };
    useEffect(function () {
        setFilterFields(fields);
    }, [fields]);
    useEffect(function () {
        setFilterFields(function () {
            return fields.filter(function (item) {
                return item.name.toLowerCase().includes(searchField.toLowerCase());
            });
        });
    }, [searchField]);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: clx(classes.overlay, (_b = {},
                    _b[classes.showOverlay] = showFilter,
                    _b)), onClick: function () { return setShowFilter(false); } }, void 0), _jsxs("div", __assign({ className: clx(classes.root, (_c = {},
                    _c[classes.show] = showFilter,
                    _c)) }, { children: [_jsx(TextInput, { placeholder: "Search", name: "search", value: searchField, onChange: handleSearchFieldChange }, void 0), renderFilterOptions()] }), void 0)] }, void 0));
};
