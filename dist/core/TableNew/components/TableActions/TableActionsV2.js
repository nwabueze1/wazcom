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
import { TextInput } from "../../../../io";
import { useTableActionStyles } from "./styles";
import { SortSelector } from "../SortSelector";
import { debounce } from "lodash";
import { ColumnSearch } from "../ColumnSearch";
import clx from "classnames";
import { TableFiltersV2 } from "../TableFilters/TableFiltersV2";
export var TableActionsV2 = function (_a) {
    var currentActions = _a.currentActions, setCurrentActions = _a.setCurrentActions, conditionFilters = _a.conditionFilters, columns = _a.columns, showSort = _a.showSort, _b = _a.columnSearch, columnSearch = _b === void 0 ? false : _b, data = _a.data, filters = _a.filters, setFilters = _a.setFilters, classNames = _a.classNames;
    var classes = useTableActionStyles();
    var updateSearchValue = useRef(debounce(function (search) { return setCurrentActions(__assign(__assign({}, currentActions), { search: search })); }, 500));
    var handleConditionChange = function (_a) {
        var name = _a.value;
        var newConditionFilter = conditionFilters === null || conditionFilters === void 0 ? void 0 : conditionFilters.find(function (filter) { return filter.name === name; });
        setCurrentActions(__assign(__assign({}, currentActions), { conditionFilter: newConditionFilter }));
    };
    // const handleColumnsChange = (columnFilters: TableColumn[]) => {
    //   setCurrentActions({ ...currentActions, columnFilters });
    // };
    var handleSearchChange = function (_a) {
        var search = _a.value;
        updateSearchValue.current(search);
    };
    var handleSortChange = function (order, columnKey) {
        setCurrentActions(__assign(__assign({}, currentActions), { sort: [{ order: order, column: columnKey }] }));
    };
    var renderSearch = function () {
        return columnSearch ? (_jsx(ColumnSearch, { columns: columns, search: currentActions.search,
            onChange: function (e) {
                var _a;
                return setCurrentActions(__assign(__assign({}, currentActions), { search: __assign(__assign({}, currentActions.search), (_a = {}, _a[e.name] = e.value, _a)) }));
            } })) : (_jsx(TextInput, { className: classes.searchInputElement, classNames: { input: classes.searchInput }, leftIcon: _jsx(BiSearch, {}), iconSpacing: 8, onChange: handleSearchChange, placeholder: "Search table" }));
    };
    return (_jsxs("div", { className: classes.root, children: [_jsx("div", { className: classes.conditionFiltersContainer, children: conditionFilters === null || conditionFilters === void 0 ? void 0 : conditionFilters.map(function (filter, index) {
                    var _a, _b;
                    return (_jsxs("button", { className: clx(classes.conditionFilter, (_a = {},
                            _a[classes.conditionFilterActive] = currentActions.conditionFilter.name === filter.name,
                            _a)), onClick: function () { return handleConditionChange({ name: filter.name, value: filter.name }); }, children: [filter.name, filter.condition && (_jsx("span", { className: clx(classes.conditionFilterCount, (_b = {},
                                    _b[classes.conditionFilterCountActive] = currentActions.conditionFilter.name === filter.name,
                                    _b)), children: filter.condition(data).length }))] }, index));
                }) }), renderSearch(), showSort && _jsx(SortSelector, { isV2: true, columns: columns, handleSelectSort: handleSortChange }), _jsx(TableFiltersV2, { columns: columns, filters: filters !== null && filters !== void 0 ? filters : [], setFilters: setFilters ? setFilters : undefined, classNames: classNames === null || classNames === void 0 ? void 0 : classNames.filterOptions })] }));
};
