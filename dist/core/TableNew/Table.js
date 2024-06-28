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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { TableActions, TableColumnActions, TableFilters, TablePagination, EmptyState, } from "./components";
import { useTableStyles } from "./styles";
import { Loader } from "../../core";
import { useTableStyles as useExternalTableStyles } from "../../stories/table-styles";
import { parseQueryVariables, initialColumnSearch } from "./helpers";
export var TableNew = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var columns = _a.columns, _s = _a.query, client = _s.client, QUERY = _s.name, variables = _s.variables, dataKey = _s.dataKey, getRows = _a.getRows, conditionFilters = _a.conditionFilters, showFilters = _a.showFilters, emptyState = _a.emptyState, _t = _a.showSort, showSort = _t === void 0 ? true : _t, hasStickyActions = _a.hasStickyActions, EmptyStateComponent = _a.EmptyStateComponent, _u = _a.search, search = _u === void 0 ? "single" : _u;
    var _v = __read(useState({
        data: null,
        pagination: {
            currentPage: 1,
            lastPage: 1,
            count: (_b = variables === null || variables === void 0 ? void 0 : variables.first) !== null && _b !== void 0 ? _b : 10,
        },
    }), 2), table = _v[0], setTable = _v[1];
    var isColumnSearch = search === "dynamic";
    var _w = __read(useState({
        search: isColumnSearch ? initialColumnSearch : "",
        sort: [],
        conditionFilter: conditionFilters ? conditionFilters[0] : undefined,
        columnFilters: columns,
    }), 2), actions = _w[0], setActions = _w[1];
    var _x = __read(useState([]), 2), filters = _x[0], setFilters = _x[1];
    var _y = __read(useState(false), 2), loading = _y[0], setLoading = _y[1];
    var getAllData = ((_d = (_c = actions === null || actions === void 0 ? void 0 : actions.search) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.length) === 0;
    var isColumnSearchParamsValid = ((_f = (_e = actions === null || actions === void 0 ? void 0 : actions.search) === null || _e === void 0 ? void 0 : _e.column) === null || _f === void 0 ? void 0 : _f.length) > 0 &&
        ((_h = (_g = actions === null || actions === void 0 ? void 0 : actions.search) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h.length) > 0;
    var classes = useTableStyles();
    var externalClasses = useExternalTableStyles();
    useEffect(function () {
        var _a, _b;
        queryApi(parseQueryVariables(actions.search, (_a = actions === null || actions === void 0 ? void 0 : actions.sort) !== null && _a !== void 0 ? _a : [], __assign(__assign({}, table === null || table === void 0 ? void 0 : table.pagination), { currentPage: 1 }), (_b = actions.conditionFilter.filter) !== null && _b !== void 0 ? _b : []));
    }, [
        isColumnSearch ? "" : actions.search,
        JSON.stringify(actions.sort),
        JSON.stringify(variables),
        JSON.stringify(actions.conditionFilter),
    ]);
    useEffect(function () {
        var _a, _b;
        if (!(table === null || table === void 0 ? void 0 : table.data))
            return;
        queryApi(parseQueryVariables(actions.search, (_a = actions === null || actions === void 0 ? void 0 : actions.sort) !== null && _a !== void 0 ? _a : [], table === null || table === void 0 ? void 0 : table.pagination, (_b = actions.conditionFilter.filter) !== null && _b !== void 0 ? _b : []));
    }, [(_j = table === null || table === void 0 ? void 0 : table.pagination) === null || _j === void 0 ? void 0 : _j.count, (_k = table === null || table === void 0 ? void 0 : table.pagination) === null || _k === void 0 ? void 0 : _k.currentPage]);
    useEffect(function () {
        var _a, _b, _c;
        if (isColumnSearch) {
            if (!((_a = actions.search) === null || _a === void 0 ? void 0 : _a.value)) {
                queryApi(parseQueryVariables(actions.search, (_b = actions === null || actions === void 0 ? void 0 : actions.sort) !== null && _b !== void 0 ? _b : [], table === null || table === void 0 ? void 0 : table.pagination, (_c = actions.conditionFilter.filter) !== null && _c !== void 0 ? _c : []));
            }
        }
    }, [getAllData]);
    useEffect(function () {
        var _a, _b;
        if (!isColumnSearchParamsValid)
            return;
        queryApi(parseQueryVariables(__assign(__assign({}, actions.search), { operator: "like" }), (_a = actions === null || actions === void 0 ? void 0 : actions.sort) !== null && _a !== void 0 ? _a : [], __assign(__assign({}, table === null || table === void 0 ? void 0 : table.pagination), { currentPage: 1 }), (_b = actions.conditionFilter.filter) !== null && _b !== void 0 ? _b : []));
    }, [
        (_l = actions === null || actions === void 0 ? void 0 : actions.search) === null || _l === void 0 ? void 0 : _l.column,
        (_m = actions === null || actions === void 0 ? void 0 : actions.search) === null || _m === void 0 ? void 0 : _m.value,
        getAllData,
    ]);
    var queryApi = function (queryVariables) { return __awaiter(void 0, void 0, void 0, function () {
        var propVariables, _a, data, error, _b, tableData, pagination;
        var _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    setLoading(true);
                    propVariables = __assign({}, variables);
                    propVariables === null || propVariables === void 0 ? true : delete propVariables.refreshToken;
                    return [4 /*yield*/, client.query({
                            query: QUERY,
                            variables: __assign(__assign(__assign({}, (propVariables !== null && propVariables !== void 0 ? propVariables : {})), (queryVariables !== null && queryVariables !== void 0 ? queryVariables : {})), { page: (table === null || table === void 0 ? void 0 : table.data) ? queryVariables === null || queryVariables === void 0 ? void 0 : queryVariables.page : (_c = variables === null || variables === void 0 ? void 0 : variables.page) !== null && _c !== void 0 ? _c : 1, first: (table === null || table === void 0 ? void 0 : table.data) ? queryVariables === null || queryVariables === void 0 ? void 0 : queryVariables.first : (_d = variables === null || variables === void 0 ? void 0 : variables.first) !== null && _d !== void 0 ? _d : 10 }),
                            fetchPolicy: "network-only",
                        })];
                case 1:
                    _a = _f.sent(), data = _a.data, error = _a.error;
                    setLoading(false);
                    if (data && !error) {
                        _b = data[dataKey], tableData = _b.data, pagination = _b.paginatorInfo;
                        setTable({
                            data: tableData,
                            pagination: __assign(__assign({}, ((_e = table === null || table === void 0 ? void 0 : table.pagination) !== null && _e !== void 0 ? _e : {})), { currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.currentPage, lastPage: pagination === null || pagination === void 0 ? void 0 : pagination.lastPage }),
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var displayColumns = function () {
        var _a;
        return ((_a = actions === null || actions === void 0 ? void 0 : actions.columnFilters) !== null && _a !== void 0 ? _a : columns).map(function (_a, index) {
            var name = _a.name;
            return (_jsx("td", __assign({ className: classes.tHeadData }, { children: name }), index));
        });
    };
    var rows = getRows((actions === null || actions === void 0 ? void 0 : actions.conditionFilter)
        ? !actions.conditionFilter.filter
            ? actions.conditionFilter.condition((_o = table === null || table === void 0 ? void 0 : table.data) !== null && _o !== void 0 ? _o : [])
            : (_p = table === null || table === void 0 ? void 0 : table.data) !== null && _p !== void 0 ? _p : []
        : (_q = table === null || table === void 0 ? void 0 : table.data) !== null && _q !== void 0 ? _q : [], externalClasses);
    var displayRows = function () {
        return rows.map(function (row, index) {
            var _a;
            return (_jsx("tr", __assign({ className: classes.tRow }, { children: ((_a = actions === null || actions === void 0 ? void 0 : actions.columnFilters) !== null && _a !== void 0 ? _a : columns).map(function (_a, index) {
                    var _b;
                    var key = _a.key, actions = _a.actions;
                    return (_jsx("td", __assign({ className: classes.tRowData, valign: "top" }, { children: _jsxs("p", __assign({ className: hasStickyActions ? classes.tableRowText : undefined }, { children: [row[key], actions && (_jsx("div", __assign({ className: hasStickyActions ? classes.tableRowActionsContainer : undefined }, { children: _jsx(TableColumnActions, { actions: actions, identifier: (_b = row["identifier"]) !== null && _b !== void 0 ? _b : "" }) })))] })) }), index));
                }) }), index));
        });
    };
    if (!table.data)
        return _jsx(Loader, {});
    if (rows.length === 0 && EmptyStateComponent && !actions.search)
        return (_jsxs(_Fragment, { children: [_jsx(EmptyStateComponent, {}), loading && _jsx(Loader, { className: classes.tableLoader })] }));
    return (_jsxs("div", __assign({ style: { position: "relative" } }, { children: [_jsx(TableActions, { currentActions: actions, setCurrentActions: setActions, conditionFilters: conditionFilters, columns: columns, showSort: showSort, columnSearch: isColumnSearch }), showFilters && _jsx(TableFilters, { columns: columns, filters: filters, setFilters: setFilters }), _jsxs("table", __assign({ className: classes.root }, { children: [_jsx("thead", __assign({ className: classes.tHead }, { children: _jsx("tr", __assign({ className: classes.tRow }, { children: displayColumns() })) })), rows.length > 0 && _jsx("tbody", { children: displayRows() })] })), rows.length === 0 && _jsx(EmptyState, __assign({}, emptyState)), rows.length > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { className: classes.tableSeparator }), _jsx(TablePagination, __assign({}, ((_r = table.pagination) !== null && _r !== void 0 ? _r : { currentPage: 1, lastPage: 1, count: 10 }), { setTablePagination: function (pagination) {
                            setTable(__assign(__assign({}, table), { pagination: pagination }));
                        } }))] })), loading && _jsx(Loader, { className: classes.tableLoader })] })));
};
