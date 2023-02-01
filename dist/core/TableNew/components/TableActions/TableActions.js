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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { TextInput, SelectInput } from "../../../../io";
import { useTableActionStyles } from "./styles";
import { ColumnSelector } from "../ColumnSelector";
import { SortSelector } from "../SortSelector";
import { InputAdornment } from "@mui/material";
import { debounce } from "lodash";
export var TableActions = function (_a) {
    var currentActions = _a.currentActions, setCurrentActions = _a.setCurrentActions, conditionFilters = _a.conditionFilters, columns = _a.columns;
    var classes = useTableActionStyles();
    var updateSearchValue = useRef(debounce(function (search) { return setCurrentActions(__assign(__assign({}, currentActions), { search: search })); }, 500));
    var handleConditionChange = function (_a) {
        var name = _a.value;
        var newConditionFilter = conditionFilters === null || conditionFilters === void 0 ? void 0 : conditionFilters.find(function (filter) { return filter.name === name; });
        setCurrentActions(__assign(__assign({}, currentActions), { conditionFilter: newConditionFilter }));
    };
    var handleColumnsChange = function (columnFilters) {
        setCurrentActions(__assign(__assign({}, currentActions), { columnFilters: columnFilters }));
    };
    var handleSearchChange = function (_a) {
        var search = _a.value;
        updateSearchValue.current(search);
    };
    var handleSortChange = function (order, columnKey) {
        setCurrentActions(__assign(__assign({}, currentActions), { sort: [{ order: order, column: columnKey }] }));
    };
    var getSearchPlaceholder = function () {
        var textColumns = columns.filter(function (column) { return typeof column.name === "string"; });
        var columnNames = textColumns.map(function (_a) {
            var name = _a.name;
            return name.toString().toLowerCase();
        });
        return "Search by ".concat(columnNames.join(", "));
    };
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(TextInput, { className: classes.searchInputElement, InputProps: {
                    classes: {
                        input: classes.searchInput,
                        adornedStart: classes.searchInputAdornment,
                    },
                    startAdornment: (_jsx(InputAdornment, __assign({ position: "start" }, { children: _jsx(BiSearch, {}, void 0) }), void 0)),
                    endAdornment: _jsx(InputAdornment, { position: "end" }, void 0),
                }, onChange: handleSearchChange, placeholder: getSearchPlaceholder() }, void 0), _jsx(SortSelector, { columns: columns, handleSelectSort: handleSortChange }, void 0), conditionFilters && (_jsx(SelectInput, { className: classes.selectInputElement, classNames: {
                    classes: { select: classes.selectInput, icon: classes.selectInputIcon },
                    optionLabel: classes.selectInputLabel,
                }, options: conditionFilters.map(function (_a) {
                    var name = _a.name;
                    return ({ label: name, value: name });
                }), value: currentActions.conditionFilter.name, onChange: handleConditionChange }, void 0)), _jsx(ColumnSelector, { columns: columns, columnFilters: currentActions.columnFilters, handleColumnChange: handleColumnsChange }, void 0)] }), void 0));
};
