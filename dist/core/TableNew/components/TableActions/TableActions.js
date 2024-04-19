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
import { debounce } from "lodash";
export var TableActions = function (_a) {
    var currentActions = _a.currentActions, setCurrentActions = _a.setCurrentActions, conditionFilters = _a.conditionFilters, columns = _a.columns, showSort = _a.showSort;
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
    return (_jsxs("div", __assign({ className: classes.root }, { children: [_jsx(TextInput, { className: classes.searchInputElement, classNames: { input: classes.searchInput }, leftIcon: _jsx(BiSearch, {}), iconSpacing: 8, onChange: handleSearchChange, placeholder: "Search table" }), showSort && _jsx(SortSelector, { columns: columns, handleSelectSort: handleSortChange }), conditionFilters && (_jsx(SelectInput, { className: classes.selectInputElement, classNames: { container: classes.selectContainer, control: classes.selectControl }, options: conditionFilters.map(function (_a) {
                    var name = _a.name;
                    return ({ label: name, value: name });
                }), value: currentActions.conditionFilter.name, onChange: handleConditionChange })), _jsx(ColumnSelector, { columns: columns, columnFilters: currentActions.columnFilters, handleColumnChange: handleColumnsChange })] })));
};
